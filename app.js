const express    = require ('express');
const exphbs     = require ('express-handlebars');
const app        = express();
const path       = require('path');
const db         = require('./db/connection');
const bodyParser = require('body-parser');
const job        = require('./models/Job');
const Job = require('./models/Job');
const PORT = 3000;

app.listen(PORT, function() {
    console.log(`O EXPRESS ESTÁ FUNCIONANDO NA PORTA ${PORT}`);
});

//body parser
app.use(bodyParser.urlencoded({extended: false}));

// handlebars para criação de layout  html
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//conexão banco de dados
db
    .authenticate()
    .then(() => {
    console.log("Conectou ao banco com sucesso!");
    })

    .catch(err => {
    console.log("Ocorreu um erro ao conectar", err);
    });

//rotas
app.get('/', (req, res) => {
    Job.findAll({order: [
        ['createdAt', 'DESC']
    ]})
    .then(jobs => {
        res.render('index', {
            jobs
        });

    })
});

//rota do jobs
app.use('/jobs', require ('./routes/jobs'));

