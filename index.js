import puppeteer from "puppeteer-core";

async function run() {
let browser;
try {
    browser = await puppeteer.connect(
        {browserWSEndpoint: `wss://`}
    );

} catch (e) {
    console.error('scrape failed', e)
} finally {
    await browser?.close();
}

    
}

run()