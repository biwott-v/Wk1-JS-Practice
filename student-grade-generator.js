function studentGradeGenerator(marks){
  //let marks = prompt("Please Enter the student marks   ' it should be between 0 and 100'");
  //Compares the marks received as input and returns the student grade
  switch(true){
    case marks>79 && marks<=100:
      return 'A';
    case marks>=60 && marks<=79:
      return 'B';
    case marks>=49 && marks<=59:
      return 'C';
    case marks>=40 && marks<=49:
      return 'D';
    case marks<40 && marks>=0:
      return 'E';
    default:
      return 'INVALID MARKS';
  }
}



//Function testing using Event listeners via the Browser

let marks= document.querySelector("#marks"), grade =document.querySelector("#grade"), form =document.querySelector("#gradegen");
form.addEventListener("submit",(event)=>{
  let studentGrade=studentGradeGenerator(marks.value);
  grade.textContent=`The student's grade is ${studentGrade}`;
  event.preventDefault();
});


