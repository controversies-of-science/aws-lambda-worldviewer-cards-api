# Controversies of Science API

## Endpoints

### Create a New Controversy

> curl -X POST https://q9paj2zuf1.execute-api.us-west-1.amazonaws.com/prod/controversies --data '{ "slug": "test-controversy", "name": "This is a Test", "summary": "Stuff / Things / About Controversies", "category": "ongoing", "text": [ "one", "two", "three" ] }'

### Get a Controversy by Slug

> curl -X https://q9paj2zuf1.execute-api.us-west-1.amazonaws.com/prod/controversies/test-controversy


