$(document).ready(fListeners);

function fListeners(){
  $('.container').on('click', '#generateButton', fGenerate);
  fInitialButton();
}

var clickCount = 0;

function fInitialButton(){
  var buttonToAppend = '<button id="generateButton">Generate</button>';
  $('.container').append(buttonToAppend);
}

function fClickCounter(){
  clickCount++;
  console.log(clickCount);
}

function fGenerate(){
  $('.container').empty();
  fInitialButton();
  fClickCounter();
  var stringToAppend = '';
  stringToAppend += '<div id="generatedDiv">';
  stringToAppend += '<p id="clickCount">Click Count: '+clickCount+'</p>';
  stringToAppend += '<button>Swap</button>';
  stringToAppend += '<button>Delete</button>';
  stringToAppend += '</div>';
  $('.container').append(stringToAppend);
  // $('.container #generatedDiv').css('background-color', 'red');
}
