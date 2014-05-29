var when = process.stdin.on.bind(process.stdin);
var show = console.log;
var priceEntered = 'data';

function showSalePrice (fullPrice) {
  var salePrice = fullPrice * .33;
  show(salePrice);
}

when(priceEntered, showSalePrice);