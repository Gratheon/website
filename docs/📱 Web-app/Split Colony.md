---
sidebar_position: 4
title: Split Colony
---

# Split Colony Feature

The Split Colony feature allows beekeepers to create a new hive by moving selected frames from an existing hive. This is a fundamental beekeeping practice used to prevent swarming, expand operations, or create nucleus colonies.

## Overview

When splitting a colony, the beekeeper selects 1-10 frames from any boxes in the source hive. These frames are moved to a newly created hive with a single deep box. The source hive remains active with its remaining frames.

## User Interface

### Accessing the Feature

1. Navigate to a hive view
2. Click the **"Split Hive"** button (located at the top, after "Create Inspection")
3. The Split Hive modal opens

### Modal Interface

The modal provides a visual frame selection interface:

```
┌────────────────────────────────────────────┐
│           Split Hive                       │
├────────────────────────────────────────────┤
│                                            │
│ New Hive Name: [Luna      ] [🔄]          │
│                                            │
│ Select Frames (3/10):                      │
│                                            │
│ Box 3 (DEEP):                              │
│ ☑️ Frame 1  ☐ Frame 2  ☑️ Frame 3         │
│                                            │
│ Box 2 (SUPER):                             │
│ ☐ Frame 1  ☐ Frame 2  ☐ Frame 3          │
│                                            │
│ Box 1 (DEEP):                              │
│ ☐ Frame 1  ☑️ Frame 2  ☐ Frame 3          │
│                                            │
│        [Cancel]  [Split Hive]              │
└────────────────────────────────────────────┘
```

### Features

- **Frame Preview:** Visual representation of each frame with image thumbnails
- **Box Grouping:** Frames organized by their box for easy navigation
- **Selection Counter:** Shows selected count out of maximum (10)
- **Random Name Generator:** Auto-generates hive names with refresh button
- **Multi-language Support:** Name generation in user's language (EN, RU, ET, TR, PL, DE, FR)

## Frame Selection

### Selection Rules
- **Minimum:** Must select at least 1 frame
- **Maximum:** Can select up to 10 frames
- **Any Box:** Frames can be selected from any box in the hive
- **Any Position:** Frame position within box doesn't matter

### Visual Feedback
- Selected frames show checkmark ✓
- Frame preview images displayed (if available)
- Selection count updates in real-time
- Error message if selecting more than 10 frames

## New Hive Creation

### Automatic Setup
1. **New Hive Record:** Created with unique ID and provided name
2. **Family Inheritance:** New hive inherits family (queen) from source
3. **Single Box:** One DEEP box created with position 0
4. **Lineage Tracking:** Source hive ID stored as parent reference
5. **Split Date:** Current timestamp recorded

### Database Structure

```sql
-- New hive record
INSERT INTO hives (
  apiary_id,      -- Same as source hive
  name,           -- User-provided or generated
  user_id,        -- Same user
  family_id,      -- Inherited from source
  parent_hive_id, -- Source hive ID
  split_date,     -- Current timestamp
  added           -- Current timestamp
)
```

## Frame Movement

### Process
1. Selected frames are identified by ID
2. New box created in new hive
3. Frames moved to new box via `MoveFramesToBox`
4. Frame positions assigned sequentially (0, 1, 2, ...)
5. Original box positions in source remain

### Position Management
- Frames keep their internal state (sides, cells, images)
- Only `box_id` and `position` fields updated
- Source hive frames automatically reposition (handled by UI)

## Database Schema

### Hive Table Fields

**New Hive:**
```sql
parent_hive_id INT UNSIGNED NULL  -- References source hive
split_date DATETIME NULL          -- Timestamp of split operation
```

**Source Hive:**
- No changes to source hive record
- Remains active and editable

### Migration
```sql
-- Migration: 20251205120000_add_hive_split_tracking.sql
ALTER TABLE hives
  ADD COLUMN parent_hive_id INT UNSIGNED NULL,
  ADD COLUMN split_date DATETIME NULL,
  ADD INDEX idx_parent_hive_id (parent_hive_id);
```

## GraphQL API

