var euro = prompt('Please, enter a sum to convert euros to hryvni');
var dollar = prompt('Please, enter a sum to convert dollars to hryvni');

var conversionEuros = euro * 28.87;
var conversionDollars = dollar * 26.22;
var conversionEuroToDollar = euro * 1.09;

alert(euro + ' euros are equal ' + conversionEuros + ' grns, ' + dollar + ' dollars are equal ' + conversionDollars + ' and ' + euro + ' euro is equal ' + conversionEuroToDollar + ' dollars.');
