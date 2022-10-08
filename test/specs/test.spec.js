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
});