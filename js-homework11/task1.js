function delayedLog(text, ms) {
    setTimeout(() => {
        console.log(text);
    }, ms);
}

delayedLog("Привіт, це повідомлення з затримкою!", 2000);