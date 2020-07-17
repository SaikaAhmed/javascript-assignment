
//1. convert feet to mile
function feetToMile(feet) {

    if (feet <= 0){
        return "feet can not be zero or less";
    }
    var mile = feet/5280;
    return mile;
}
var convert = feetToMile(3);
console.log(convert);



//2. calculating wood
function woodCalculator(chair,table,bed){

    if (chair < 0 || table < 0 || bed < 0){
        return "Furniture number can not be less than zero";
    }
    var chairCalculation = chair * 1;
    var tableCalculation = table * 3;
    var bedCalculation = bed * 5;
    var allWood = chairCalculation + tableCalculation + bedCalculation;
    return allWood;
}

var allCalculate = woodCalculator(5,2,4);
console.log(allCalculate);


//3. Calculating brick
function brickCalculator(floorNumber){
    var brickPerFeet = 1000;
    var perfloor = floorNumber * 1000;
    var floorHeight;

    if (floorNumber > 0 && floorNumber <=10 ){ //for floor 1 to 10
        floorHeight = perfloor * 15;
        return floorHeight;
    }
    else if (floorNumber > 10 && floorNumber <=20 ){ //for floor 11 to 20
        var floorRemainder = floorNumber % 10;
        var countingBrick = (10 * 15 * brickPerFeet) + (floorRemainder * 12 * brickPerFeet);
        return countingBrick;
    }
    else if (floorNumber > 20 ){ // for floor up to 20
        var floorRemainder = (floorNumber - 20 ); 
        var countingBrick = (10 * 15 * brickPerFeet) + (10 * 12 * brickPerFeet) + (floorRemainder * 10 * brickPerFeet);
        return countingBrick;
    }
    else{
        return "Invalid floor number";
    }
    
}
var countingBrick =brickCalculator(5);
console.log(countingBrick);




//4. finding tinyFriend
function tinyFriend(friendsArr){
    var tiny = friendsArr[0]; //set array index 0 is smallest
     
    if(friendsArr.length > 0){
        for(var i=0; i < friendsArr.length; i++){
            if(typeof friendsArr[i] == 'string'){
                if(tiny == friendsArr[0])
                 tiny = friendsArr[i]; 
                 else if(friendsArr[i].length < tiny.length){
                     tiny = friendsArr[i];
                 }
            }
    
        }
    }
    return tiny;
}
var output = tinyFriend(['ridi', 'jon', 'seli', 'selina']);
console.log(output);
