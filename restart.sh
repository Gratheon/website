#!/bin/bash
cd /www/website/

COMPOSE_PROJECT_NAME=gratheon docker-compose -f docker-compose.yml down
COMPOSE_PROJECT_NAME=gratheon docker-compose -f docker-compose.yml up --build -d
