//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator (weight, height) {
  var weight = prompt(`Your weight (in kg)?` );
  var height = prompt(`Your height (in m)?`);
  var bmi = weight / Math.pow(height, 2);
  bmi = Math.round(bmi);

  if (bmi < 18.5) {
    alert(`Your BMI is ` + Math.round(bmi) + ` so you are underweight.`);
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    alert(`Your BMI is ` + Math.round(bmi) + ` so you have a normal weight.`);
  } else if (bmi >= 24.9) {
    alert(`Your BMI is ` + Math.round(bmi) + ` so you are overweight.`);
  }
}

bmiCalculator();

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/