## Installation

- Prepare SD card
    - Download SD card image - [https://developer.nvidia.com/jetson-nano-sd-card-image](https://developer.nvidia.com/jetson-nano-sd-card-image)
    - Connect SD card to Mac, Use [https://www.balena.io/etcher](https://www.balena.io/etcher) to burn image onto SD card
- Insert SD card
- Run device
    - Connect wifi antennas
    - Connect camera cables
    - Connect Power, Reset and LED cables in correct pins if you use a case
    - Set pin near the output barrel - this tells device to use 5V power supply
    - Use HDMI output - Display port does not work by default on boot
- After OS installation is complete, you won’t have wifi right away - you need a restart

## Global update

```jsx
sudo apt-get -y update
sudo apt-get upgrade

# Uninstall LibreOffice to save space
sudo apt remove --purge libreoffice* -y
sudo apt-get clean -y
sudo apt autoremove -y
sudo apt-get update

# Install curl
sudo apt install curl

# Docker upgrade, use own username
sudo usermod -aG docker gratheon
sudo apt-get --only-upgrade install docker.io

# Add docker-compose
export DOCKER_COMPOSE_VERSION=1.27.4
sudo apt-get install libhdf5-dev
sudo apt-get install libssl-dev
sudo pip3 install docker-compose=="${DOCKER_COMPOSE_VERSION}"

# to not display terminal errors when playing annoying sounds
sudo apt install libcanberra-gtk-module libcanberra-gtk3-module -y

# video cam utils
sudo apt-get install v4l-utils
```

[How to install ML software with GPU acceleration](https://www.notion.so/How-to-install-ML-software-with-GPU-acceleration-09b95e4ad1554b6cbf9cbfd2820332c2?pvs=21)

[How to remotely develop on Jetson Nano](https://www.notion.so/How-to-remotely-develop-on-Jetson-Nano-f36ca684a76d46168bb0af3cbcbdb142?pvs=21)

[https://youtu.be/GQ3drRllX3I](https://youtu.be/GQ3drRllX3I)