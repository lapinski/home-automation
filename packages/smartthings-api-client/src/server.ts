import express from 'express';
import hostile from 'hostile';

const registerHost = (host: string): Promise<string> => new Promise((resolve, reject) => {
    hostile.set('127.0.0.1', host, (err) => {
        if (err) {
            reject(err);
        } else {
            resolve(host);
        }
    });
})

const main = async () => {
    const app = express();

    app.get('/', (req, res) => res.redirect('/smartthings'));
    app.get('/smartthings', (req, res) => {
        res.status(200);
        return res.json({
            message: 'Success',
            queryParams: req.query,
        });
    });

    const host = 'localhost.alexlapinski.name';
    const port = 1234;

    await registerHost(host);

    return app.listen(port, host, () => {
        console.log(`Listening at http://${host}:${port}`);
    });
};

if (require.main === module) {
    main()
        .catch((error) => {
            console.log('Error');
            console.error(JSON.stringify(error, null, 2));
        });
}
