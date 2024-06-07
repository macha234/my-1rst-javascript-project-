function IntroductioToVariables(){
    var car="toyota"
    var y=20              
    console.log(car)   
    console.log(y)
}
IntroductioToVariables()


function addition(){
    // addition
var z=40
var x=30
var sum=z+x
console.log(sum)
}
addition()


function division (){
    // division
var div1 =144
var div2 =12
var divisionAns = div1 / div2
console.log(divisionAns)
}
division()


function multilication(num1,mum2){
   // multilication
var mul1 =26
var mul2 =26
var multilicationAns = mul1 * mul2
console.log(multilicationAns) 
}
multilication(26,26)


function subtruction(){
// subtruction
var sub1 =80
var sub2 =40
var subtructionAns = sub1-sub2
console.log(subtructionAns)
}
subtruction()


function CheckName(age){
 // conditions


if(age >= 12){

    //do something
    console.log("is above 12")
}

else{
    //do sommething else
    console.log("is not above 12")
}
}
CheckName(12)


function CheckColor(favorite_color){

if(favorite_color == "Blue"){
    console.log("correct")
}

else{
    console.log("incorrect")
}
}
CheckColor("Blue")

// arrays

var y = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]

console.log(y.length)


// using index to retrive value at index position

var names = ["basil","joseph", "shantel", "jessica"]

var name1 = names[0]
var name2 = names[1]
var name3 = names[2]
var name4 = names[3] 

console.log(name1, name2, name3, name4)


var varjess = names[names.length - 1]

console.log(varjess)

//for loops

var animals = ["dog", "cat", "cow", "sheep", "goat"]

//  for(let i = 0; i < animals.length; i++) {
//     console.log (animals[i])
// } 

var colors = ["red", "blue", "orange", "green", "yellow"]

for(let i = 0; i < colors.length; i++) {
    console.log (colors[i])
}

animals.forEach(function (animal) {
    console.log(animal)
})



// bojects
var car = {
    color: "orange",
    brand: "Lamborghini",
    "manufacture date": "February 2011",
    model: "Lamborghini Aventador",

    // method

    accelarate: function () {
        console.log("car speed increased")
    },

    break: function () {
        console.log("car stopped")
    }

}

console.table(car)
// dot nottation method
console.log(car.color)
console.log(car.brand)
console.log(car.accelarate ())
console.log(car.break ())

// square bracket nottation
console.log(car["manufacture date"])

var person =  {
    gender: "boy",
    age: "12",
    height: "5 feet tall",
    name: "Basil Macharia",

    walk: function () {
        console.log("starts moving")
    }
}

console.table(person)

//algorithms
var arr = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10];

for (let i = arr.length - 1; i >= 0; i--){
    console.log(arr[i])
}

var friends = ["Jabali", "Kweli", "Peter", "kamau", "Liam"];
var number = 1;
for (let i = friends.length -1; i >= 0; i--){
    let count = number++;
    console.log(count, friends[i])
}