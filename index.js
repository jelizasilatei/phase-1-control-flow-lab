function scuberGreetingForFeet(fare){
  // Write your code here!
  if(fare <= 400){
    return 'This one is on me!';
  } else if(fare > 2000 && fare <=2500){
    return'I will gladly take your thirty bucks.';
  } else if(fare > 2500){
    return 'No can do.';
  }
}
console.log(scuberGreetingForFeet(199));
console.log(scuberGreetingForFeet(2001));
console.log(scuberGreetingForFeet(2501));

function ternaryCheckCity(city){
  // Write your code here!
  return city === "NYC" ? ('Ok, sounds good.') : ('No go.');
}
console.log(ternaryCheckCity("NYC"));
console.log(ternaryCheckCity("pittsberg"));

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip){
    case 'generous':
      return tip = 'Thank you so much.';
      break;
    case 'not as generous':
      return tip = 'Thank you.';
      break;
    default:
      return tip = 'Bye.';
      break;
  }
}
console.log(switchOnCharmFromTip('generous'));
console.log(switchOnCharmFromTip('not as generous'));
console.log(switchOnCharmFromTip('thanks for everything'));