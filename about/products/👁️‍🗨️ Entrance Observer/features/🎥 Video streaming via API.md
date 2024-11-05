We want to integrate hardware that cannot run GPU inferencing efficiently, but has sufficient network bandwidth to capture and upload/stream video to the cloud

Video streaming API should allow this for beekeepers

## User story

- User has raspberry-pi, a custom PC, or a [Jetson Nano](https://www.notion.so/Jetson-Nano-6500eadfbab64e7b8bd0d0896df30701?pvs=21)
- User connects a USB camera to it
- User creates API tokens under account settings
- User creates a beehive and a base (entrance)
    - User copies their IDs from URL
- User changes and runs a script which references API token, hive ID and box ID

[https://github.com/Gratheon/beehive-entrance-video-processor/blob/main/python-client/usb_video_camera_server.py](https://github.com/Gratheon/beehive-entrance-video-processor/blob/main/python-client/usb_video_camera_server.py)

- User can see videos being uploaded
- User can see past videos from [Video streaming playback](https://www.notion.so/Video-streaming-playback-7214e1994f564d4b8888a5acae7318f0?pvs=21)