var rls = require('readline-sync');

var qsnAnsList = [
  {
    qsnInfo:'---- Here\'s the First question ----\n',
    question:"What is the mane of gon's father?\n",
    options: '1.Mito 2.Zeno 3.Ging 4.Mike',
    answer:3,
  },
  {
    qsnInfo:'------------ Second question ------------\n',
    question:"Who is the head of Phantom Troupe\n",
    options: "1.Feitan Portor 2.Chrollo Lucilfer 3.Nobunaga Hazama 4.Franklin Bordeau",
    answer:2,
  },
  {
    qsnInfo:'------------ Third question ------------\n',
    question:"What is Gon's Birth Place\n",
    options:"1.Greed Island 2.Whale Island 3.Yorknew City 4.Meteor City",
    answer:2,
  },
  {
    qsnInfo:'------------ Forth question ------------\n',
    question:"What are the members of the Phantom Troupe called?\n",
    options:'1.Spiders 2.Troupe 3.Phantoms 4.Troupes',
    answer: 1,
  },
  {
    qsnInfo:'------------ Fifth question ------------\n',
    question:"What is the starting point of Greed Island video game?\n",
    options:'1.Masadora 2.Soufrabi 3.Shiso Tree 4.Aiai',
    answer:3,
  },
  ];
console.log('Lets check your hunter x hunter knowledge\n');
console.log('Here are 5 questions, answer carefully!\n');
console.log('Lets begin then :) \n');
console.log('Enter values from 1 - 4 for each question');
let score = 0;
for(let i = 0;i<5;i++){
  console.log(qsnAnsList[i]["qsnInfo"]);
  var ans = rls.questionInt(`${qsnAnsList[i]["question"]}${qsnAnsList[i]["options"]}\n`);
  if(ans === qsnAnsList[i]['answer']){
    score++;
    console.log('Amazing!! you are correct.')
  } else{
    console.log('Sorry but thats not correct.')
  }
  console.log(`Total Score ${score} / 5 \n`);
}
console.log(`Your final score is ${score} / 5\n`);
