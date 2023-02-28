//////// (1)
let burger = 0;
let potatoe = 2;

if(burger === 4 && potatoe ===  1){
    console.log('All are done')
}else {
    console.log('We go to another place')
}

///////// (2)
let price2 = 1999;

if(price2 >= 1000 && price2 <= 1900){
    console.log('Range')
}else {
    console.log('Not in range')
}

/////// (3)
let price3 = 999;

if(price3 >= 1000 && price3 <=  1900){
    console.log('Item is not in range')
}else {
    console.log('Item is in range')
}


///////// (4)

let season = 5;
if (season == 1){
    console.log('This is winter')
}else if (season == 2){
    console.log('This is spring')
}else if (season == 3) {
    console.log('This is summer')
}else if ( season == 4) {
    console.log ('This is fall')
}else {
    console.log('Out of any season')
}


////// (5)


////////// (6)

let weekDay = 2;

switch(weekDay){
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;   
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
    default:
        console.log('This is default output')
        break;
}


///////// (7)



//////// (8)

const str = 'potatoe';
const noVowels = str.replace(/[oaoe]/gi, '');
console.log(noVowels);


//////// (9)