alert(" Hello \n This is A SkinCare Page ");
var buy = prompt("What do you want Cream or mask?");
while (buy !== "cream" && buy !== "mask")
{
    var buy = prompt("What do you want Cream or mask?");

}

var itemBuy='';
if (buy =="cream")
{
    itemBuy='<img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1603131224-41297.jpg?crop=0.668xw:1.00xh;0,0.00160xh&resize=768:*"/>';

}
else if(buy =="mask")
{
    itemBuy='<img src="https://cf.shopee.ph/file/ca9b4ebcfcec77b0bc923ac48ce7834c" width=180 >';

}
var numofproducts = prompt("Hom many of the product you want?");
var result ='';
var re=0;
for (var i=0 ; i<numofproducts ; i++)
{
    result+=itemBuy;
    re+=1;
}
document.write(result);

function noOfProducts(){
document.write('Number of products that you want to buy is ' + re);
}
noOfProducts();
