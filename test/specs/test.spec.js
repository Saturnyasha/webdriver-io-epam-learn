describe("Test suite", () => {
    it("First test", async () => {
        await browser.url("https://pastebin.com/")
        const pageTitle = await browser.getTitle(); //get.Title - метод получения названия страницы в браузере//
        expect(pageTitle).toEqual("Pastebin.com - #1 paste tool since 2002!");
    });

    it("Second test", async()=>{
        await $("//textarea").click();
        await $("//textarea").addValue("Hello from WebDriver");
        await $("#postform-name.form-control").setValue("helloweb");
        // await $("#select2-postform-expiration-container.select2-selection__rendered").click();
        // await $("#select2-postform-expiration-result-7wqf-10M.select2-results__option.select2-results__option--highlighted").setValue("10 Minutes");
    })
});