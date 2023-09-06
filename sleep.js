'use strict';

function sleep(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, sec*1000);
    });
}

//動作確認
async function main() {
    console.log("3秒後にお前は『おにぎりおいしい』という!");
    await sleep(3)
    console.log("おにぎりおいしい");
    await sleep(1);
    console.log("…ハッ！");
}

main();