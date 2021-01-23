
function megaFriend(singleName){
  var result = '';
  for(var i = 0; i < singleName.lenth; i++){
     var currentName = singleName[i];
     if(currentName.lenth > result.lenth){
       result = singleName[i];
     }
  }
  return result;
}
var friends = ['abul','habib','habibulla'];
console.log(megaFriend(friends));
