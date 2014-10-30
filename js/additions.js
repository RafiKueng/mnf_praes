
$(document).ready(function() {

var oldStep = null;

$('#simple').jmpress({
  keyboard: {
    keys: {
      79: function() {// 'o' key for Overview
        if(!oldStep) {
          oldStep = $(this).jmpress("active");
          $(this).jmpress("select", "#overview");
        }
        else {
          $(this).jmpress("select", oldStep);
          oldStep = false;
        }
      },
      53: function(){
	$(this).jmpress("select", "#mscphd");
      },
      36: function(){
	$(this).jmpress("select", "#home");
      },
    }
  } 
});


//create underlines for the titles
var $bg = $("#bg");

$("h1").add("h2").each(function(){
  var $this = $(this);
  var $slide = $this.parent();
  
  var $line = $("<div class='tree'>");
  
  var padding = ($this.outerHeight(true) - $this.outerHeight() )/2;
  
  $line.css("left", 0+$slide.data("x")-$slide.outerWidth()/2);
  $line.css("top", 0+$slide.data("y")-$slide.outerHeight()/2+$this.outerHeight()+padding);    
  $line.css("width", $this.outerWidth());
  $line.css("height", 1);

  $bg.append($line);
});


/**
 * create the diagonals connection end of h1_underilne with start of h2_underline 
 */

//endpoint of h1
var $h1 = $("h1");
var $p = $h1.parent();
var h1x = 0+$p.data("x") - $p.outerWidth()/2  + $h1.outerWidth();
var h1y = 0+$p.data("y") - $p.outerHeight()/2 + ($h1.outerHeight(true) + $h1.outerHeight() )/2;


$('h2').each(function(){
  $h2 = $(this);
  $p = $h2.parent();
  
  //startpoints of h2
  var h2x = 0+$p.data("x") - $p.outerWidth()/2;
  //var h2y = 0+$p.data("y") - $p.outerHeight()/2 + ($h1.outerHeight(true) + $h1.outerHeight() )/2;
  var h2y = 0+$p.data("y")-$p.outerHeight()/2+$h2.outerHeight()+($h2.outerHeight(true) - $h2.outerHeight() )/2;   

  var dx = h2x - h1x;
  var dy = h2y - h1y;
  var l = Math.sqrt(dx*dx + dy*dy);
  var phi = Math.atan(dy/dx);
  
  var x = h1x + dx/2 - l/2;
  var y = h1y + dy/2;

  
  var $line = $("<div class='tree'>");
  $line.css("left", x);
  $line.css("top", y);    
  $line.css("width", l);
  $line.css("height", 1);
  $line.css('-webkit-transform', 'rotateZ('+phi+'rad)');
  $line.css('transform', 'rotateZ('+phi+'rad)');
  $bg.append($line);
});






// init
$('#modules u').each(function(){
  var $t = $(this);
  $t.data("width", $t.width());
  $t.css("width", 0);
});


$("#modules").click(function(){
  var duration = 2000;
  $('#modules u').each(function(){
    var $t = $(this);
    $t.animate({width: $t.data("width")}, duration, 'swing');
  });
  window.setTimeout( showDescr, duration );
  $("#modules").off('click');
});


function showDescr() {
  $(".descr")
    .css("display", "inline-block")
    .css("opacity", 0);
  
    
  $(".descr.phy").position({
    my: "center bottom",
    at: "center center",
    of: "#modules .phy.x",
    within: "#studies"
  });

  $(".descr.ast").position({
    my: "right top",
    at: "center bottom",
    of: "#modules .ast.x",
    within: "#studies1"
  })
  .css("-webkit-transform","rotate(-90deg)")
  .css("-webkit-transform-origin","100% 50%")
  .css("transform","rotate(-90deg)")
  .css("transform-origin","100% 50%");
;

  $(".descr.ele").position({
    my: "right top",
    at: "center bottom",
    of: "#modules .ele",
    within: "#studies1"
  })
  .css("-webkit-transform","rotate(-90deg)")
  .css("-webkit-transform-origin","100% 50%")
  .css("transform","rotate(-90deg)")
  .css("transform-origin","100% 50%");

  $(".descr.spi").position({
    my: "left bottom",
    at: "center top",
    of: "#modules .spi.x",
    within: "#studies1"
  })
  .css("-webkit-transform","rotate(-90deg)")
  .css("-webkit-transform-origin","0% 50%")
  .css("transform","rotate(-90deg)")
  .css("transform-origin","0% 50%");

  $(".descr.inf").position({
    my: "left bottom",
    at: "center top",
    of: "#modules .inf",
    within: "#studies1"
  })
  .css("-webkit-transform","rotate(-90deg)")
  .css("-webkit-transform-origin","0% 50%")
  .css("transform","rotate(-90deg)")
  .css("transform-origin","0% 50%");

  $(".descr.ini").position({
    my: "left bottom",
    at: "center top",
    of: "#modules .ini",
    within: "#studies1"
  })
  .css("-webkit-transform","rotate(-90deg)")
  .css("-webkit-transform-origin","0% 50%")
  .css("transform","rotate(-90deg)")
  .css("transform-origin","0% 50%");

  $(".descr.che").position({
    my: "left bottom",
    at: "center top",
    of: "#modules .che",
    within: "#studies1"
  })
  .css("-webkit-transform","rotate(-90deg)")
  .css("-webkit-transform-origin","0% 50%")
  .css("transform","rotate(-90deg)")
  .css("transform-origin","0% 50%");
  
  $(".descr.ba").position({
    my: "center top",
    at: "center center",
    of: "#modules .ba.x",
    within: "#studies1"
  });

  $(".descr.tea").position({
    my: "center bottom",
    at: "center center",
    of: "#modules .tea.x",
    within: "#studies1"
  })
  .css("-webkit-transform","rotate(-90deg)")
  .css("-webkit-transform-origin","50% 100%")
  .css("transform","rotate(-90deg)")
  .css("transform-origin","50% 100%");
  
  $(".descr.asi").position({
    my: "center bottom",
    at: "center center",
    of: "#modules .asi.x",
    within: "#studies1"
  })
  .css("-webkit-transform","rotate(-90deg)")
  .css("-webkit-transform-origin","50% 100%")
  .css("transform","rotate(-90deg)")
  .css("transform-origin","50% 100%");

  $(".descr.fpu").position({
    my: "center bottom",
    at: "center center",
    of: "#modules .fpu.x",
    within: "#studies1"
  })
  .css("-webkit-transform","rotate(-90deg)")
  .css("-webkit-transform-origin","50% 100%")
  .css("transform","rotate(-90deg)")
  .css("transform-origin","50% 100%");


  //$(".descr").css("-webkit-transform","rotate(0deg)");

  $(".descr").animate({opacity: 1}, 600, 'swing');

};



});

