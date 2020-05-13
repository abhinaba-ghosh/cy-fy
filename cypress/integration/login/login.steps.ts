import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

import { loginPage } from '../../support/pageObjects';

Given('user navigates to the target login page', () => {
  loginPage.visit();
  // cy.log('i am in');
});

When('user enter {string} and {string}', (username: string, password: string) => {
  loginPage.setUserName(username);
  loginPage.setUserPassword(password);
});

When('user click the login button', () => {
  loginPage.clickLoginBtn();
});

Then('user should see the login success message', () => {
  loginPage.checkLoginSuccess();
});
