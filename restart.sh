cd /www/website/

docker-compose down
COMPOSE_PROJECT_NAME=gratheon docker-compose -f docker-compose.yml up --build -d
