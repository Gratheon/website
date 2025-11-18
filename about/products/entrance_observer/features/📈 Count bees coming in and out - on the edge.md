# 📈 Count bees coming in and out - on the edge

**Status**: `feature` | **Development Stage**: `alpha` | **Priority**: `high`

### 🎯 Purpose
Real-time bee traffic monitoring system that counts individual bees entering and exiting the hive using computer vision on edge devices.

### 🎭 User Story
- As a beekeeper
- I want to automatically track bee activity at my hive entrance 
- So that I can monitor colony health, detect issues early, and understand foraging patterns without manual observation

### 🚀 Key Benefits
- **Automated monitoring**: No manual counting required, 24/7 tracking
- **Early problem detection**: Unusual traffic patterns can indicate swarming, robbing, or health issues
- **Data-driven insights**: Track bee loss rates, foraging efficiency, and seasonal patterns
- **Edge processing**: Real-time analysis without internet dependency

### 🔧 Technical Overview
Uses computer vision models (YOLO v8 or custom CNN) running on edge devices with GPU acceleration to detect and track individual bees crossing entrance boundaries. The system maintains bee trajectories to distinguish incoming vs outgoing movement.

### 📋 Acceptance Criteria
- Device detects and tracks individual bees with >85% accuracy
- Correctly classifies bee direction (in/out) with >90% accuracy  
- Processes video in real-time (30 FPS minimum)
- Sends telemetry data to web-app every 10 seconds
- Calculates daily bee loss metrics (bees that didn't return)
- Functions reliably in varying lighting conditions

### 🚫 Out of Scope
- Robbing behavior detection (separate feature)
- Bee species classification (wasps, hornets handled separately)
- Pollen detection on individual bees
- Queen bee identification from entrance video

### 🏗️ Implementation Approach
- **Primary**: YOLO v8 object detection and tracking pipeline
- **Alternative**: Custom CNN model from models-gate-tracker repository
- **Hardware**: Edge device with GPU (Jetson Orin Nano recommended)
- **Integration**: Telemetry API for data transmission to web application

### 📊 Success Metrics
- Accuracy rate >85% for bee detection
- Direction classification accuracy >90%
- System uptime >95% in field conditions
- User adoption rate among alpha testers
- Reduction in manual monitoring time by beekeepers

### 🔗 Related Features
- [📊 Bee movement metric reporting](📊%20Bee%20movement%20metric%20reporting.md)
- [🛣️ Landing board heatmap generation](🛣️%20Landing%20board%20heatmap%20generation.md)
- [📈 Telemetry API](../../scales/features/📈%20Telemetry%20API.md)

### 📚 Resources & References
- [YOLO v8 Object Counting Guide](https://docs.ultralytics.com/guides/object-counting/)
- [Gratheon Gate Tracker Model](https://github.com/Gratheon/models-gate-tracker)
- [LabelBee Research Platform](https://www.notion.so/LabelBee-a-web-platform-for-large-scale-semi-automated-analysis-of-honeybee-behavior-from-video-d4e940ed7aee48a6821507ceaa43e603?pvs=21)
- [Apic.ai Commercial Solution](https://www.notion.so/Apic-ai-7859a940fd644a3fa35008fd3a2f1909?pvs=21)

### 💬 Notes
This is one of the core features of the Entrance Observer product. Accuracy requirements may need adjustment based on real-world testing conditions.

---
**Last Updated**: November 18, 2025
**Next Review**: December 2025
