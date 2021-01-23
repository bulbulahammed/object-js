    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;

    function budgetCalculator(watch, phone, laptop){
    var watchTotal = watch * 50;
    var phoneTotal = phone * 100;
    var laptopTotal = laptop * 500;
    return watchTotal + phoneTotal + laptopTotal;
}
var result = budgetCalculator(25,54,145);
console.log(result);