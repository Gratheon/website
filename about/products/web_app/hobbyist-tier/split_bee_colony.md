---
status: complete
title: 🐝 Split a bee colony
---

# 🐝 Split a bee colony

**Status**: `feature` | **Development Stage**: `stable` | **Priority**: `medium`

### 🎯 Purpose
Enables beekeepers to perform hive splits by moving selected frames from an existing colony to a newly created hive, supporting swarm prevention and colony expansion strategies.

### 🎭 User Story
- As a beekeeper managing growing colonies
- I want to split a strong hive by moving specific frames to a new hive
- So that I can prevent swarming, increase colony count, or create nucleus colonies while maintaining detailed records of the split

<iframe width="100%" height="450" src="https://www.youtube.com/embed/XtvLz0ESEoo" title="Splitting bee colony" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 🚀 Key Benefits
- **Swarm prevention**: Split strong colonies before they swarm naturally
- **Colony expansion**: Increase hive count from existing strong colonies
- **Frame selection**: Visual interface with image previews for precise frame selection
- **Lineage tracking**: Maintains parent-child relationships between hives
- **Data preservation**: All frame data (images, statistics) moves with the frames
- **Efficient workflow**: Auto-generated hive names and optimized UI for fast operation

### 🔧 Technical Overview
Split Colony feature provides a visual frame selection interface with thumbnail previews, allowing beekeepers to select 1-10 frames from any box within a hive. The system creates a new hive, migrates selected frames atomically, and maintains complete lineage tracking with parent-child relationships.

### 📋 Acceptance Criteria

#### Frame Selection
- Display all frames from all boxes grouped by box with clear headers
- Show left and right side thumbnail images for each frame
- Support selection of 1-10 frames minimum/maximum
- Visual feedback for selected frames (yellow highlight)
- Disable selection when 10 frames limit reached
- Frames ordered by position within each box (left to right)

#### Hive Creation
- Auto-generate new hive name using `randomHiveName` query
- Support multiple languages (en, ru, et, tr, pl, de, fr)
- Provide refresh button to regenerate name
- Create new hive in same apiary as source hive
- Create single deep box in new hive for selected frames

#### Data Migration
- Move selected frames to new hive's box atomically
- Preserve frame sides (left_id, right_id references)
- Maintain frame images in image-splitter service
- Keep all frame statistics (queen detection, bee counts, cell analysis)
- Reorder frame positions sequentially in target box (0, 1, 2, ...)
- Optionally inherit family reference from parent hive

#### Lineage Tracking
- Record parent hive ID in new hive (`parent_hive_id`)
- Record split date/time (`split_date`)
- Display "Split from [Parent Name] on [Date]" in child hive view
- Display "Child hives: [Child 1], [Child 2]..." in parent hive view
- Clickable links to navigate between parent and child hives

#### Performance
- Checkbox selection responds instantly (under 100ms)
- No full re-render of all frames on selection (only clicked frame updates)
- Smooth visual transitions with GPU-accelerated CSS
- Throttled clicks to prevent accidental double-selection
- Lazy-loaded frame images (only load visible frames)

### 🚫 Out of Scope
- Automatic frame recommendation based on brood pattern
- Split to different apiary (currently same apiary only)
- Undo split operation
- Bulk split multiple hives simultaneously
- Queen tracking across splits (manual tracking required)

### 🏗️ Implementation Approach

#### Database Schema (swarm-api)
```sql
-- New columns in hives table
ALTER TABLE hives
  ADD COLUMN parent_hive_id INT UNSIGNED NULL,
  ADD COLUMN split_date DATETIME NULL,
  ADD INDEX idx_parent_hive_id (parent_hive_id);
```

#### GraphQL API
```graphql
mutation splitHive($sourceHiveId: ID!, $name: String!, $frameIds: [ID!]!) {
  splitHive(sourceHiveId: $sourceHiveId, name: $name, frameIds: $frameIds) {
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

#### Frontend Components
- **SplitHiveModal**: Main modal dialog with frame selection UI
  - Auto-generated name input with refresh button
  - Frame grid organized by boxes
  - Selection counter (X/10 frames)
  - Cancel and Split actions
  
- **FramePreview**: Reusable frame preview component
  - Shows both left and right side thumbnails
  - Checkbox for selection
  - Frame position number
  - Selected state highlighting
  - Optimized with React.memo to prevent unnecessary re-renders

#### Services Involved
- **swarm-api**: Hive CRUD, frame migration, parent-child tracking
- **image-splitter**: Frame images remain linked (no changes needed)
- **web-app**: UI components with optimized rendering


### 🎓 User Guide

#### How to Split a Hive

1. **Navigate to Hive View**
   - Go to your apiary and select the hive you want to split

2. **Click "Split Hive" Button**
   - Located in the hive action buttons area
   - Opens the split hive modal dialog

3. **Enter New Hive Name**
   - Name is auto-generated based on your language
   - Click refresh icon to generate a different name
   - Or manually edit the name as desired

4. **Select Frames to Move**
   - Frames are grouped by box (e.g., Box 1, Box 2, etc.)
   - Each frame shows left and right side thumbnail images
   - Click on frames to select/deselect (between 1 and 10 frames)
   - Selected frames highlight in yellow
   - Counter shows selected count out of 10

5. **Complete the Split**
   - Click "Split Hive" button
   - System creates new hive with selected frames
   - Navigate to new hive automatically
   - View split lineage in hive info section

#### Best Practices
- Select frames with capped brood for best success
- Include at least one frame with eggs/young larvae
- Consider including frames with stored honey/pollen
- Split strong colonies (8+ frames) to ensure both colonies thrive
- Perform splits during active season (spring/early summer)

### 🐛 Known Limitations
- Cannot split to different apiary (same apiary only)
- Manual queen tracking required after split
- Cannot undo split operation (must merge manually if needed)

### 🔗 Related Features
- [📦 Hive Management](./📦%20Hive%20management.md) - Core hive CRUD operations
- [🖼️ Frame Side Management](./🖼️%20Frame%20side%20management.md) - Frame data structure
- [👑 Queen Management](./👑%20Queen%20management.md) - Queen tracking across colonies
- [🔎 Inspection Management](../starter-tier/🔎%20Inspection%20management.md) - Historical snapshots

