function hotelCost(day){
    var rent = 0;
    if (day <= 10){
        rent = day * 100;
    }else if(day <= 20){
        var firstRent =  10 * 100;
        var remainingDay = day - 10;
        var secondRent = remainingDay * 80;
        rent = firstRent + secondRent;
    }else{
        var firstRent = 10 * 100;
        var secondRent = 10 * 800;
        var remainingDay = day - 20;
        var thirdRent = remainingDay * 50;
        var rent = firstRent + secondRent + thirdRent;
    }
    return rent;
}
 var totalRent = hotelCost(15);
  console.log(totalRent);