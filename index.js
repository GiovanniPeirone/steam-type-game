import puppeteer from 'puppeteer';


(async () => {
    // Inicia un navegador
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navega a la página deseada
    await page.goto('https://store.steampowered.com/search/?os=win&filter=topsellers&ndl=1');

    // Extrae el contenido del elemento
    //search_resultsRows

    const data = await page.evaluate(() => {
        
        const juegos = document.getElementById('search_resultsRows');
       
                


        for(i = 0; i < 20; i++){
            
        }
        const title = document.querySelector('h1').innerText;
        const description = document.querySelector('p').innerText;



        return { title, description };
    });

    console.log(data);

    // Cierra el navegador
    await browser.close();
})();