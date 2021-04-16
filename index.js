// Code your solutions in this file
//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
  //for (let i = 0; i < gifts.length; i++) {
  //  console.log(`Wrapped ${gifts[i]} and added a bow!`);
//  }

//  return gifts;
//}

//wrapGifts(gifts);


function writeCards(namesArray, event) {
    let eventMessage = []
    for (let i = 0; i < namesArray.length; i++) {
        eventMessage.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
        
    }
    return eventMessage
}

function countDown(number){
    while (number>= 0){
         console.log(number--);
    }
}