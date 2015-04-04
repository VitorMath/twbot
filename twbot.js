var casper = require('casper').create();

casper.start('http://tribalwars.com.br', function() {
    this.echo(this.getTitle());
});

casper.thenEvaluate(function(term) { //Coloca o Login
    document.querySelector('input[name="user"]').setAttribute('value', term);
}, 'Lord Karthon');

casper.thenEvaluate(function(term) { //Coloca a senha
    document.querySelector('input[name="password"]').setAttribute('value', term);
}, '4OgP+Y~*5R~a<&xk');

casper.then(function() {
	//Clica no Botao de Login
    //this.click('span.button_middle');
    this.clickLabel('Login', 'span');
    this.wait(10000);
});

//wait(10000);
//<span class="button_middle">Login</span>

//casper.thenOpen('http://www.tribalwars.com.br/#Index.submit_login('server_br65');', function() {
casper.then(function() {
    this.clickLabel('Mundo 65', 'span');
}); 

casper.then(function() {
	this.echo(this.getTitle());

    this.capture('foo2.jpg', undefined, {
        format: 'jpg',
        quality: 75
    });
});

casper.then(function() {
    console.log('Actual location is ' + this.getCurrentUrl());
});


casper.run();