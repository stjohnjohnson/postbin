# Postbin

[![wercker status](https://app.wercker.com/status/6aa77d83c0b36ad54d9b5d5f4ee42435/s "wercker status")](https://app.wercker.com/project/bykey/6aa77d83c0b36ad54d9b5d5f4ee42435)
[![npm downloads](https://img.shields.io/npm/dt/postbin.svg?maxAge=2592000)](https://www.npmjs.com/package/postbin)
[![npm version](https://img.shields.io/npm/v/postbin.svg?maxAge=2592000)](https://www.npmjs.com/package/postbin)

Quick script for listening to HTTP traffic

## Usage

```
$ postbin.js 8080
en0 http://127.0.0.1:8080


> GET /
> Headers:
{ host: '127.0.0.1:8080',
  connection: 'keep-alive',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'upgrade-insecure-requests': '1',
  'accept-encoding': 'gzip, deflate, sdch',
  'accept-language': 'en-US,en;q=0.8,es;q=0.6' }
>>> EOL


> GET /favicon.ico
> Headers:
{ host: '127.0.0.1:8080',
  connection: 'keep-alive',
  accept: '*/*',
  referer: 'http://127.0.0.1:8080/',
  'accept-encoding': 'gzip, deflate, sdch',
  'accept-language': 'en-US,en;q=0.8,es;q=0.6' }
>>> EOL
```
