var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: 'PrimeiroApp' });
});

router.get('/teste', function (req, res, next) {
  res.send('Você está na View de teste');
});

router.post('/enviar', function (req, res, next) {
  var nome = req.body.nome;
  var email = req.body.email;
  var telefone = req.body.telefone;
  res.redirect('/?nome=' + nome + '&email=' + email + '&telefone=' + telefone);
});

module.exports = router;
