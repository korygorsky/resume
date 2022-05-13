// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {
    initBrowser,
    generatePDF,
    terminateBrowser,
} from '@rossbob/html-to-pdf'

export default async function handler(req, res) {
    const browser = await initBrowser()

    const { pdf } = await generatePDF(browser, [
        { url: 'http://localhost:3000' },
    ])

    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf')
    res.status(200).send(pdf.buffer)
}
