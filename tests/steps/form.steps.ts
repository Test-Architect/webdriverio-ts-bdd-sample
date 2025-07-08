import formHomePage from '@pages/form.page.ts';
import loginFormPage from '@pages/login-form.page.ts';
import { Given, Then, When } from '@wdio/cucumber-framework';

Given("I am on Dummy Collection page", async () => {
    await formHomePage.navigate();
});

Then("I click login form navigation", async () => {
    await formHomePage.waitForIsShown();
    await formHomePage.goToLoginForm();
});

When("I try to login with valid credential", async () => {
    await loginFormPage.waitForIsShown();
    await loginFormPage.authenticate(
        "tomsmith",
        "SuperSecretPassword!"
    );
});


Then("I should be able to login successfully", async () => {
    let result = (await loginFormPage.getLoginStatus()).trim();
    await expect(result).toContain("logged into a secure");
});

