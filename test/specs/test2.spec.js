describe("Test suite2", () => {
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
        await browser.url("https://pastebin.com/")
        await $("//textarea").click();
        await $("//textarea").addValue("git config --global user.name 'New Sheriff in Town' git reset $ (git commit-tree HEAD ^ {tree} -m 'Legacy code') git push origin master --force");
        await $("#select2-postform-expiration-container.select2-selection__rendered").click();
        await $('//*[@id="select2-postform-expiration-container"]').click();
        await $('//*[@id="postform-name"]').click();
        await $('//*[@id="postform-name"]').addValue("how to gain dominance among developers");
        await $('#select2-postform-format-container.select2-selection__rendered').click();
        await $('//*[@id="select2-postform-format-container"]').click();
/*3. Save paste and check the following:
* Browser page title matches Paste Name / Title
* Syntax is suspended for bash
* Check that the code matches the one entered in paragraph 2*/
        await $('//*[@id="w0"]/div[5]/div[1]/div[10]/button').click();
        await browser.url("https://pastebin.com/xqLcxA6z")
        const pageTitle2 = await browser.getTitle();
        expect(pageTitle2).toEqual("how to gain dominance among developers - Pastebin.com");
    }); 
});