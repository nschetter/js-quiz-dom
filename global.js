var q1 = {q:"What is the name of Ned Stark's youngest daughter?", options:"1) Yari 2) Arya 3) Darya 4) Catelyn", a: 2};
var q2 = {q:"What is the name of the country 'Game of Thrones' takes place in?", options:"1) Westeros 2) Westrose 3) Braavos 4) King's Landing", a: 1};
var q3 = {q:"Who wields 'Longclaw' out of these characters?", options:"1) Jaime Lannister 2) The Mountain 3) Sandor Clegane 4) Jon Snow", a: 4};
var q4 = {q:"What is the name of Jon Snow's dire wolf?", options:"1) Ghost 2) Shaggy 3) Scar 4) Bloodclaw", a: 1};
var q5 = {q:"Which region is Oberyn Martel from?", options:"1) Kingdom of the Reach 2) Kingdom of the Stormlands 3) Principality of Dorne 4) Kingdom of the Mountain and the Vale", a: 3};
var q6 = {q:"Which of these characters killed their mother during childbirth", options:"1)Petyr Baelish 2) Ser Jorah 3) Tyrion Lannister 4) Shireen Baratheon", a: 3};
var q7 = {q:"Of which house was the 'Mad King'?", options:"1) Targaryen 2) Baratheon 3) Martel 4) Tyrell", a:1};
var q8 = {q:"House Mormont holds fealty to which house?", options:"1) Bolton 2) Stark 3) Greyjoy 4) Frey", a:2};
var q9 = {q:"Who killed Elia Martell?", options:"1) Sandor Clegane 2) Gregor Clegane 3) Jaime Lannister 4) Bran Stark", a:2};
var q10 = {q:"The common expression in High Valyrian 'Valar Morghulis' translates to...", options:"1) Hear me roar! 2) Winter is coming 3) Blood for blood 4) All men must die", a: 4};
// answers -- q1 = 2
// answers -- q2 = 1
// answers -- q3 = 4
// answers -- q4 = 1
// answers -- q5 = 3
// answers -- q6 = 3
// answers -- q7 = 1
// answers -- q8 = 2
// answers -- q9 = 2
// answers -- q10 = 4

var qarray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var numberOfQuestions = parseInt(qarray.length);
var a, i = 0;
var score = 0;

document.getElementById("questions").innerText = qarray[i].q; 
document.getElementById("options").innerText = qarray[i].options;
document.getElementById("submitter").onclick = process_answer_submission;  
document.getElementById("next").onclick = next_question;

function input_answer(){
  return document.getElementById("answer").value;
};

function is_correct_answer(answer_text){
  if (answer_text == qarray[i].a) {
    return true;
  } 
    return false;
};

function update_question_result(correct){
  if (correct) {
    score += 1;
    document.getElementById("question_result").innerText = "That's Right!";
  } else {
    document.getElementById("question_result").innerText = "Sorry -- that's wrong.";
  }
};

function process_answer_submission(){
  var user_answer = input_answer();
  update_question_result(is_correct_answer(user_answer));
  document.getElementById("submitter").style.visibility = "hidden";
};

function next_question(){
  i += 1
  if (i < numberOfQuestions) {
    document.getElementById("questions").innerText = qarray[i].q; 
    document.getElementById("options").innerText = qarray[i].options;
    document.getElementById("answer").value = "";
    document.getElementById("question_result").innerText = "";
     document.getElementById("submitter").style.visibility="visible";
  } else {
    percent = ((score/numberOfQuestions) * 100);
    document.getElementById("result").innerText = "Your score was: " + percent + "%, and you need a 70% to pass";
    pass();
  }
};

function pass(){
  if (percent >= 70) {
    document.getElementById("passfail").innerText = "You know a good amount about 'Game of Thrones'; you passed!";
  } else {
    document.getElementById("passfail").innerText = "You know nothing Jon Snow; you failed";
  }
}