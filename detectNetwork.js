// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)


var detectNetwork = function(cardNumber) {

    // I intialized a varaible called dinerClub that will contain the string literal 'Diners Club'
    var dinerClub = "Diner's Club";
    // I intialized a varaible called americanExp that will contain the string literal 'American Express'
    var americanExp = 'American Express';
    // I intialized a varaible called visa that will contain the string literal 'Visa'
    var visa = 'Visa';
    // I intialized a varaible called mCard that will contain the string literal 'MasterCard'
    var mCard = 'MasterCard';
    // I intialized a varaible called discCard that will contain the string literal 'Discover'
    var discCard = 'Discover';

    // I intialized a varaible called discCard that will contain the string literal 'Discover'
    var maestro = 'Maestro';

    // I intialized a varaible called chinaUnion that will contain the string literal 'China UnionPay'
    var chinaUnion = 'China UnionPay';

    // I intialized a varaible called chinaUnion that will contain the string literal 'China UnionPay'
    var switchName = 'Switch';


    // I initalized an array contaning the prefixe numbers for the Diner Club
    var dcNum = ['38', '39'];
    //// I initalized an array contaning the prefixe numbers for the American Express
    var amexNum = ['34', '37'];

    //// I initalized an array contaning the prefixe numbers for the American Express
    var visaNum = ['4'];
    //// I initalized an array contaning the prefixe numbers for the Mastercard
    var mcNum = ['51', '52', '53', '54', '55'];
    //// I initalized an array contaning the prefixe numbers for the Discover
    var discNum = ['6011', '644', '645', '646', '647', '648', '649', '65'];

    //// I initalized an array contaning the prefixe numbers for the Maestro
    var maestroNum = ['5018', '5020', '5038', '6304'];

    //// I initalized an array contaning the prefixe numbers for the Maestro
    var chinaUnionNum= ['624', '625', '626', '6282', '6283', '6284', '6285', '6286', '6287', '6288'];

    //// I initalized an array contaning the prefixe numbers for the Switch
    var switchNum = ['4903', '4905', '4911', '4936', '6333', '6759',    '564182', '633110'];

    var onedigit = cardNumber[0];
    var twoDigits = cardNumber[0] + cardNumber[1];
    var threeDigits = cardNumber[0] + cardNumber[1] + cardNumber[2];
    var fourDigits = cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3];
    var fiveDigits = cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3] + cardNumber[4] + cardNumber[5];
    var start = 622126;
    var end = 622925;



    //I initialized a varaible that will be refrencing the first two numbers of the card number so I can reference it later
    if (!(switchNum.indexOf(fourDigits) !== -1) && (visaNum.indexOf(onedigit) !== -1) && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
        return visa;
    }


    if (mcNum.indexOf(twoDigits) !== -1) {
        return mCard;
    }

    if ((discNum.indexOf(threeDigits) !== -1 && cardNumber.length === 16) || (discNum.indexOf(threeDigits) !== -1 && cardNumber.length === 19)) {
        return discCard;
    } else if ((discNum.indexOf(twoDigits) !== -1 && cardNumber.length === 16) || (discNum.indexOf(twoDigits) !== -1 && cardNumber.length === 19)) {
        return discCard;
    } else if ((discNum.indexOf(fourDigits) !== -1 && cardNumber.length === 16) || (discNum.indexOf(fourDigits) !== -1 && cardNumber.length === 19)) {
        return discCard;
    }

    if ((maestroNum.indexOf(fourDigits) !== -1) && (cardNumber.length === 12 || cardNumber.length === 13 || cardNumber.length === 14 || cardNumber.length === 15)) {
        return maestro;
    } else if ((maestroNum.indexOf(fourDigits) !== -1) && (cardNumber.length === 16 || cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length === 19)) {
        return maestro;
    }




    // I used an if statement to compare the first two numbers and compare the length
    if ((twoDigits === dcNum[0] || twoDigits === dcNum[1]) && cardNumber.length === 14) {
        return dinerClub;
    } else if ((twoDigits === amexNum[0] || twoDigits === amexNum[1]) && cardNumber.length === 15) {
        return americanExp;
    }

    //ChinaUnion Pay check

    for (var i = start; i <= end; i++) {
        var index = i;
        var str = i.toString();
        var array = [];
        array.push(str);

        if (array.indexOf(fiveDigits) !== -1) {
            return chinaUnion;
        }
    } 
     if((chinaUnionNum.indexOf(threeDigits) !== -1 || chinaUnionNum.indexOf(fourDigits) !== -1) && (cardNumber.length === 16 || cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length === 19)){
       return chinaUnion;
     }

    //Swtich check Number

    if ((switchNum.indexOf(fourDigits) !== -1) && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
        return switchName;
    } else if ((switchNum.indexOf(fiveDigits) !== -1) && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)){
        return switchName;
    }

};


