(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });
    
})(jQuery);
/*donation*/
var firstName = "";
		var lastName = "";
		var email = "";
		var dType = "";
		var receipt = "";
		var anon = "";
		var list = "";
		var amount = "";
		
		$('.set-amount').autoGrow(0);
		
		/*
			if(isiPad || jQuery.browser.mobile){
				$('#team').hide()
				$('.team-mobile').show();	
			}else{
				$('#team').show()
				$('.team-mobile').hide();
			}
		*/
		
		//Set & Highlight Donation Amount
		$(".button").click(function(){
			$(".button").removeClass("selected");
			$(this).addClass("selected");
			
			$(this).find("input").focus();
		});
		
		//Grow the donation box if they type more than 4 numbers
		$(".set-amount").keyup(function(){
			
			if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
		       this.value = this.value.replace(/[^0-9\.]/g, '');
		    }

		});
		
		
		$("input").on("change", function(){
			// $(".donation-box").css("height", "500px");
			
			firstName = $("#firstName").val();
			lastName = $("#lastName").val();
			email = $("#email").val();
			
			if ( $("#one-time").prop( "checked" ) ){
				dType = "One-Time";
			}
			if ( $("#monthly").prop( "checked" ) ){
				dType = "Monthly";
			}

		});
        /*chaT*/

        'use strict';

var chatInput    = document.querySelector('#chat_input');
var typing       = document.querySelector('#typing');
var send         = document.querySelector('#send');
var chatMessages = document.querySelector('#chat_messages');
var chatBoxBody  = document.querySelector('#chat_box_body');
var chatThread   = {};

// ----- EVENTS ----- //

chatInput.addEventListener('input', function() {
  this.style.height = '0';
  this.style.height = this.scrollHeight + 1 + 'px';
});

chatInput.addEventListener('keydown', function(evt) {
  if (evt.keyCode == 13 && !evt.shiftKey) {
    sendMessage('my', this);
    evt.preventDefault();
  }
});

send.addEventListener('click', function() {
  sendMessage('my', chatInput);
});

// ----- FUNCTIONS -----//

function renderProfile(p) {
  return '<div class="profile ' + p + '-profile hide"><img src="' + profile[p].pic + '" alt="' + profile[p].name + '" width="30" height="30" />&nbsp;<span>' + profile[p].name + '</span></div>';
}

function renderMessage(p, m) {
  return '<div class="message ' + p + '-message hide">' + m + '</div>';
}

function appendMessage(r) {
  chatMessages.insertAdjacentHTML('beforeend', r);

  var elms = document.querySelectorAll('.profile.hide, .message.hide');

  for (var i = 0; i < elms.length; i++) {
    if (elms[i].classList.contains('profile')) {
      elms[i].style.height = elms[i].scrollHeight + 'px';
    }
    else {
      elms[i].style.height = elms[i].scrollHeight - 20 + 'px';
    }
    
    elms[i].classList.remove('hide');
  }
  
  chatBoxBody.scrollTop = chatBoxBody.scrollHeight;
}

function sendMessage(p, elm) {
  var r = '';

  if (chatThread[chatThread.length - 1].profile !== p) {
    r += renderProfile(p);
  }

  if (typeof elm === 'string') {
    r += renderMessage(p, elm);
    
    chatThread.push({
      'profile': p,
      'message': elm
    });
  }
  else {
    r += renderMessage(p, elm.value);
    
    chatThread.push({
      'profile': p,
      'message': elm.value
    });

    elm.value = '';
  }
  
  appendMessage(r);
}

chatBoxBody.scrollTop = chatBoxBody.scrollHeight;

// ---------- Example ---------- //

profile = {
  'my': {
    'name': 'My profile',
    'pic': 'https://images.unsplash.com/photo-1534135954997-e58fbd6dbbfc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=02d536c38d9cfeb4f35f17fdfaa36619'
  },
  'other': {
    'name': 'Other profile',
    'pic': 'https://images.unsplash.com/photo-1537396123722-b93d0acd8848?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=efc6e85c24d3cfdd15cd36cb8a2471ed'
  }
};

chatThread = [{
  'profile': 'other',
  'message': 'Hello!'
},{
  'profile': 'my',
  'message': 'Hi!'
},{
  'profile': 'my',
  'message': 'How are you?'
}];

(function autoText() {
  setTimeout(function() {
    typing.classList.add('active');

    setTimeout(function() {
      var randomMessages = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'];
      
      sendMessage('other', randomMessages[Math.floor(Math.random() * 4)]);
      
      typing.classList.remove('active');
      
      autoText();
    }, 8000);
  }, 3000);
})();
/*courses*/
$(document).ready(function(){
	$(".wish-icon i").click(function(){
		$(this).toggleClass("fa-heart fa-heart-o");
	});
});	
/*modal*/
$('#myForm').on('submit', function(e){
  $('#myModal').modal('show');
  e.preventDefault();
});
/*testimonal*/
// $(document).ready(function(){
//   $("#testimonial-slider").owlCarousel({
//       items:2,
//       itemsDesktop:[1000,2],
//       itemsDesktopSmall:[979,2],
//       itemsTablet:[768,1],
//       pagination:true,
//       navigation:false,
//       autoplay:true
//   });
// });

