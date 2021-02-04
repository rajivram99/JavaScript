var cars = [
    {carName : "polo" , Price : "500000"},
    {carName : "nissan", Price : "300000"},
    {carName : "Suzuki", Price : "700000"}
]

function displayCarDetails(){

var result = document.getElementById("carSelect").Value;
alert(result);

cars.forEach(function(data)
{
    if(data.carName == carName)
    {
        document.getElementById("display").innerHTML= '$[data.carName]-$[data.Price]';
    }
})

}