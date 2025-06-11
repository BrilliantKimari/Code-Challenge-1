function chaiCalculator() {
  let cupsInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
  let cups = parseInt(cupsInput);

  if (!cups || cups <= 0) {
    console.log("Invalid number of cups:", cupsInput);
    return;
  }

  console.log("chaiCalculator");
  console.log("To make " + cups + " cups of Kenyan Chai, you will need:");

  calculateWater(cups);
  calculateMilk(cups);
  calculateTeaLeaves(cups);
  calculateSugar(cups);

  console.log("");
  console.log("Enjoy your Chai Bora!");
}

chaiCalculator();