# 👑 Queen management

**Status**: `feature` | **Development Stage**: `beta` | **Priority**: `high`

### 🎯 Purpose
Provides comprehensive queen bee tracking and management including lifecycle stages, breeding information, and presence monitoring for colony health assessment.

### 🎭 User Story
- As a beekeeper managing multiple colonies
- I want to track queen status, breeding information, and lifecycle stages
- So that I can monitor colony reproductive health and plan breeding or replacement activities

### 🚀 Key Benefits
- **Lifecycle tracking**: Monitor queen development from cup to laying queen
- **Breeding records**: Track queen race, year, and genetic information
- **Colony health insights**: Understand brood patterns based on queen status
- **Timeline management**: Historical tracking of queen presence and activities

### 🔧 Technical Overview
Queen management system tracking presence, breeding details, and lifecycle stages. Integrates with frame analysis for automated queen detection and provides manual override capabilities for beekeepers to maintain accurate records.

### 📋 Acceptance Criteria
- Toggle queen presence on specific frame sides within hives
- Record queen race, year, and breeding information
- Track queen lifecycle stages: queen cup → virgin → mating → laying → old & infertile
- Timeline calendar showing when queen was last seen and status changes
- Integration with automated queen detection from frame analysis
- Status indicators to help diagnose missing brood causes (no queen vs unmated queen)
- Historical records of queen replacement and breeding activities

### 🚫 Out of Scope
- Automated queen health assessment
- Breeding program optimization recommendations
- Genetic analysis integration
- Commercial breeding record management

### 🏗️ Implementation Approach
- **Database**: Queen records with lifecycle stages and breeding metadata
- **Frontend**: Queen management interface with timeline visualization
- **Integration**: Links with frame analysis and automated queen detection
- **Timeline**: Calendar-based tracking of queen status changes
- **Validation**: Logic to correlate queen status with brood patterns

### 📊 Success Metrics
- Queen presence tracking accuracy >90%
- Timeline data completeness for active queens
- User engagement with lifecycle tracking features
- Correlation accuracy between queen status and brood health
- Integration success rate with automated detection systems

### 🔗 Related Features
- [👑 Queen detection](👑%20Queen%20detection.md)
- [📦 Hive management](📦%20Hive%20management.md)
- [🖼️ Frame side management](🖼️%20Frame%20side%20management.md)
- [🐝 Frame analysis - bee counter](🐝%20Frame%20analysis%20-%20bee%20counter.md)

### 📚 Resources & References
- [Queen detection documentation](https://www.notion.so/Queen-detection-6efc6b5e9eac4d79a622abb89abdfde9?pvs=21)
- Queen lifecycle management guidelines
- Breeding record best practices

### 💬 Notes
Advanced feature building on automated queen detection. Timeline helps beekeepers understand if missing brood is due to queenless condition or unmated queen status.

**Key Lifecycle Stages:**
- Queen cup → Virgin → Mating → Laying → Old & infertile
- Timeline correlation with brood patterns for colony health assessment

---
**Last Updated**: November 18, 2025
**Next Review**: December 2025
