# tn-events

The best way to organize events

## Build-status

Master: ![Master build status](https://travis-ci.com/Roostermagic/tn-events.svg?branch=master)

Development: ![Dev build status](https://travis-ci.com/Roostermagic/tn-events.svg?branch=dev)

## How to

-   Use Node 8.11.3 (use NVM to manage)
-   Use Yarn >= 1.3.2, also set config `yarn config set save-prefix ""`
-   Use Docker & Docker-compose
-   Copy .env-sample to .env and fill in
-   Install dependencies with `yarn install`
-   Start the backend and database by running `docker-compose up`
-   Start the frontend dev-server by going to the frontend folder and running `yarn start`

## Guidelines

-   Use ESLint, Prettier to maintain style
-   Linter, Prettier ran precommit
-   Use EditorConfig
