[![Build Status](https://travis-ci.org/telemark/rim-vigo-saksbehandling.svg?branch=master)](https://travis-ci.org/telemark/rim-vigo-saksbehandling)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# rim-vigo-saksbehandling
Prepares documents for archive.

## Config

docker.env

```bash
ARCHIVE_DIRECTORY_PATH=test/data/archive
DONE_DIRECTORY_PATH=test/data/done
ERRORS_DIRECTORY_PATH=test/data/errors
QUEUE_DIRECTORY_PATH=test/data/queue
FIREBASE_API_KEY=firebase-api-key
FIREBASE_URL=firebase-url
FIREBASE_EMAIL=firebase-email
FIREBASE_PASSWORD=firebase-password
```

## Docker

Build

```bash
$ docker build -t rim-vigo-saksbehandling .
```

### Usage

```bash
$ docker run --env-file=docker.env --volume=/test/data:/src/test/data --rm rrim-vigo-saksbehandling
```

or from pre-built image

```bash
$ docker run --env-file=docker.env --volume=/test/data:/src/test/data --rm telemark/rim-vigo-saksbehandling
```

- This will start a container. 
- Check for documents in the queue directory. 
- Format the document. 
- Save formatted document to the archive directory. 
- Stop the container and remove it.

## Related
- [rim-vigo-data-pull](https://github.com/telemark/rim-vigo-data-pull) Pulls data from VIGO
- [rim-laurentius](https://github.com/telemark/rim-laurentius) Archives the formatted data to Public360
- [rim-vigo-update-status](https://github.com/telemark/rim-vigo-update-status) Updates archive status for document

## License
[MIT](LICENSE)

![alt text](https://robots.kebabstudios.party/rim-vigo-saksbehandling.png "Robohash image of rim-vigo-saksbehandling")