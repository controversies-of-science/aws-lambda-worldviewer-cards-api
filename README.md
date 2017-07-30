# Controversies of Science API

The Controversies of Science site will need at least four managed resources:

- Controversy Cards
- Controversy Card Feeds
- Rankings
- Site Users

The controversy cards are adapted from the G+ collection [here](https://plus.google.com/collection/Yhn4Y).  Both the cards and the attached feeds are essentially social media postings, but the difference is that the feeds are subtopics for the larger card topics.

## State of the Project

The API has all of the functionality that I'm going to need, but I'm still adding in validations and security.

## Endpoints

### Create a New Controversy

> curl -X POST https://q9paj2zuf1.execute-api.us-west-1.amazonaws.com/prod/controversies --data '{ "slug": "test-controversy", "name": "This is a Test", "summary": "Stuff / Things / About Controversies", "category": "ongoing", "text": [ "one", "two", "three" ] }'

### Get a Controversy by Slug

> curl https://q9paj2zuf1.execute-api.us-west-1.amazonaws.com/prod/controversies/test-controversy

### Get All Controversy Card Slugs

> curl https://q9paj2zuf1.execute-api.us-west-1.amazonaws.com/prod/controversies

### Delete a Controversy

> curl -X DELETE https://q9paj2zuf1.execute-api.us-west-1.amazonaws.com/prod/controversies/test-controversy

### Update a Controversy

> curl -X PUT https://q9paj2zuf1.execute-api.us-west-1.amazonaws.com/prod/controversies/test-controversy-2 --data '{ "slug": "test-controversy-2", "name": "This is a Test", "summary": "New Summary", "category": "ongoing", "text": [ "one", "two", "three" ] }'
