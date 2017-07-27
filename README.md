# Controversies of Science API

## Endpoints

### Create a New Controversy

```bash
curl -X POST https://q9paj2zuf1.execute-api.us-west-1.amazonaws.com/prod/controversies --data '{ "slug": "test-controversy", "name": "This is a Test", "summary": "Stuff / Things / About Controversies", "category": "ongoing", "text": [ "one", "two", "three" ] }'
```
