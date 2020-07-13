import express from 'express';

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

    return app.listen(1234, 'localhost', () => {
        console.log('Listening at http://localhost.alexlapinski.name:1234');
    });
};

if (require.main === module) {
    main()
        .catch((error) => {
            console.log('Error');
            console.error(JSON.stringify(error, null, 2));
        });
}
