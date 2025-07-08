import { config as baseConfig } from './wdio.shared.conf.js';

export const config: WebdriverIO.Config = {
    ...baseConfig,
    capabilities: [
        {
            browserName: "chrome",
            'goog:chromeOptions': {
                args: [
                    '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML. like Gecko) Chrome/94.0.4606.61 Safari/537.36',
                    '--disable-blink-features=AutomationControlled',
                    '--headless',
                    '--no-sandbox',
                    '--disable-gpu',
                    '--start-maximized',
                ]
            }
        }
    ]
};