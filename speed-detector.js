function speedDetector(speed){
  //let speed = prompt("Enter the speed of a car");
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


//Function testing using Event listeners via the browser


let points = document.querySelector("#demerits"),form1=document.querySelector("#speeddetector"),driverSpeed=document.querySelector("#speed");
form1.addEventListener("submit",(event)=>{
  let value=speedDetector(driverSpeed.value);
  points.textContent=value;
  event.preventDefault();
})