//Diner's Club Prefix of 38 or 39 and length of 14
console.log(detectNetwork('38345678901234')); // Diner's Club
console.log(detectNetwork('39345678901234')); //Diner's Club


//American Express Prefix of 34 or 37 and length of 15
console.log(detectNetwork('343456789012345')); // American Express
console.log(detectNetwork('373456789012345')); // American Express


//Visa Prefix 4 and length 13, 16, 19
console.log(detectNetwork('4123456789012')); // Visa
console.log(detectNetwork('4123456789012345')); //Visa
console.log(detectNetwork('4123456789012345678')); //Visa 


//MasterCard Prefix 51-55 and length of 16
console.log(detectNetwork('5112345678901234')); // MasterCard
console.log(detectNetwork('5212345678901234')); // MasterCard
console.log(detectNetwork('5312345678901234')); // MasterCard
console.log(detectNetwork('5412345678901234')); // MasterCard


//Discover Prefix 6011, 644 - 649, 65 length 16 or 19
console.log(detectNetwork('6011344434443444')); // Discover
console.log(detectNetwork('6011344434443444123')); // Discover
console.log(detectNetwork('6441234567891011')); // Discover
console.log(detectNetwork('6441234567891011123')); // Discover
console.log(detectNetwork('6451234567891011')); // Discover
console.log(detectNetwork('6451234567891011123')); // Discover
console.log(detectNetwork('6461234567891011')); // Discover
console.log(detectNetwork('6461234567891011123')); // Discover
console.log(detectNetwork('6471234567891011')); // Discover
console.log(detectNetwork('6471234567891011123')); // Discover
console.log(detectNetwork('6481234567891011')); // Discover
console.log(detectNetwork('6481234567891011123')); // Discover
console.log(detectNetwork('6491234567891011')); // Discover
console.log(detectNetwork('6491234567891011123')); // Discover
console.log(detectNetwork('6591234567891011')); // Discover
console.log(detectNetwork('6591234567891011123')); // Discover



// Maestro 5018 12 - 19 length
console.log(detectNetwork('501812341234')); // Maestro
console.log(detectNetwork('5018123412345')); // Maestro
console.log(detectNetwork('50181234123456')); // Maestro
console.log(detectNetwork('501812341234567')); // Maestro
console.log(detectNetwork('5018123412345678')); // Maestro 
console.log(detectNetwork('50181234123456789')); // Maestro
console.log(detectNetwork('501812341234567890')); // Maestro
console.log(detectNetwork('5018123412345678901')); // Maestro 

// Maestro 5020 12 - 19 length
console.log(detectNetwork('502012341234')); // Maestro
console.log(detectNetwork('5020123412345')); // Maestro
console.log(detectNetwork('50201234123456')); // Maestro
console.log(detectNetwork('502012341234567')); // Maestro
console.log(detectNetwork('5020123412345678')); // Maestro 
console.log(detectNetwork('50201234123456789')); // Maestro
console.log(detectNetwork('502012341234567890')); // Maestro
console.log(detectNetwork('5020123412345678901')); // Maestro 

// Maestro 5038 12 - 19 length
console.log(detectNetwork('503812341234')); // Maestro
console.log(detectNetwork('5038123412345')); // Maestro
console.log(detectNetwork('50381234123456')); // Maestro
console.log(detectNetwork('503812341234567')); // Maestro
console.log(detectNetwork('5038123412345678')); // Maestro 
console.log(detectNetwork('50381234123456789')); // Maestro
console.log(detectNetwork('503812341234567890')); // Maestro
console.log(detectNetwork('5038123412345678901')); // Maestro 

