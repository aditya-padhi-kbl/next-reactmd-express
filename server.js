const express  = require('express');
const next = require('next');
const { parse } = require('url');
const PORT = parseInt(process.env.PORT, 10) || 3000;
const dev = (process.env.NODE_ENV = 'production');
const app = next({ dir: ".", dev });
const compression = require('compression')
const handle = app.getRequestHandler();
const fs = require('fs');
const spdy = require('spdy');
const options = {
    key: fs.readFileSync(__dirname + '/server.key'),
    cert: fs.readFileSync(__dirname + '/server.crt')
};
console.log(__dirname)
app.prepare()
    .then( () => {
        const server = express();
        server.use(compression());
        server.get("*", (req, res) => {
            return handle(req, res);
        });

        spdy.createServer(options, server).
            listen(PORT, err => {
                if (err) {
                    throw err;
                }
                console.log(` > Ready on ${PORT}`);
        })
    })
    .catch(ex => {
        console.error(ex);
        process.exit(1);
    })