$(function() {

var ex = "images/ex.png";
var oh = "images/oh.png";
var turn = Math.floor(Math.random() * 10);
var i = 1;
var j = 10;

function clearBoard() {
  openSquares();
  $('#char1, #char2, #char3, #char4, #char5, #char6, #char7, #char8, #char9').removeClass().addClass('black').attr("src", "images/black.png");
  i = 1;
  j = 10;
}

function closeSquares() {
  $('#char1, #char2, #char3, #char4, #char5, #char6, #char7, #char8, #char9').addClass('busy');
}

function openSquares() {
  $('#char1, #char2, #char3, #char4, #char5, #char6, #char7, #char8, #char9').removeClass('busy');
}

function updateScore(winner) {
  if (winner === "ex") {
    var x_score = $('#x_score').text();
    x_score = parseInt(x_score);
    var new_score = x_score + 1;
    $('#x_score').text(new_score);

    var x_score_mob = $('#x_score_mobile').text();
    x_score_mob = parseInt(x_score_mob);
    var new_score_mob = x_score_mob + 1;
    $('#x_score_mobile').text(new_score_mob);
  } else {
    var o_score = $('#o_score').text();
    o_score = parseInt(o_score);
    var new_score = o_score + 1;
    $('#o_score').text(new_score);

    var o_score_mob = $('#o_score_mobile').text();
    o_score_mob = parseInt(o_score_mob);
    var new_score_mob = o_score_mob + 1;
    $('#o_score_mobile').text(new_score_mob);
  }
}

function colorSquares(one, two, three) {
  // var color = Math.floor(Math.random() * 100);
  // console.log(color);
  // if (67 < color && color < 100) {
  //   color = 'cya';
  // } else if (33 < color && color < 67) {
  //   color = 'mag';
  // } else if (color < 33) {
  //   color = 'yel';
  // }
  closeSquares();

  if (one === "#char1" && two === "#char2" && three === "#char3") {
      $('#sq1').removeClass('game_square').addClass('cya');
      $('#sq2').removeClass('game_square').addClass('mag');
      $('#sq3').removeClass('game_square').addClass('yel');
  } else if (one === "#char4" && two === "#char5" && three === "#char6") {
      $('#sq4').removeClass('game_square').addClass('cya');
      $('#sq5').removeClass('game_square').addClass('mag');
      $('#sq6').removeClass('game_square').addClass('yel');
  } else if (one === "#char7" && two === "#char8" && three === "#char9") {
      $('#sq7').removeClass('game_square').addClass('cya');
      $('#sq8').removeClass('game_square').addClass('mag');
      $('#sq9').removeClass('game_square').addClass('yel');
  } else if (one === "#char1" && two === "#char4" && three === "#char7") {
      $('#sq1').removeClass('game_square').addClass('cya');
      $('#sq4').removeClass('game_square').addClass('mag');
      $('#sq7').removeClass('game_square').addClass('yel');
  } else if (one === "#char2" && two === "#char5" && three === "#char8") {
      $('#sq2').removeClass('game_square').addClass('cya');
      $('#sq5').removeClass('game_square').addClass('mag');
      $('#sq8').removeClass('game_square').addClass('yel');
  } else if (one === "#char3" && two === "#char6" && three === "#char9") {
      $('#sq3').removeClass('game_square').addClass('cya');
      $('#sq6').removeClass('game_square').addClass('mag');
      $('#sq9').removeClass('game_square').addClass('yel');
  } else if (one === "#char1" && two === "#char5" && three === "#char9") {
      $('#sq1').removeClass('game_square').addClass('cya');
      $('#sq5').removeClass('game_square').addClass('mag');
      $('#sq9').removeClass('game_square').addClass('yel');
  } else if (one === "#char3" && two === "#char5" && three === "#char7") {
      $('#sq7').removeClass('game_square').addClass('cya');
      $('#sq5').removeClass('game_square').addClass('mag');
      $('#sq3').removeClass('game_square').addClass('yel');
  } else {
      console.log("no match");
  }
}

function decolorSquares() {
  if ($('#sq1').hasClass('cya')) {
    $('#sq1').removeClass('cya').addClass('game_square');
  } else if ($('#sq1').hasClass('mag')) {
    $('#sq1').removeClass('mag').addClass('game_square');
  } else if ($('#sq1').hasClass('yel')) {
    $('#sq1').removeClass('yel').addClass('game_square');
  }
  $('#sq2').removeClass().addClass('game_square');
  $('#sq3').removeClass().addClass('game_square');

  if ($('#sq4').hasClass('cya')) {
    $('#sq4').removeClass('cya').addClass('game_square');
  } else if ($('#sq4').hasClass('mag')) {
    $('#sq4').removeClass('mag').addClass('game_square');
  } else if ($('#sq4').hasClass('yel')) {
    $('#sq4').removeClass('yel').addClass('game_square');
  }
  $('#sq5').removeClass().addClass('game_square');
  $('#sq6').removeClass().addClass('game_square');

  if ($('#sq7').hasClass('cya')) {
    $('#sq7').removeClass('cya').addClass('game_square');
  } else if ($('#sq7').hasClass('mag')) {
    $('#sq7').removeClass('mag').addClass('game_square');
  } else if ($('#sq7').hasClass('yel')) {
    $('#sq7').removeClass('yel').addClass('game_square');
  }
  $('#sq8').removeClass().addClass('game_square');
  $('#sq9').removeClass().addClass('game_square');
}

function chkWin() {
  //check for Tie
  if (!$('#char1, #char2, #char3, #char4, #char5, #char6, #char7, #char8, #char9').hasClass('black')) {
    setTimeout(clearBoard, 1000);
  }

  //check for X
  if ($('#char1').hasClass('ex') && $('#char2').hasClass('ex') && $('#char3').hasClass('ex')) {
    colorSquares("#char1", "#char2", "#char3");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore('ex');
  }
  if ($('#char4').hasClass('ex') && $('#char5').hasClass('ex') && $('#char6').hasClass('ex')) {
    colorSquares("#char4", "#char5", "#char6");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("ex");
  }
  if ($('#char7').hasClass('ex') && $('#char8').hasClass('ex') && $('#char9').hasClass('ex')) {
    colorSquares("#char7", "#char8", "#char9");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("ex");
  }
  if ($('#char1').hasClass('ex') && $('#char4').hasClass('ex') && $('#char7').hasClass('ex')) {
    colorSquares("#char1", "#char4", "#char7");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("ex");
  }
  if ($('#char2').hasClass('ex') && $('#char5').hasClass('ex') && $('#char8').hasClass('ex')) {
    colorSquares("#char2", "#char5", "#char8");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("ex");
  }
  if ($('#char3').hasClass('ex') && $('#char6').hasClass('ex') && $('#char9').hasClass('ex')) {
    colorSquares("#char3", "#char6", "#char9");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("ex");
  }
  if ($('#char1').hasClass('ex') && $('#char5').hasClass('ex') && $('#char9').hasClass('ex')) {
    colorSquares("#char1", "#char5", "#char9");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("ex");
  }
  if ($('#char3').hasClass('ex') && $('#char5').hasClass('ex') && $('#char7').hasClass('ex')) {
    console.log("wee hoo");
    colorSquares("#char3", "#char5", "#char7");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("ex");
  }

  //check for O
  if ($('#char1').hasClass('oh') && $('#char2').hasClass('oh') && $('#char3').hasClass('oh')) {
    colorSquares("#char1", "#char2", "#char3");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("oh");
  }
  if ($('#char4').hasClass('oh') && $('#char5').hasClass('oh') && $('#char6').hasClass('oh')) {
    colorSquares("#char4", "#char5", "#char6");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("oh");
  }
  if ($('#char7').hasClass('oh') && $('#char8').hasClass('oh') && $('#char9').hasClass('oh')) {
    colorSquares("#char7", "#char8", "#char9");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("oh");
  }
  if ($('#char1').hasClass('oh') && $('#char4').hasClass('oh') && $('#char7').hasClass('oh')) {
    colorSquares("#char1", "#char4", "#char7");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("oh");
  }
  if ($('#char2').hasClass('oh') && $('#char5').hasClass('oh') && $('#char8').hasClass('oh')) {
    colorSquares("#char2", "#char5", "#char8");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("oh");
  }
  if ($('#char3').hasClass('oh') && $('#char6').hasClass('oh') && $('#char9').hasClass('oh')) {
    colorSquares("#char3", "#char6", "#char9");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("oh");
  }
  if ($('#char1').hasClass('oh') && $('#char5').hasClass('oh') && $('#char9').hasClass('oh')) {
    colorSquares("#char1", "#char5", "#char9");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("oh");
  }
  if ($('#char3').hasClass('oh') && $('#char5').hasClass('oh') && $('#char7').hasClass('oh')) {
    colorSquares("#char3", "#char5", "#char7");
    setTimeout(decolorSquares, 1000);
    setTimeout(clearBoard, 1000);
    updateScore("oh");
  }
}

function xFirst() {
  if ($('#x_first').hasClass('yes')) {
    $('#x_first').removeClass('yes').addClass('no').text("Turn X-First On");
    localStorage.setItem(1, oh);
    localStorage.setItem(2, ex);
    localStorage.setItem(3, oh);
    localStorage.setItem(4, ex);
    localStorage.setItem(5, oh);
    localStorage.setItem(6, ex);
    localStorage.setItem(7, oh);
    localStorage.setItem(8, ex);
    localStorage.setItem(9, oh);
  } else {
    $('#x_first').removeClass('no').addClass('yes').text("Turn X-First Off");
    localStorage.setItem(1, ex);
    localStorage.setItem(2, oh);
    localStorage.setItem(3, ex);
    localStorage.setItem(4, oh);
    localStorage.setItem(5, ex);
    localStorage.setItem(6, oh);
    localStorage.setItem(7, ex);
    localStorage.setItem(8, oh);
    localStorage.setItem(9, ex);
  }
}

if (turn >= 5) {
  localStorage.setItem(1, ex);
  localStorage.setItem(2, oh);
  localStorage.setItem(3, ex);
  localStorage.setItem(4, oh);
  localStorage.setItem(5, ex);
  localStorage.setItem(6, oh);
  localStorage.setItem(7, ex);
  localStorage.setItem(8, oh);
  localStorage.setItem(9, ex);

  localStorage.setItem(10, 'ex');
  localStorage.setItem(11, 'oh');
  localStorage.setItem(12, 'ex');
  localStorage.setItem(13, 'oh');
  localStorage.setItem(14, 'ex');
  localStorage.setItem(15, 'oh');
  localStorage.setItem(16, 'ex');
  localStorage.setItem(17, 'oh');
  localStorage.setItem(18, 'ex');
} else {
  localStorage.setItem(1, oh);
  localStorage.setItem(2, ex);
  localStorage.setItem(3, oh);
  localStorage.setItem(4, ex);
  localStorage.setItem(5, oh);
  localStorage.setItem(6, ex);
  localStorage.setItem(7, oh);
  localStorage.setItem(8, ex);
  localStorage.setItem(9, oh);

  localStorage.setItem(10, 'oh');
  localStorage.setItem(11, 'ex');
  localStorage.setItem(12, 'oh');
  localStorage.setItem(13, 'ex');
  localStorage.setItem(14, 'oh');
  localStorage.setItem(15, 'ex');
  localStorage.setItem(16, 'oh');
  localStorage.setItem(17, 'ex');
  localStorage.setItem(18, 'oh');
}

$('#x_first').click(function() {
  xFirst();
});
$('#x_first_mobile').click(function() {
  xFirst();
});
$('#x_score').change(function() {
  xFirst();
});
$('#o_score').change(function() {
  xFirst();
});

$("#sq1").click(function() {
  if (!$('#char1').hasClass('black') || $('#char1').hasClass('busy')) {
    return false;
  } else {
    $('#char1').removeClass("black").addClass(localStorage[j]).attr("src", localStorage[i]);
    i+=1;
    j+=1;
  }
  console.log("clicked1");
  chkWin();
});
$("#sq2").click(function() {
  if (!$('#char2').hasClass('black') || $('#char1').hasClass('busy')) {
    return false;
  } else {
    $('#char2').removeClass("black").addClass(localStorage[j]).attr("src", localStorage[i]);
    i+=1;
    j+=1;
  }
  console.log("clicked2");
  chkWin();
});
$("#sq3").click(function() {
  if (!$('#char3').hasClass('black') || $('#char1').hasClass('busy')) {
    return false;
  } else {
    $('#char3').removeClass("black").addClass(localStorage[j]).attr("src", localStorage[i]);
    i+=1;
    j+=1;
  }
  console.log("clicked3");
  chkWin();
});

$("#sq4").click(function() {
  if (!$('#char4').hasClass('black') || $('#char1').hasClass('busy')) {
    return false;
  } else {
    $('#char4').removeClass("black").addClass(localStorage[j]).attr("src", localStorage[i]);
    i+=1;
    j+=1;
  }
  console.log("clicked4");
  chkWin();
});
$("#sq5").click(function() {
  if (!$('#char5').hasClass('black') || $('#char1').hasClass('busy')) {
    return false;
  } else {
    $('#char5').removeClass("black").addClass(localStorage[j]).attr("src", localStorage[i]);
    i+=1;
    j+=1;
  }
  console.log("clicked5");
  chkWin();
});
$("#sq6").click(function() {
  if (!$('#char6').hasClass('black') || $('#char1').hasClass('busy')) {
    return false;
  } else {
    $('#char6').removeClass("black").addClass(localStorage[j]).attr("src", localStorage[i]);
    i+=1;
    j+=1;
  }
  console.log("clicked6");
  chkWin();
});

$("#sq7").click(function() {
  if (!$('#char7').hasClass('black') || $('#char1').hasClass('busy')) {
    return false;
  } else {
    $('#char7').removeClass("black").addClass(localStorage[j]).attr("src", localStorage[i]);
    i+=1;
    j+=1;
  }
  console.log("clicked7");
  chkWin();
});
$("#sq8").click(function() {
  if (!$('#char8').hasClass('black') || $('#char1').hasClass('busy')) {
    return false;
  } else {
    $('#char8').removeClass("black").addClass(localStorage[j]).attr("src", localStorage[i]);
    i+=1;
    j+=1;
  }
  console.log("clicked8");
  chkWin();
});
$("#sq9").click(function() {
  if (!$('#char9').hasClass('black') || $('#char1').hasClass('busy')) {
    return false;
  } else {
    $('#char9').removeClass("black").addClass(localStorage[j]).attr("src", localStorage[i]);
    i+=1;
    j+=1;
  }
  console.log("clicked9");
  chkWin();
});

$('#refresh').click(function() {
    location.reload();
});

// $(document).click(function() {
//   console.log('doc was clicked');
//   if ($('#char1').hasClass('ex') && $('#char2').hasClass('ex') && $('#char3').hasClass('ex')) {
//     console.log("x wins");
//   }
// });

});
