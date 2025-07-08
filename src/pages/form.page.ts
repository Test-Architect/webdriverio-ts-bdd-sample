import ConfigManager from "../config/manager.conf.ts";
import BasePage from "./base.page.ts";


class HomeFormCollectionPage extends BasePage {
    constructor() {
        super("div[id='content']");
    }

    private get loginFormLink() {
        return $("a[href='/login']");
    }

    async navigate() {
        await browser.url(ConfigManager.get("BASE_URL"));
    }

    async goToLoginForm() {
        await this.loginFormLink.click();
    }
}

export default new HomeFormCollectionPage();