version: '3'
services:
  app:
    build: .
    tty: true
    volumes:
      - .:/async-io-problem