//newsfeed
$(function () {
  var tickerLength = $('.carousel-inner-data ul li').length;
  var tickerHeight = $('.carousel-inner-data ul li').outerHeight();
  $('.carousel-inner-data ul li:last-child').prependTo('.carousel-inner-data ul');
  $('.carousel-inner-data ul').css('marginTop', -tickerHeight);

  function moveTop() {
      $('.carousel-inner-data ul').animate({
          top: -tickerHeight
      }, 600, function () {
          $('.carousel-inner-data ul li:first-child').appendTo('.carousel-inner-data ul');
          $('.carousel-inner-data ul').css('top', '');
      });

  }
  setInterval(function () {
      moveTop();
  }, 3000);
});
/*chatbot*/
jQuery(document).ready(function($) {
	jQuery(document).on('click', '.iconInner', function(e) {
		jQuery(this).parents('.botIcon').addClass('showBotSubject');
		$("[name='msg']").focus();
	});

	jQuery(document).on('click', '.closeBtn, .chat_close_icon', function(e) {
		jQuery(this).parents('.botIcon').removeClass('showBotSubject');
		jQuery(this).parents('.botIcon').removeClass('showMessenger');
	});

	jQuery(document).on('submit', '#botSubject', function(e) {
		e.preventDefault();

		jQuery(this).parents('.botIcon').removeClass('showBotSubject');
		jQuery(this).parents('.botIcon').addClass('showMessenger');
	});
	
	/* Chatboat Code */
	$(document).on("submit", "#messenger", function(e) {
		e.preventDefault();

		var val = $("[name=msg]").val().toLowerCase();
		var mainval = $("[name=msg]").val();
		name = '';
		nowtime = new Date();
		nowhoue = nowtime.getHours();

		function userMsg(msg) {
			$('.Messages_list').append('<div class="msg user"><span class="avtr"><figure style="background-image: url(https://mrseankumar25.github.io/Sandeep-Kumar-Frontend-Developer-UI-Specialist/images/avatar.png)"></figure></span><span class="responsText">' + mainval + '</span></div>');
		};
		function appendMsg(msg) {
			$('.Messages_list').append('<div class="msg"><span class="avtr"><figure style="background-image: url(https://mrseankumar25.github.io/Sandeep-Kumar-Frontend-Developer-UI-Specialist/images/avatar.png)"></figure></span><span class="responsText">' + msg + '</span></div>');
			$("[name='msg']").val("");
		};


		userMsg(mainval);
		if( val.indexOf("hello") > -1 || val.indexOf("hi") > -1 || val.indexOf("good morning") > -1 || val.indexOf("good afternoon") > -1 || val.indexOf("good evening") > -1 || val.indexOf("good night") > -1 ) {
			if(nowhoue >= 12 && nowhoue <= 16) {
				appendMsg('good afternoon');
			} else if(nowhoue >= 10 && nowhoue <= 12) {
				appendMsg('hi');
			} else if(nowhoue >= 0 && nowhoue <= 10) {
				appendMsg('good morning');
			} else {
				appendMsg('good evening');
			}

			appendMsg("what's you name?");

		} else if( val.indexOf("i have problem with") > -1) {
			if (val.indexOf("girlfriend") > -1 || val.indexOf("gf") > -1) {

				appendMsg("take out your girlfriend, for dinner or movie.");
				appendMsg("is it helpful? (yes/no)");

			} else if (val.indexOf("boyfriend") > -1 || val.indexOf("bf") > -1) {
				appendMsg("bye something for him.");
				appendMsg("is it helpful? (yes/no)");
			} else {
				appendMsg("sorry, i'm not able to get you point, please ask something else.");
			}
		} else if( val.indexOf("yes") > -1) {

			var nowtime = new Date();
			var nowhoue = nowtime.getHours();
			appendMsg("it's my pleaser that i can help you");

			saybye();
		} else if( val.indexOf("no") > -1) {

			var nowtime = new Date();
			var nowhoue = nowtime.getHours();
			appendMsg("it's my bad that i can't able to help you. please try letter");

			saybye();
		} else if( val.indexOf("my name is ") > -1 || val.indexOf("i am ") > -1 || val.indexOf("i'm ") > -1 || val.split(" ").length < 2 ) {/*|| mainval != ""*/
			// var name = "";
			if(val.indexOf("my name is") > -1) {
				name = val.replace("my name is", "");
			}

			else if(val.indexOf("i am") > -1) {
				name = val.replace("i am", "");
			}

			else if(val.indexOf("i'm") > -1) {
				name = val.replace("i'm", "");
			}

			else {
				name = mainval;
			}

			// appendMsg("hi " + name + ", how can i help you?");
			appendMsg("hi " + name + ", how can i help you?");
		} else {
			appendMsg("sorry i'm not able to understand what do you want to say");
		}

		function saybye() {
			if (nowhoue <= 10) {
				appendMsg(" have nice day! :)");
			} else if (nowhoue >= 11 || nowhoue <= 20) {
				appendMsg(" bye!");
			} else {
				appendMsg(" good night!");
			}
		}

		var lastMsg = $('.Messages_list').find('.msg').last().offset().top;
		$('.Messages').animate({scrollTop: lastMsg}, 'slow');
	});
	/* Chatboat Code */
})