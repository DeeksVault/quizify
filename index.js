const readLineSync = require('readline-sync');
let score=0;
const database ={
  data:[
    {
      question:`let a={} , b={} console.log(a==b) console.log(a===b)`,
      options:{
        a:"false false",
        b:"true true"
      },
      correctAns:"a"
    },
    {
      question:'what is the value of 3+3',
      options:{
        a:'5',
        b:'6'
      },
      correctAns:"b"
    },
    {
      question:'what is 10/2',
      options:{
        a:"5",
        b: "3"
      },
      correctAns:"a"
    }
  ]
}

function displayAllQuestions(){
  for(let i=0;i<database.data.length;i++){
    console.log(`\nQ${i+1} : ${database.data[i].question}\n`);
    for(let key in database.data[i].options){
      console.log(`${key} : ${database.data[i].options[key]}`);
    }
    let userAns = readLineSync.question('enter your option a/b');
    if(userAns===database.data[i].correctAns){
      console.log("correct ans");
      score++;
    }
    else{
      consle.log("wrong ans");
    }
    
  }
}

displayAllQuestions();
console.log(`your score is ${score}`);