### Mutation

```graphql
mutation SplitHive {
  splitHive(
    sourceHiveId: "123"
    name: "Luna"
    frameIds: ["456", "457", "458"]
  ) {
    id
    name
    parentHive {
      id
      name
    }
    splitDate
  }
}
```

### Query Fields

**On Parent Hive:**
```graphql
query GetParentHive {
  hive(id: "123") {
    id
    name
    
    # Shows all child hives created from this one
    childHives {
      id
      name
      splitDate
    }
  }
}
```

**On Child Hive:**
```graphql
query GetChildHive {
  hive(id: "456") {
    id
    name
    
    # Shows the source hive this was split from
    parentHive {
      id
      name
    }
    splitDate
  }
}
```

## Post-Split Display

### Source Hive (Parent)

**Status:**
- Remains active and fully editable
- All operations available (Edit, Split, Join, Inspect)

**Display:**
- Shows "Child hives: [Hive Names]" with dates
- Each child hive name is clickable link
- Displays split date for each child
- Can have multiple children listed

**Boxes:**
- All boxes remain in original positions
- Frame count reduced by number moved
- Gaps may appear in frame positions

### New Hive (Child)

**Status:**
- Fully active and editable
- Independent hive that can be split again

**Display:**
- Shows "Split from [Parent Name]" with date
- Parent name is clickable link
- Single deep box with selected frames

**Initial State:**
- One DEEP box at position 0
- Selected frames in sequential positions
- Same family (queen) as parent
- Same apiary as parent

## Implementation Details

### Backend (swarm-api)

**Model Methods:**
- `Hive.Split()` - Creates new hive with lineage tracking
- `Hive.GetParentHive()` - Retrieves parent hive reference
- `Hive.GetChildHives()` - Lists all child hives
- `Box.CreateSingleBox()` - Creates the initial box for new hive
- `Frame.MoveFramesToBox()` - Moves frames and updates positions

**Resolver:**
```go
func SplitHive(sourceHiveID, name string, frameIds []string) (*Hive, error) {
  // 1. Validate frame count (1-10)
  // 2. Get source hive
  // 3. Create new hive with parent reference
  // 4. Create deep box in new hive
  // 5. Move selected frames to new box
  // 6. Publish real-time events
  // 7. Return new hive
}
```

### Frontend (web-app)

**Components:**
- `SplitHiveModal.tsx` - Main modal interface
- `SplitHiveModal.module.less` - Styling
- `FramePreview.tsx` - Shared frame visualization component

**State Management:**
- Selected frame IDs (Set)
- New hive name (string)
- Modal open/close state
- Loading states
- Error handling

**Key Features:**
- Memoized click handlers for performance
- Optimized re-renders with React.memo
- Debounced selection changes
- Real-time frame count validation

## User Workflow

### Step-by-Step Process

1. **Open Source Hive**
   - Navigate to the hive you want to split

2. **Click "Split Hive"**
   - Button located at top of hive view
   - Only visible if hive is editable

3. **Generate Name** (Optional)
   - Auto-generated name appears in input
   - Click refresh button for new name
   - Or type custom name

4. **Select Frames**
   - Click frames to select (checkboxes)
   - Can select from any box
   - Maximum 10 frames
   - Preview images if available

5. **Confirm Split**
   - Review selection count
   - Click "Split Hive" button
   - Confirm the operation

6. **Automatic Processing**
   - New hive created
   - Box created in new hive
   - Frames moved from source
   - Positions recalculated
   - Real-time events published

7. **Redirect to New Hive**
   - Automatically navigate to new hive view
   - See selected frames in new box
   - View lineage information

## Business Rules

### Validation
- ✅ Must select 1-10 frames
- ✅ Hive name must be provided
- ✅ Source hive must exist
- ✅ User must own source hive
- ✅ Source hive must be editable (not collapsed/merged)

### Frame Availability
- Can select frames with images
- Can select empty frames
- Can select frames from different boxes
- Cannot exceed 10 frame limit

## Name Generation

