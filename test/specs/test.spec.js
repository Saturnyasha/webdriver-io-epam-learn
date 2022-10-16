/*(I Can Win) When performing the task, you must use the capabilities of Selenium WebDriver, 
the unit testing framework and the Page Object concept. Automate the following script:
1. Open https://pastebin.com or a similar service in any browser
2. Create a New Paste with the following details:
* Code: "Hello from WebDriver"
* Paste Expiration: "10 Minutes"
* Paste Name / Title: "helloweb"*/

describe("Test suite", () => {
    it("First test", async () => {
        await browser.url("https://pastebin.com/")
        const pageTitle = await browser.getTitle(); //get.Title - метод получения названия страницы в браузере//
        expect(pageTitle).toEqual("Pastebin.com - #1 paste tool since 2002!");
    });

    it("Second test", async()=>{
        await $("//textarea").click();
        await $("//textarea").addValue("Hello from WebDriver");
        browser.pause(5000);
        await $("#select2-postform-expiration-container.select2-selection__rendered").click();
        browser.pause(5000);
        await $('//*[@id="select2-postform-expiration-container"]').click();
        browser.pause(5000);
        await $("#postform-name.form-control").setValue("helloweb");
    })
/*(Bring It On) When performing the task, you need to use the capabilities of Selenium WebDriver, 
the unit testing framework and the Page Object concept. Automate the following script:
1. Open https://pastebin.com or a similar service in any browser
2. Create a New Paste with the following details:
* Code:
git config --global user.name "New Sheriff in Town"
git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
git push origin master --force
* Syntax Highlighting: "Bash"
* Paste Expiration: "10 Minutes"
* Paste Name / Title: "how to gain dominance among developers"*/
    it("Third test", async()=>{
        await $("//textarea").click();
        await $("//textarea").addValue("git config --global user.name 'New Sheriff in Town' git reset $ (git commit-tree HEAD ^ {tree} -m 'Legacy code') git push origin master --force");
        browser.pause(100000);
        await $("#select2-postform-expiration-container.select2-selection__rendered").click();
        browser.pause(100000);
        await $('//*[@id="select2-postform-expiration-container"]').click();
        browser.pause(100000);
        await $('//*[@id="postform-name"]').click();
        await $('//*[@id="postform-name"]').addValue("how to gain dominance among developers");
        browser.pause(100000);
        await $('#select2-postform-format-container.select2-selection__rendered').click();
        await $('//*[@id="select2-postform-format-container"]').click();
    });
  
    
});