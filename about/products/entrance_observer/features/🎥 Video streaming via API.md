# 🎥 Video streaming via API

**Status**: `feature` | **Development Stage**: `beta` | **Priority**: `high`

### 🎯 Purpose
Enables hardware devices to capture and stream video from beehive entrances to the cloud for remote monitoring and AI analysis.

### 🎭 User Story
- As a beekeeper with custom hardware or limited compute resources
- I want to stream video from my beehive entrance to the cloud
- So that I can leverage cloud-based AI analysis and remote monitoring without requiring powerful on-device processing

### 🚀 Key Benefits
- **Hardware flexibility**: Works with Raspberry Pi, custom PCs, or Jetson Nano devices
- **Cloud processing**: Offloads AI analysis to cloud infrastructure for devices without GPU
- **Remote access**: View live and historical video streams from anywhere
- **Easy integration**: Simple API token authentication and setup

### 🔧 Technical Overview
Captures video from USB cameras connected to edge devices and streams to cloud infrastructure via secure API endpoints. Supports both live streaming and batch video uploads with automatic retry mechanisms.

### 📋 Acceptance Criteria
- Supports standard USB cameras (UVC compatible)
- Streams video with configurable quality settings (480p to 1080p)
- Handles network interruptions with automatic reconnection
- Provides secure authentication via API tokens
- Integrates with existing beehive and device management system
- Maintains video history for playback

### 🚫 Out of Scope
- On-device AI processing (handled by separate edge computing features)
- Audio streaming (video only)
- Real-time two-way communication
- Storage management beyond standard retention policies

### 🏗️ Implementation Approach
- **Client**: Python script using OpenCV for video capture
- **Authentication**: API token-based security system
- **Protocol**: HTTPS streaming with chunked transfer encoding
- **Integration**: Links to existing hive ID and box ID system
- **Storage**: Cloud video storage with configurable retention

### 📊 Success Metrics
- Stream uptime >95% under normal network conditions
- Video quality maintained at target resolution and framerate
- Successful deployment on 3+ different hardware platforms
- User setup completion rate >80%
- Average setup time <30 minutes

### 🔗 Related Features
- [🎮 Client-side app with UI](🎮%20Client-side%20app%20with%20UI.md)
- [📈 Count bees coming in and out - on the edge](📈%20Count%20bees%20coming%20in%20and%20out%20-%20on%20the%20edge.md)
- [📈 Telemetry API](../../scales/features/📈%20Telemetry%20API.md)

### 📚 Resources & References
- [USB Video Camera Server Script](https://github.com/Gratheon/beehive-entrance-video-processor/blob/main/python-client/usb_video_camera_server.py)
- [Video streaming playback documentation](https://www.notion.so/Video-streaming-playback-7214e1994f564d4b8888a5acae7318f0?pvs=21)

### 💬 Notes
This feature enables broader hardware compatibility for users who don't have high-end edge computing devices but still want to participate in the monitoring ecosystem.

---
**Last Updated**: November 18, 2025
**Next Review**: December 2025
