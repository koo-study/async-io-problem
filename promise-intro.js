"use strict";

const https = require("node:https");
const fs = require("node:fs");
const { resolve } = require("node:path");

const promise = new Promise((resolve, reject) => {
    let data = '';
  https.get(
    "https://www.nicovideo.jp/ranking/genre/all?term=hour&rss=2.0&lang=ja-jp",
    (response) => {
      response
        .on("data", (chunk) => {
          data += chunk;
        })
        .on("end", () => {
          resolve(data);
        });
    })
});

promise.then((data) => {
    const promiseAfterFileSaved = new Promise((resolve, reject) => {
        fs.writeFile('test.txt', data, 'utf8', () => {
            resolve('success!');
        });
    });
    promiseAfterFileSaved.then((message) => {
        console.log(message);
    });
});