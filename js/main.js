$(function() {

var ex = "images/ex.png";
var oh = "images/oh.png";
var turn = Math.floor(Math.random() * 10);
var i = 1;
var j = 9 + 1;

var sq1_x = $('#char1').hasClass('ex'), sq2_x = $('#char2').hasClass('ex'), sq3_x = $('#char3').hasClass('ex')
    sq4_x = $('#char4').hasClass('ex'), sq5_x = $('#char5').hasClass('ex'), sq6_x = $('#char6').hasClass('ex')
    sq7_x = $('#char7').hasClass('ex'), sq8_x = $('#char8').hasClass('ex'), sq9_x = $('#char9').hasClass('ex');

var sq1_o = $('#char1').hasClass('oh'), sq2_o = $('#char2').hasClass('oh'), sq3_o = $('#char3').hasClass('oh')
    sq4_o = $('#char4').hasClass('oh'), sq5_o = $('#char5').hasClass('oh'), sq6_o = $('#char6').hasClass('oh')
    sq7_o = $('#char7').hasClass('oh'), sq8_o = $('#char8').hasClass('oh'), sq9_o = $('#char9').hasClass('oh');

function chkWin() {
  console.log("inside chkwin");
  if (sq1_x && sq2_x && sq3_x === true) {
    console.log("x wins");
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

$('#play_first').click(function() {
  if ($('#play_first').hasClass('yes')) {
    $('#play_first').removeClass('yes').addClass('no').text("Turn Play-First On");
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
    $('#play_first').removeClass('no').addClass('yes').text("Turn Play-First Off");
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
});

$("#sq1").click(function() {
  if ($('#char1').hasClass('black')) {
    $('#char1').removeClass("black").addClass(localStorage[j]).attr("src", localStorage[i]);
    i+=1;
    j+=1;
  } else {
    return false;
  }
  console.log("clicked1");
});
$("#sq2").click(function() {
  if ($('#char2').hasClass('black')) {
    $('#char2').removeClass("black").addClass(localStorage[j]).attr("src", localStorage[i]);
    i+=1;
    j+=1;
  } else {
    return false;
  }
  console.log("clicked2");
});
$("#sq3").click(function() {
  if ($('#char3').hasClass('black')) {
    $('#char3').removeClass("black").addClass(localStorage[j]).attr("src", localStorage[i]);
    i+=1;
    j+=1;
  } else {
    return false;
  }
  console.log("clicked3");
});

$("#sq4").click(function() {
  if ($('#char4').hasClass('black')) {
    $('#char4').removeClass("black").addClass(localStorage[j]).attr("src", localStorage[i]);
    i+=1;
    j+=1;
  } else {
    return false;
  }
  console.log("clicked4");
});
$("#sq5").click(function() {
  if ($('#char5').hasClass('black')) {
    $('#char5').removeClass("black").addClass(localStorage[j]).attr("src", localStorage[i]);
    i+=1;
    j+=1;
  } else {
    return false;
  }
  console.log("clicked5");
});
$("#sq6").click(function() {
  if ($('#char6').hasClass('black')) {
    $('#char6').removeClass("black").addClass(localStorage[j]).attr("src", localStorage[i]);
    i+=1;
    j+=1;
  } else {
    return false;
  }
  console.log("clicked6");
  chkWin();
});

$("#sq7").click(function() {
  if ($('#char7').hasClass('black')) {
    $('#char7').removeClass("black").addClass(localStorage[j]).attr("src", localStorage[i]);
    i+=1;
    j+=1;
  } else {
    return false;
  }
  console.log("clicked7");
});
$("#sq8").click(function() {
  if ($('#char8').hasClass('black')) {
    $('#char8').removeClass("black").addClass(localStorage[j]).attr("src", localStorage[i]);
    i+=1;
    j+=1;
  } else {
    return false;
  }
  console.log("clicked8");
});
$("#sq9").click(function() {
  if ($('#char9').hasClass('black')) {
    $('#char9').removeClass("black").addClass(localStorage[j]).attr("src", localStorage[i]);
    i+=1;
    j+=1;
  } else {
    return false;
  }
  console.log("clicked9");
});


$(document).click(function() {
  if (sq1_x && sq2_x && sq3_x) {
    console.log("x wins");
  }
});



});
