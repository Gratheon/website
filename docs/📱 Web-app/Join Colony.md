---
sidebar_position: 5
title: Join Colony (Merge Hives)
---

# Join Colony Feature

The Join Colony feature allows beekeepers to merge two hives together, combining their colonies into a single hive. This is a common beekeeping practice used to strengthen weak colonies, consolidate resources, or manage queen genetics.

## Overview

When joining colonies, boxes (except BOTTOM and GATE) from the source hive are moved to the top of the target hive, and the source hive is marked as merged. The beekeeper can choose how to handle the queens during the merge process.

## User Interface

### Accessing the Feature

1. Navigate to a hive view
2. Click the **"Join Colony"** button (located at the top, after "Create Inspection" and "Split Hive")
3. The Join Colony modal opens

### Modal Interface

The modal displays a two-panel layout:

```
┌─────────────────────────────────────────────────┐
│            Join Colonies                        │
├─────────────────────────────────────────────────┤
│                                                 │
│  ┌──────────┐         ┌───┐         ┌────────┐ │
│  │ Source   │         │ + │         │ Target │ │
│  │ Hive A   │    ←→   │   │    ←→   │ Hive B │ │
│  │ 🐝 5000  │         └───┘         │🐝 3000 │ │
│  │ Carnica  │    "Both queens       │Italian │ │
│  │ 2024     │     kept alive"       │ 2023   │ │
│  └──────────┘                       └────────┘ │
│                                                 │
│  Available Hives:                              │
│  [Hive C] [Hive D] [Hive E]                   │
│                                                 │
│           [Cancel]  [Join Colonies]            │
└─────────────────────────────────────────────────┘
```

### Information Displayed

**For Each Hive:**
- Hive name
- Bee count (estimated population)
- Queen race
- Queen year (age)

## Merge Types

The feature offers three merge type options, selectable by clicking the toggle button between the hives:

### 1. Both Queens (+)
- **Symbol:** `+`
- **Behavior:** Both queens are kept alive in the merged hive
- **Outcome:** The queens will compete, and the stronger one typically survives
- **Use Case:** Natural selection when unsure which queen is superior

### 2. Target Queen (→)
- **Symbol:** `→`
- **Behavior:** Target hive queen is kept, source hive queen is removed by beekeeper
- **Outcome:** Target hive queen leads the merged colony
- **Use Case:** Beekeeper prefers the target queen's genetics or productivity

### 3. Source Queen (←)
- **Symbol:** `←`
- **Behavior:** Source hive queen is kept, target hive queen is removed by beekeeper
- **Outcome:** Source hive queen leads the merged colony
- **Use Case:** Beekeeper prefers the source queen's genetics or age

## Box Movement Logic

### Boxes That Stay in Source Hive
- **BOTTOM boxes:** Cannot be moved (structural foundation)
- **GATE boxes:** Entrance boxes remain with source structure

### Boxes That Move to Target Hive
- **DEEP boxes:** Brood boxes move to target
- **SUPER boxes:** Honey supers move to target
- **All other box types:** Move to target

### Position Management
- Moved boxes are placed **on top** of existing target hive boxes
- Positions are automatically recalculated (highest positions assigned)
- Relative order of moved boxes is preserved

## Database Schema

### Hive Table Updates

**Source Hive:**
```sql
status = 'merged'
merged_into_hive_id = [target_hive_id]
merge_date = [current_timestamp]
merge_type = 'both_queens' | 'source_queen_kept' | 'target_queen_kept'
```

**Target Hive:**
- No status change (remains 'active')
- Gains boxes from source hive
- Box count increases

### Migration
```sql
-- Migration: 20251205130000_add_hive_merge_tracking.sql
ALTER TABLE hives
  ADD COLUMN merged_into_hive_id INT UNSIGNED NULL,
  ADD COLUMN merge_date DATETIME NULL,
  ADD COLUMN merge_type ENUM('both_queens', 'source_queen_kept', 'target_queen_kept') NULL,
  ADD INDEX idx_merged_into_hive_id (merged_into_hive_id);
```

## GraphQL API

### Mutation

```graphql
mutation JoinHives {
  joinHives(
    sourceHiveId: "123"
    targetHiveId: "456"
    mergeType: "both_queens"
  ) {
    id
    name
    mergedFromHives {
      id
      name
      mergeDate
      mergeType
    }
  }
}
```

### Query Fields

**On Any Hive:**
```graphql
query GetHive {
  hive(id: "123") {
    id
    name
    status
    
    # If this hive was merged into another
    mergedIntoHive {
      id
      name
    }
    mergeDate
    mergeType
    
    # If other hives were merged into this one
    mergedFromHives {
      id
      name
      mergeDate
      mergeType
    }
  }
}
```

## Post-Merge Behavior

### Source Hive (Merged Hive)

**Status:**
- `status = 'merged'`
- Non-editable (no Edit, Split, Join, or Create Inspection buttons)
- Can be deleted via "Remove hive" button

**Display:**
- Shows "Merged into [Target Hive Name]" with clickable link
- Displays merge date
- Grayed out appearance in apiary list

**Remaining Boxes:**
- BOTTOM box(es)
- GATE box(es) (if any)

**Navigation:**
- Link to target hive is clickable
- Can navigate between merged and target hives

### Target Hive

**Status:**
- Remains `active` and fully editable
- All normal operations available (Edit, Split, Join, Inspect)

**Display:**
- Shows "Merged from [Source Hive Names]" with dates
- Lists all source hives if multiple merges occurred
- Each source hive name is a clickable link

**Boxes:**
- Original boxes remain in original positions
- Merged boxes added on top
- Total box count increases

## Implementation Details

### Backend (swarm-api)

