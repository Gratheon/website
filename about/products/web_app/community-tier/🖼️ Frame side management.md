---
status: complete
---

## Upload & detection

- User opens the frame side view
    
- User uploads a frame photo with bees - see [Datasets](https://www.notion.so/Datasets-d3ca2719238d4c6b80226c58ea38fb50?pvs=21) for source of such images, see [Frame side photo upload](https://www.notion.so/Frame-side-photo-upload-c9d3df6f053e41bbb7b8414b7c2bb397?pvs=21)
    
    - A loader is shown when image is uploaded
    - Object detection starts to find what is on the frame photo
        - [Worker bee detection](https://www.notion.so/Worker-bee-detection-3927d59c9f0e465db0ec11b7832ebd18?pvs=21)
        - [Honeycomb cell detection & management](https://www.notion.so/Honeycomb-cell-detection-management-e9ff03128cdb489293737b8a4c1e7098?pvs=21)
        - [Frame side queen cup detection](https://www.notion.so/Frame-side-queen-cup-detection-fcbfae08a5b24ff385e0348214e66414?pvs=21)
        - [Queen detection](https://www.notion.so/Queen-detection-6efc6b5e9eac4d79a622abb89abdfde9?pvs=21)
        - [varroa mite detection](https://www.notion.so/varroa-mite-detection-6cff0cdb639d44a19038491cdb4655b6?pvs=21)
        - [Hive beetle detection](https://www.notion.so/Hive-beetle-detection-1ab04994064d4c40b53862a724161dfd?pvs=21)
        - [Drone brood detection](https://www.notion.so/Drone-brood-detection-4f454aec03b44eddb80d29827fde7e6d?pvs=21)
        - [Ant detection](https://www.notion.so/Ant-detection-79d34a890ccf42218a4b03ce2ec212dd?pvs=21)

	![](../../../img/Screenshot%202024-07-11%20at%2000.18.52.png)
## Zoom & toggling

- An optimized low-resolution image is shown initially when view is loaded
- User uses mouse wheel to zoom into the photo - a better quality image is loaded and view is updated
    - User cannot pan (yet)
    - User is limited to how much he can zoom in (~20x) or zoom out (100%)
- User can open side panel to see list of detectable objects
    - As objects get detected, counts get updated too
- User can toggle if objects are visible or not by clicking on a button/checkbox
- As objects are getting detected, they are shown on the photo as rectangles or circles with different colors, depending on type

User can change frame side cell distribution - see [Honeycomb cell detection & management](https://www.notion.so/Honeycomb-cell-detection-management-e9ff03128cdb489293737b8a4c1e7098?pvs=21)

### Drawing on canvas

- User opens uploaded frame side photo from [Frame side management](https://www.notion.so/Frame-side-management-ccfbfe36e0864770b5f77644cb44cbda?pvs=21)
- User can use mouse or iPad pencil to draw on top of the photo
- User can click undo to clear last drawn line
- User can clear entire drawing by clicking on relevant button

<iframe width="1082" height="480" src="https://www.youtube.com/embed/TRV6SWhUmqM" title="Features - Zoom, pan &amp; draw on canvas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Deletion

- User can do [Inspection management](https://www.notion.so/Inspection-management-91984eebbfde4a52a5d9a3836a6a998e?pvs=21) which clears frame side data
- User can do [Hive section management](https://www.notion.so/Hive-section-management-bb1c977aeb0b4972a116754f6c07955a?pvs=21) and delete a frame, which removes a frame side

## Future work

- [Frame side file deletion](https://www.notion.so/Frame-side-file-deletion-8b6b157361834f77b28be207cd74d97e?pvs=21)
- [Frame side photo image cropping](https://www.notion.so/Frame-side-photo-image-cropping-afd296e03d564e0d8dd17d4c89ab53ac?pvs=21)