### Supported Languages
- English (en)
- Russian (ru)
- Estonian (et)
- Turkish (tr)
- Polish (pl)
- German (de)
- French (fr)

### Name API
```graphql
query RandomHiveName {
  randomHiveName(language: "en")
}
```

Returns a random female name from the specified language's name list.

## Visual Feedback

### Frame Display
- Frame with image: Shows thumbnail
- Empty frame: Shows placeholder icon
- Selected frame: Highlighted border + checkmark
- Hover state: Visual feedback

### Box Headers
```
Box 3 (DEEP)
Box 2 (SUPER)
Box 1 (BOTTOM)
```

Boxes displayed in descending order (top to bottom).

## Real-Time Updates

The split operation publishes events via Redis pub/sub:

**Event Published:**
- `hive:split` - New hive created (event sent to new hive ID)

**Subscribers:**
- **event-stream-filter** - Broadcasts to connected websocket clients
- Other users viewing the apiary see new hive appear

## Error Handling

### Common Errors

**"Must select between 1 and 10 frames to split"**
- Selection count outside valid range

**"Please enter a name for the new hive"**
- Name field empty or whitespace only

**"Source hive not found"**
- Hive ID invalid or user doesn't own it

**Frame movement errors**
- Database transaction issues
- Invalid frame IDs

### Error Display
- Error messages shown in red banner
- User can correct issue and retry
- Modal remains open on error

## Testing Scenarios

### Basic Split Test
1. Create hive with multiple boxes and frames
2. Open hive view
3. Click "Split Hive"
4. Select 5 frames from different boxes
5. Generate or enter name
6. Submit
7. ✅ Verify redirect to new hive
8. ✅ Verify 5 frames in new box
9. ✅ Verify parent shows child hive
10. ✅ Verify child shows parent hive

### Edge Cases
1. **Minimum frames:** Split with 1 frame
2. **Maximum frames:** Split with 10 frames
3. **Single box:** Select all frames from one box
4. **Mixed boxes:** Select from DEEP, SUPER, GATE
5. **Empty frames:** Split with frames without images
6. **Rapid clicks:** Debouncing prevents double-selection

## Beekeeping Best Practices

### When to Split

**Good Timing:**
- Strong colony with 8+ frames of bees
- Active brood production
- Spring or early summer
- Before swarm cells appear

**Frame Selection:**
- Include 2-3 frames of brood
- Include 2-3 frames of food (honey/pollen)
- Include 1-2 frames with bees
- Avoid taking too much brood from source

### After Splitting

**New Hive:**
- May need to add queen or queen cell
- Monitor food stores
- Reduce entrance size
- Check for queen acceptance

**Source Hive:**
- Will recover population over time
- May need to consolidate boxes
- Continue normal management

## Related Features

- **[Join Colony](./Join%20Colony.md)** - Opposite operation: merge two hives together
- **Collapse Hive** - Mark inactive hive
- **Create Inspection** - Snapshot hive state before/after split

## Performance Considerations

### Optimization Techniques
- **Memoized handlers:** Click handlers cached per frame
- **Debounced updates:** Prevent rapid state changes
- **FlushSync:** Immediate UI updates for selections
- **Set data structure:** O(1) selection lookups
- **Lazy loading:** Frame images loaded on demand

### Known Limitations
- Maximum 10 frames per split (business rule)
- Same apiary only (new hive created in parent's apiary)
- Requires at least one frame in source

## Future Enhancements

Potential improvements for future releases:

- [ ] Bulk frame selection (select all, select none)
- [ ] Preview new hive layout before split
- [ ] Frame reordering in new hive
- [ ] Equipment checklist (add queen cell, feeder, etc.)
- [ ] Split templates/presets
- [ ] Split multiple hives at once
- [ ] Email notification after split
- [ ] Queen marking suggestion

## Resources

- **Implementation Guide:** See codebase documentation
- **API Reference:** See swarm-api GraphQL schema
- **UI Components:** `web-app/src/page/hiveEdit/SplitHiveModal.tsx`
- **Database Schema:** `swarm-api/migrations/20251205120000_add_hive_split_tracking.sql`

