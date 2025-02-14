To ease management of the device, beekeeper should be able to inspect device remotely over local network. This assumes that beekeeper has set up the device and its operational based on instructions: [How to setup Remote Desktop connection (to Jetson Orin / Nano)](https://www.notion.so/How-to-setup-Remote-Desktop-connection-to-Jetson-Orin-Nano-57a4f235c69e4f06ba2c0c34302261cd?pvs=21)

## User story

- After user has setup the device locally via [Device management](https://www.notion.so/Device-management-9d88e70c45954edc9333323003fd9c5c?pvs=21)

- This likely needs to establish connection with our servers
- Device becomes 🟢 Live
- He opens the web-app, chooses `Settings` → `Devices`

- He opens specific device that is live

- He clicks `connect` button

- In the browser he can see a remote operating system (Ubuntu) that he can manage

- He can see [Client-side app with UI](https://www.notion.so/Client-side-app-with-UI-5d890b685ce745748224e0afac603db6?pvs=21), camera view, control a robot etc.

![](../../../img/Screenshot%202024-06-20%20at%2019.13.32.png)

## Suggested solution
- headscale - https://github.com/juanfont/headscale
- Device should establish a `reverse SSH tunnel` connection (device → [devices.gratheon.com](http://devices.gratheon.com)) so that we can access devices behind NAT without opening ports
	
	- Alternatively - VPN, ZeroTier, NgRok,
		
		- Paid Services:
			- Tailscale, [https://headscale.net/](https://headscale.net/)
			- SecureDM
	- [serveo.net](http://serveo.net) - like approach
	
- Device should use API tokens for accessing our API
	
- Once device is connected, update status in DB
	
- List devices for web-app
	
- On `connect`, open iframe with [novnc](https://github.com/novnc/noVNC) client app that will use the reverse tunnel connection to a target device
	

## Related materials

- [Open Remote Web Lab for Learning Robotics and ROS With Physical and Simulated Robots in an Authentic Developer Environment](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10480223)