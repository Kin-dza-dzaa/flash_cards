## Overview

This project was built for learning purposes. The application manages collections of words for each user. Each collection can consist of dozens of words with a detailed dictionary, like translations into Russian language. The application also tracks progress of each word in a collection by using a spaced repetition technique: [wiki.com](https://en.wikipedia.org/wiki/Spaced_repetition).

If you are more interested in backend, you should see this repository: [github.com/Kin-dza-dzaa/flash\_cards\_api](https://github.com/Kin-dza-dzaa/flash_cards_api)

## Usage

The app runs in three containers:

1.  Alpine Go API backend.
2.  Postgres:alpine database.
3.  Nginx for SPA (react/ts).

```plaintext
docker compose build
docker compose up -d
```

## Demo of the app

### Creating a collection

![](https://github.com/Kin-dza-dzaa/flash_cards/blob/main/ts_spa_react/public/create_collection.gif)

### Learning a collection

![](https://github.com/Kin-dza-dzaa/flash_cards/blob/main/ts_spa_react/public/learn_words.gif)