let screenWidth = window.innerWidth;
let pageHeight = window.innerHeight;

document.addEventListener("DOMContentLoaded", function () {
    Barba.Pjax.start();
    Barba.Prefetch.init();
    var FadeTransition = Barba.BaseTransition.extend({
        start: function () {
            $('.gp-body').addClass("eventsnone");
            $('.cursor').addClass("nodifferencetrans");
            $('.load-curcor').addClass('starttrans');
            Promise
                .all([this.newContainerLoading, this.fadeOut()])
                .then(this.fadeIn.bind(this));
        },
        fadeOut: function () {
            return $(this.oldContainer).animate({"opacity":"1"}, 1100).promise()
        },
        fadeIn: function () {
            var _this = this;
            _this.done();
            $(window).scrollTop(0); 
            clicksevents();
              Webflow.destroy();
            Webflow.ready(); 
            Webflow.require('ix2').init();
             $('.load-curcor').addClass('starttrans2');
             clock();
             setTimeout(function() {
 
            $('.gp-body').removeClass("eventsnone");
            $('.cursor').removeClass("nodifferencetrans");
            $('.load-curcor').removeClass('starttrans');
             $('.load-curcor').removeClass('starttrans2');
             $('.wrapper').animate({"opacity":"1"}, 500);
             $('.img-wrapper').addClass('visibleimg');
             $('.gp-h1-home').addClass('starth1');
             
             
             
}, 1000);
        }
    });
    Barba.Pjax.getTransition = function () {
        return FadeTransition;
    };
    Barba.Dispatcher.on('newPageReady', function (currentStatus, oldStatus, container, newPageRawHTML) {
        var response = newPageRawHTML.replace(/(<\/?)html( .+?)?>/gi, '$1nothtml$2>', newPageRawHTML)
        var bodyClasses = $(response).filter('nothtml').attr('data-wf-page')
        $('html').attr('data-wf-page', bodyClasses)
    });
});



function clock() {
var d = new Date();
var month_num = d.getMonth()
var day = d.getDate();
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();

month=new Array("January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December");

if (day <= 9) day = "0" + day;
if (hours <= 9) hours = "0" + hours;
if (minutes <= 9) minutes = "0" + minutes;
if (seconds <= 9) seconds = "0" + seconds;

date_time = hours + ":" + minutes + "</br>" + day + " " + month[month_num] + " " + d.getFullYear();
if (document.layers) {
 document.layers.doc_time.document.write(date_time);
 document.layers.doc_time.document.close();
}
else document.getElementById("doc_time").innerHTML = date_time;
document.getElementById("doc_time2").innerHTML = date_time;
 setTimeout("clock()", 60000);
}



function clicksevents() {
    
    

function dehover1() {
  $(this).removeClass('gp-portfolio-deactivate');
}

function dehover2() {
  $(this).removeClass('gp-portfolio-activate');
}

$('.gp-portfolio-item').hover( function () {
    $(this).addClass("gp-portfolio-activate");
  },
  function () {
       $(this).addClass("gp-portfolio-deactivate");
       setTimeout(dehover1, 300);
       setTimeout(dehover2, 300);
      
   
  }
 ); 
 
	  $( ".def" ).hover(function(){ 	
	   $('.cursor').addClass("difference");
	    }, function(){ 
	         $('.cursor').removeClass("difference");
	  });
	  
	   $( ".gp-h1-home" ).hover(function(){ 	
	   $('.cursor').addClass("nodifference");
	    }, function(){ 
	         $('.cursor').removeClass("nodifference");
	  });
	  
	  
	 
	  
}

  




jQuery(document).ready(function () {
    $(window).scrollTop(0);
 clicksevents();
 clock();
  setTimeout(function () {
       $(".anim-h").addClass('starth');
		    }, 8000);
  setTimeout(function () {
      $(window).scrollTop(0);
		    }, 8000);
		     setTimeout(function () {
           $(".gp-body").css({"overflow":"visible"});
		    }, 12000);
		    $('.gp-color-btn').click(function (){
          $(".bg-color").toggleClass('color1');
          $(".wrapper").toggleClass('colortxt');
          
           $(".minvert").toggleClass('glee');
           
           
    
});



 
});


