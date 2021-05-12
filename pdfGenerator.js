const puppeteer = require("puppeteer");
const fs = require("fs");

async function generatePdf() {
  // launch a new chrome instance
  const browser = await puppeteer.launch({
    headless: true,
  });

  // create a new page
  const page = await browser.newPage();

  // set your html as the pages content
  const html = fs.readFileSync("./public/index.html", "utf8");
  await page.setContent(html, {
    waitUntil: "domcontentloaded",
  });

  // add css
  await page.addStyleTag({ path: "./public/index.css" });

  // create a pdf buffer
  const pdfBuffer = await page.pdf({
    format: "A4",
  });

  // save as a .pdf file in the folder
  //   await page.pdf({
  //     format: 'A4',
  //     path: `${__dirname}/invoice.pdf`
  //   })

  // close the browser
  await browser.close();
  return pdfBuffer;
}

module.exports = generatePdf;
