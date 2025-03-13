function studentGradeGenerator(){
  let marks = prompt("Please Enter the student marks   'NOTE: it should be between 0 and 100'");
  //Compares the marks received as input and returns the student grade
  switch(true){
    case marks>79:
      return 'A';
    case marks>=60 && marks<=79:
      return 'B';
    case marks>=49 && marks<=59:
      return 'C';
    case marks>=40 && marks<=49:
      return 'D';
    case marks<40:
      return 'E';
    default:
      return 'INVALID MARKS';
  }
}
