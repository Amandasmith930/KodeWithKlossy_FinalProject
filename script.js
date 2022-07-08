var button = $(".submit-btn");
var message = $(".journal-output");

button.on("click", getJournalToConsole);

function getJournalToConsole(event) {
  event.preventDefault();

  console.log("hello");
  
  var words = $(".journal").val();

  console.log(words);

  message.text(`   Hi! Your feelings are valid and heard. You said: ${words}`);
}
=

var affirmations = [  
  "I love myself.",
  "I am an important person.",
  "I am worthy.",
  "I am proud of myself.",
  "I can do anything that I set my mind too.",
  "My possibilities are endless.",
  "I will not stress over things that I cannot control.",
  "I believe in myself.",
  "Everything in my life has a purpose.",
  "Challenges are opportunities to learn and grow.",
  "Good things are coming my way.",
  "I am grateful for everything that I have.",
  "I am brave.",
  "I am beautiful.",
  "Today is going to be a good day.",
  "I will be kind to myself and others today.",
  "I am enough.",
  "I matter.",
  "I am choosing to have a good day.",
  "All of my problems have solutions.",
  "I forgive myself for my mistakes.",
  "Today, I will be my best self."
  ];

var buttonTwo = $(".submit-btn-two");
 

buttonTwo.on("click", addAffirmation);

function addAffirmation(event)
{
  event.preventDefault();
  var affirmationUser = $('.affirmation-user').val();
  affirmations.push(affirmationUser);
  console.log(affirmations);
}

// function getAffirmations() {
//   for (var i = 0; i < affirmations.length; i++) {
//     console.log(affirmations[i]);
//     
//   }
// }
// console.log(inputArray);

function getRandomAffirmation() {
  var randomNumber = Math.floor(Math.random() * affirmations.length);
  var affirmation = affirmations[randomNumber];
  return affirmation;
};

function changeAffirmation() {
  var affirmation = getRandomAffirmation();
  $(".affirmation").text(affirmation);
};

// $(function() {
//   changeAffirmation();
// });



//function addAffirmation ()
// {
      // data.push(document.getElementById().value);
      //document.getElementById('t1').value='';
      //disp();
// }





