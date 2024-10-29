App is fully hosted on DigitalOcean, Ubuntu 20.04

- 4 vCPUs
- 8GB RAM
- 80 GB Disk
- No GPU support

Storage is hosted on AWS

## Docker space usage issue

```sql
docker container ls --all --size
dockersystem df--verbose

sudo docker system prune -a
```

[Service Reliability](https://www.notion.so/Service-Reliability-2fc8b5da879a4968948dd1160ab2626e?pvs=21)

[DevOps - MySQL](https://www.notion.so/DevOps-MySQL-1b626022a4474a7db69d262721440bf4?pvs=21)

[How to update SSL certificates](https://www.notion.so/How-to-update-SSL-certificates-cf9adf1a6b014cfa89c98365c140de39?pvs=21)

[Deploy over-the air](https://www.notion.so/Deploy-over-the-air-0712bfc8ce1c4fbda670191394fc5f14?pvs=21)

## Adding ssh key to access a node

```bash
cat ~/.ssh/id_rsa.pub
echo public_key_string >> ~/.ssh/authorized_keys
```