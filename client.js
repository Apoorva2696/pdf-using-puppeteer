const http = require('http')
const fs = require('fs')
const puppeteer = require('puppeteer')

const generatePdf = require('./pdfGenerator')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('./public/index.html').pipe(res)
    generatePdf()
    
    // generatePdf.then(pdf => {
    //     res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length })
    //     res.send(pdf)
    // })
})

  
  server.listen(3000)