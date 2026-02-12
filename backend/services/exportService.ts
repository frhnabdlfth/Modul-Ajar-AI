const fs = require('fs');
const path = require('path');

class ExportService {
    static exportToWord(data, filename) {
        const filePath = path.join(__dirname, `../exports/${filename}.docx`);
        const content = `\<html xmlns:o=\"urn:schemas-microsoft-com:office:office\" xmlns:w=\"urn:schemas-microsoft-com:office:word\" xmlns=\"http://www.w3.org/TR/REC-html40\">\n<head><meta charset=\"UTF-8\" /><title>${filename}</title></head>\n<body>\n${data}</body>\n</html>`;
        fs.writeFileSync(filePath, content);
        return filePath;
    }

    static exportToPDF(data, filename) {
        const pdf = require('pdfkit');
        const doc = new pdf();
        const filePath = path.join(__dirname, `../exports/${filename}.pdf`);
        doc.pipe(fs.createWriteStream(filePath));
        doc.text(data);
        doc.end();
        return filePath;
    }
}

module.exports = new ExportService();