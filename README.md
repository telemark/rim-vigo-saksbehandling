[![Build Status](https://travis-ci.org/telemark/rim-vigo-saksbehandling.svg?branch=master)](https://travis-ci.org/telemark/rim-vigo-saksbehandling)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/rim-vigo-saksbehandling.svg)](https://greenkeeper.io/)

# rim-vigo-saksbehandling

Prepares documents for archive.

## Config

docker.env

```bash
ARCHIVE_DIRECTORY_PATH=test/data/archive
CALLBACK_API_URL=https://httpbin.org/anything
CALLBACK_DIRECTORY_PATH=test/directories/callback
DONE_DIRECTORY_PATH=test/data/done
ERRORS_DIRECTORY_PATH=test/data/errors
QUEUE_DIRECTORY_PATH=test/data/queue
```

## Docker

Build

```bash
$ docker build -t rim-vigo-saksbehandling .
```

### Usage

```bash
$ docker run --env-file=docker.env --volume=/test/data:/src/test/data --rm rim-vigo-saksbehandling
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
- [rim-service-client](https://github.com/telemark/rim-service-client) Module for connecting ISI-lokal
- [robot-stats](https://github.com/telemark/robot-stats) Collect stats for your dashboard
- [next-dashboard-rambo](https://github.com/telemark/next-dashboard-rambo) Dashboard for RAMBO

## License

[MIT](LICENSE)

![Robohash image of rim-vigo-saksbehandling](https://robots.kebabstudios.party/rim-vigo-saksbehandling.png "Robohash image of rim-vigo-saksbehandling")