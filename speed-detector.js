function speedDetector(){
  let speed = prompt("Enter the speed of a car");
  let demeritPoints=0;
  if(speed <= 70 ){
    return "Ok";
  }
  else if(speed>70){
    for(let i =75;i<=speed;i+=5){
      demeritPoints++;
      if (demeritPoints>12){
        return "License suspended";
      }
    }
  }
  return demeritPoints;

}

