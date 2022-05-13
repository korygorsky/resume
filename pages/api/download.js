import {
    initBrowser,
    generatePDF,
    terminateBrowser,
} from '@rossbob/html-to-pdf'

export default async function handler(req, res) {
    const browser = await initBrowser()

    const url = 'http://localhost:3000' + (req.query.path ?? '/')

    const { pdf } = await generatePDF(browser, [{ url }])

    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf')
    res.status(200).send(pdf.buffer)
}
