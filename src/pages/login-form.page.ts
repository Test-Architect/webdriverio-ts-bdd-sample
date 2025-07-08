import BasePage from "./base.page.ts";


class LoginFormPage extends BasePage {
    constructor() {
        super("div[id='content']");
    }

    private get usernameInput() {
        return $("input[name='username']");
    }

    private get passwordInput() {
        return $("input[name='password']");
    }

    private get loginButton() {
        return $("button[type='submit']");
    }

    private get noticeBanner() {
        return $("//div[@id='flash']");
    }

    async authenticate(username: string, password: string) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async getLoginStatus(): Promise<string> {
        return this.noticeBanner.getText();
    }
}

export default new LoginFormPage();