// Your assignment submitted successfully.
//problem 1
function seerToMon(seer){
// condition strat
if(seer>=0){
//conversion apply by division
let mon = seer/40;
return mon;
}
else{
return 'invalid input';
}
// condition finish
}
//give parameter value via number variable.
let mySeers = -200;
let mon = seerToMon(mySeers);
console.log(mon);
// problem 2
function totalSales(shirtQuantity, pantQuantity, shoeQuantity){
// condition start
if(shirtQuantity >= 0 && pantQuantity >= 0 && shoeQuantity >= 0){
//per sample price given
const perShirtPrice = 100;
const perPantPrice = 200;
const perShoePrice = 500;
// sample total price calculate
const totalShirtPrice = shirtQuantity * perShirtPrice;
const totalPantPrice = pantQuantity * perPantPrice;
const totalShoePrice = shoeQuantity * perShoePrice;
//toal price calculate
const totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;
return totalPrice;
}
else{
return 'invalid input';
}
//condition finish
}
//give parameter value via number variable
const shirtAmount = 3;
const pantAmount = -4;
const shoeAmount = 5;
const everydaySales = totalSales(shirtAmount,pantAmount,shoeAmount);
console.log(everydaySales);
//problem 3
function deliveryCost(items){
//shipping value given for different items.
const deliveryPriceFirst100Items = 100;
const deliveryPriceSecond100Items = 80;
const deliveryPriceRestItems = 50;
//condition start
// calculation delivery cost for first 100 items.
if(items<=100 && items>=0){
const cost = items * deliveryPriceFirst100Items;
return cost;
}
//calculation delivery cost for second 100 items.
else if(items<=200 && items>=0){
const first100ItemsDeliveryPrice = 100 * deliveryPriceFirst100Items;
const restItems = items -100;
const second100ItemsDeliveryPrice = restItems * deliveryPriceSecond100Items;
const totalCost = first100ItemsDeliveryPrice + second100ItemsDeliveryPrice;
return totalCost;
}
// calculation delivery cost for rest items.
else if(items>=0){
const first100ItemsDeliveryPrice = 100 * deliveryPriceFirst100Items;
const second100ItemsDeliveryPrice = 100 * deliveryPriceSecond100Items;
const restItems = items - 200 ;
const restItemsDeliveryPrice = restItems * deliveryPriceRestItems;
const totalCost = first100ItemsDeliveryPrice + second100ItemsDeliveryPrice + restItemsDeliveryPrice;
return totalCost;
}
else{
return 'invalid input';
}
//condition finish
}
//give parameter value via number variable.
const itemed = -240
const costs = deliveryCost(itemed);
console.log(costs);
//problem 4
function perfectFriend(names){
let firstFiveCharacterName = names[0];
for(const item of names){
//condition of first five character number
if(item.length == 5 ){
firstFiveCharacterName = item ;
return firstFiveCharacterName ;
}
}
//give error condition
if(names.length != String){
firstFiveCharacterName = 'undefined';
return firstFiveCharacterName;
}
}
//give parameter value
const names = [2]
const result = perfectFriend(names);
console.log(result);