const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

module.exports = (app) =>{

    app.get('/', (req ,res) =>{
        res.send(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Casa do Códiogo<h1>
            </body>   
        </html>
        `)
    });

    app.get('/livros', (req, res) =>{

        const livroDao = new LivroDao(db);

        livroDao.lista()
                    .then(livros => res.marko(
                        require('../views/livros/lista/lista.marko'),
                        {
                            livros: livros
                        }
                    ))
                    .catch(erro => console.log(erro));
    });

    app.get('/livros/form', (req, res) =>{
        res.marko(require('../views/livros/form/form.marko'));
    });

    app.post('/livros', (req, res) =>{
        console.log(req.body)
    })
}
