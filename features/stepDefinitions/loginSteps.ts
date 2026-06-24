import {Given,When,Then} from '@cucumber/cucumber';
import {LoginPage} from '../../pages/LoginPage'
import {CustomWorld} from '../../support/world'
 
 
let login : LoginPage;

Given('User opens the application', async function (this:CustomWorld) {

    login = new LoginPage(this.page);
    await login.openApp();       
});
       

       
When('User enters credentails', async function (this:CustomWorld){

     await login.login(); 
});
       

       
Then('User should login successfully',async function (this:CustomWorld) {
  
    console.log("Login successfully")      
});

When('User enters {string} and {string}', async function (string, string2) {

     await login.loginwithmultipleusers(string, string2);
         
});

Then('User should view the error message', function () {

    console.log("error displayed");
           
});


//npx ts-node report.ts

//npx cucumber-js --parallel 3

//npx cucumber-js --parallel 4 --tags "@smoke"