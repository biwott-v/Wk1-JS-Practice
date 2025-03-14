//Bubble Sort
function sortArray(){
  myarray=prompt("Enter a list of number ie '5,4,3,2,1'").split(",");
  for (let i =0; i<=myarray.length; i++){
    complete=0;
    for(let i=0;i<=myarray.length;i++){
      let y=i+1;
      if(myarray[i]>myarray[y]){
        let b = myarray[i];
        myarray[i]=myarray[y];
        myarray[y]=b;
        complete++;
      }
    }
    if(complete===0){
      break;
    }
  }
  return myarray;
}

//Loops
function steps(number){
  stair="#";
  onestair="#";
  console.log(onestair);
  for(let i=1;i<number;i++){
    stair+=onestair;
    console.log(stair);
  }
}

//Objects
function cylinderVolume(radius,height){
  class cylinder  {
    constructor(radius,height){
      this.radius = radius;
      this.height = height;
    }
      volume() {
        const volume=(22/7)*this.radius*this.height*this.radius;
        return parseFloat(volume).toFixed(4);
    }
  }
  let myCylinder= new cylinder(radius,height);
  return myCylinder.volume();
}