// Maestro 6304 12 - 19 length
console.log(detectNetwork('630412341234')); // Maestro
console.log(detectNetwork('6304123412345')); // Maestro
console.log(detectNetwork('63041234123456')); // Maestro
console.log(detectNetwork('630412341234567')); // Maestro
console.log(detectNetwork('6304123412345678')); // Maestro 
console.log(detectNetwork('63041234123456789')); // Maestro
console.log(detectNetwork('630412341234567890')); // Maestro
console.log(detectNetwork('6304123412345678901')); // Maestro 



//China Union Pay Prefix 622126 16 - 19 length

console.log(detectNetwork('6221260123456789')); // China Union Pay
console.log(detectNetwork('62212601234567890')); // China Union Pay
console.log(detectNetwork('622126341234567890')); // China Union Pay
console.log(detectNetwork('6221263412345678901')); // China Union Pay

//China Union Pay Prefix 622578 16 - 19 length
console.log(detectNetwork('6225780123456789')); // China Union Pay
console.log(detectNetwork('62257801234567891')); // China Union Pay
console.log(detectNetwork('622578012345678912')); // China Union Pay
console.log(detectNetwork('6225780123456789123')); // China Union Pay

//China Union Pay Prefix 622925 16 - 19 length
console.log(detectNetwork('6229253412345678')); // China Union Pay
console.log(detectNetwork('62292534123456789')); // China Union Pay
console.log(detectNetwork('622925341234567890')); // China Union Pay
console.log(detectNetwork('6229253412345678901')); // China Union Pay

//China Union Pay Prefix 624 16 - 19 length
console.log(detectNetwork('6249253412345678')); // China Union Pay
console.log(detectNetwork('62492534123456789')); // China Union Pay
console.log(detectNetwork('624925341234567890')); // China Union Pay
console.log(detectNetwork('6249253412345678901')); // China Union Pay

//China Union Pay Prefix 6282 16 - 19 length
console.log(detectNetwork('6282253412345678')); // China Union Pay
console.log(detectNetwork('62822534123456789')); // China Union Pay
console.log(detectNetwork('628225341234567890')); // China Union Pay
console.log(detectNetwork('6282253412345678901')); // China Union Pay




//Switch Prefix 4903 16 18, 19 length
console.log(detectNetwork('4903253412345678')); // Switch 
console.log(detectNetwork('490325341234567890')); // Switch
console.log(detectNetwork('4903253412345678901')); // Switch 

//Switch Prefix 4905 16 18, 19 length
console.log(detectNetwork('4905253412345678')); // Switch 
console.log(detectNetwork('490525341234567890')); // Switch
console.log(detectNetwork('4905253412345678901')); // Switch 

//Switch Prefix 4911 16 18, 19 length
console.log(detectNetwork('4911253412345678')); // Switch 
console.log(detectNetwork('491125341234567890')); // Switch
console.log(detectNetwork('4911253412345678901')); // Switch 


//Switch Prefix 4936 16 18, 19 length
console.log(detectNetwork('4936253412345678')); // Switch 
console.log(detectNetwork('493625341234567890')); // Switch
console.log(detectNetwork('4936253412345678901')); // Switch 

//Switch Prefix 6333 16 18, 19 length
console.log(detectNetwork('6333253412345678')); // Switch
console.log(detectNetwork('633325341234567890')); // Switch
console.log(detectNetwork('6333253412345678901')); // Switch

//Switch Prefix 564182 16 18, 19 length
console.log(detectNetwork('5641823412345678')); // Switch
console.log(detectNetwork('564182341234567890')); // Switch
console.log(detectNetwork('5641823412345678901')); // Switch

//Switch Prefix 633110 16 18, 19 length
console.log(detectNetwork('6331103412345678')); // Switch
console.log(detectNetwork('633110341234567890')); // Switch
console.log(detectNetwork('6331103412345678901')); // Switch