**Model Methods:**
- `Hive.MarkAsMerged()` - Updates source hive status and tracking fields
- `Hive.GetMergedIntoHive()` - Retrieves target hive reference
- `Hive.GetMergedFromHives()` - Lists all source hives merged into this hive
- `Box.MoveBoxesToHive()` - Moves boxes and updates positions
- `Box.GetMaxPosition()` - Gets highest box position for placement
- `Box.GetBoxesByTypeForHive()` - Filters boxes by type (BOTTOM, GATE, etc.)

**Resolver:**
```go
func JoinHives(sourceHiveID, targetHiveID, mergeType string) (*Hive, error) {
  // 1. Validate merge type
  // 2. Get both hives
  // 3. Get boxes to move (exclude BOTTOM/GATE)
  // 4. Move boxes to target (on top)
  // 5. Mark source as merged
  // 6. Publish real-time events
  // 7. Return updated target hive
}
```

### Frontend (web-app)

**Components:**
- `JoinColonyModal.tsx` - Main modal interface (260 lines)
- `JoinColonyModal.module.less` - Styling (130 lines)

**State Management:**
- Modal open/close state
- Selected target hive
- Selected merge type
- Loading states
- Error handling

**Key Features:**
- Visual hive comparison
- Interactive merge type toggle
- Real-time validation
- Error messaging
- Success redirect

## User Workflow

### Step-by-Step Process

1. **Open Source Hive**
   - Navigate to the hive you want to merge from

2. **Click "Join Colony"**
   - Button located at top of hive view
   - Only visible if hive is editable (not collapsed/merged)

3. **Select Target Hive**
   - Choose from list of available hives in same apiary
   - View target hive information (bee count, queen details)

4. **Choose Merge Type**
   - Click the toggle button between hives
   - Cycles through: + → → → ← → + (repeats)
   - Read description to understand each option

5. **Confirm Merge**
   - Review both hives' information
   - Click "Join Colonies" button
   - Confirm the operation

6. **Automatic Processing**
   - Boxes move from source to target
   - Source hive marked as merged
   - Positions recalculated
   - Real-time events published

7. **View Results**
   - Redirected to target hive
   - See merged boxes on top
   - Source hive shows "Merged into [Target]"
   - Target hive shows "Merged from [Source]"

## Business Rules

### Validation
- ✅ Both hives must exist
- ✅ Both hives must belong to same user
- ✅ Both hives must be in same apiary
- ✅ Merge type must be valid
- ✅ Source hive must not already be merged
- ✅ Source hive must not be collapsed

### Constraints
- Cannot merge hive into itself
- Cannot merge collapsed hives
- Cannot merge already-merged hives
- Cannot select hives from different apiaries

### Irreversible Operation
⚠️ **Warning:** Merge operation is permanent. There is currently no "undo" functionality.

## Visual Feedback

### Apiary List View
- Merged hives appear grayed out
- Opacity reduced to 0.6
- Hive name shown with strikethrough (italic)
- Border color changed to gray

### Hive Detail View
- "Merged into" banner with target hive link
- Merge date displayed
- Limited action buttons (only delete available)
- No editing capabilities

### CSS Styling
```less
.mergedHive {
  background-color: #e7e7e7;
  border: 1px solid #cccccc;
  opacity: 0.6;
  
  .title {
    text-decoration: line-through;
    font-style: italic;
  }
}
```

## Real-Time Updates

The join operation publishes events via Redis pub/sub:

**Events Published:**
1. `hive:join` - Target hive updated (event sent to target hive ID)
2. `hive:merged` - Source hive marked as merged (event sent to source hive ID)

**Subscribers:**
- **event-stream-filter** - Broadcasts to connected websocket clients
- Other users viewing the same hives see updates immediately

## Error Handling

### Common Errors

**"Source hive not found"**
- Hive ID invalid or user doesn't own it

**"Target hive not found"**
- Selected target doesn't exist or not accessible

**"Invalid merge type"**
- Merge type must be one of: both_queens, source_queen_kept, target_queen_kept

**"No boxes to move"**
- Source hive only contains BOTTOM/GATE boxes

### Error Display
- Error messages shown in red banner at top of modal
- User can correct issue and retry
- Modal remains open on error

## Testing Scenarios

### Basic Merge Test
1. Create two hives in same apiary
2. Add multiple boxes to source hive
3. Open source hive
4. Click "Join Colony"
5. Select target hive
6. Choose merge type
7. Submit
8. ✅ Verify boxes moved
9. ✅ Verify source shows "Merged into"
10. ✅ Verify target shows "Merged from"

### Edge Cases
1. **Only BOTTOM box:** Hive still marked merged, nothing moves
2. **Multiple merges:** Target can receive from multiple sources
3. **Navigation:** Links work bidirectionally
4. **Deletion:** Merged hive can be deleted

## Related Features

- **[Split Colony](#split-colony)** - Opposite operation: create new hive from existing one
- **Collapse Hive** - Mark inactive hive (different from merge)
- **Delete Hive** - Remove hive entirely

## Future Enhancements

Potential improvements for future releases:

- [ ] Undo merge (within 24 hours)
- [ ] Confirmation dialog before merge
- [ ] Box count preview in modal
- [ ] Email notifications
- [ ] Merge analytics and statistics
- [ ] Bulk merge operations
- [ ] Scheduled merges (future date)
- [ ] Merge templates/presets

## Resources

- **Implementation Guide:** See `HIVE_JOIN_COMPLETE.md` in project root
- **API Reference:** See swarm-api GraphQL schema
- **UI Components:** `web-app/src/page/hiveEdit/JoinColonyModal.tsx`
- **Database Schema:** `swarm-api/migrations/20251205130000_add_hive_merge_tracking.sql`

