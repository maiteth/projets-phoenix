const fs = require('fs');

const dir = function (path) {
    return function (req, res, next) {
        console.log('req.url', req.url);
        const dir = '.' + req.url;
        if (!fs.existsSync(dir)) {
            next();
            return;
        }

        // list directories
        let html = `
 <b>repertoire</b> : ${req.url}<br>
liste : <br>
<ul>
    `;
        fs.readdirSync(dir).forEach(file => {
            console.log('file', file);
            if (file.substr(0, 1) === '.') {
                return;
            }
            html += `
 <li><a href="./${file}"> ${file}    </a></li>
        `
        });
        html += `
    </ul>
    `
        // envoi template sur la reponse
        res.send(html);
    };
}

module.exports = dir;