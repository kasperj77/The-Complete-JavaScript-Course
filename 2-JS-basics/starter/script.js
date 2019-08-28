var mark_height = 60;
var mark_weight = 150;

var john_height = 85;
var john_weight = 200;

mark_bmi = mark_weight / (mark_height*2)

john_bmi = john_weight / (john_height*2)

mark_bigger = false;

if (mark_bmi > john_bmi){
    mark_bigger = true;
}

console.log("Is Mark's BMI higher then John's?" + mark_bigger)