



// prevent access to thnk u page if not subsribed
var url = $(location).attr('href');
var parts = url.split("/");
var last_part = parts[parts.length - 1];

if (last_part === 'thank-you.html' && ((localStorage.getItem('unlock') == null) || (localStorage.getItem('unlock') !== a(localStorage.getItem('user'))))) {
  window.location.replace('index.html');
}

// $.ajax({
//   type: "GET",
//   url: "https://www.stibits.io/httpRequests/test.php",
//   success: function (response) {
//       var res = response;
//       var ip = res.ip;
//       $('.se-pre-con').css("display","none");
//     if(ip == 'false'){
//       $('.accepted').css("display","none");
//       $('.unlock-input-button').css("display","block");
//       $('.unlock-input-button2').css("display","block");
//     }else{
//       $('.accepted').css("display","block");
//       $('.unlock-input-button').css("display","none");
//             $('.unlock-input-button2').css("display","none");
//
//     }
//   }
// });

$.ajax({
  type: "GET",
  url: "https://stibits.io/httpRequests/test.php",
  success: function (response) {
    var res = JSON.parse(response);
    var ip = res.ip;
    $('.se-pre-con').css("display","none");
    if(ip == false){
      $('.accepted').css("display","none");
      $('.unlock-input-button').css("display","block");
      $('.unlock-input-button2').css("display","block");
    }else{
      $('.accepted').css("display","block");
      $('.unlock-input-button').css("display","none");
      $('.unlock-input-button2').css("display","none");

    }
    var scrnwth = $(window).width();

    var count = res.count;
    $('.to-value-87').text(count);
    if(count == 0){
      $('head').append('<style>.rectangle::after{width:'+(0)+'px !important;}</style>');
      if(scrnwth < 992){
        $('head').append('<style>.rectangle::after{width:'+(0)+'px !important;}</style>');
      }
    }else{
      $('head').append('<style>.rectangle::after{width:'+(0.319*count)+'px !important;}</style>');
      if(scrnwth < 992){
        $('head').append('<style>.rectangle::after{width:'+(0.249*count)+'px !important;}</style>');

      }
    }

    $('.to-value-87').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 1800,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
  }
});


// Animate loader off screen
$('.background-container').addClass('animated pulse');
$('#phone-top').removeClass('hidden');
$('#phone-top').addClass('animated fadeInUp').promise().done(function () {
  setTimeout(function () {
    $('#phone-down').removeClass('hidden');
    $('#phone-down').css("animation", "0.4s ease-out 0s 1 slideInFromLeft");
    $('#transaction-top').removeClass('hidden');
    $('#transaction-top').addClass('animated zoomIn delay1');
    $('#badge-1').removeClass('hidden');
    $('#badge-1').addClass('animated bounceIn delay2');
    $('#badge-2').removeClass('hidden');
    $('#badge-2').addClass('animated bounceIn delay1');
    $('#badge-3').removeClass('hidden');
    $('#badge-3').addClass('animated bounceIn delay3');
  }, 700);
});

var y = window.scrollY;
if (y >= 1100) {
  $('.top-card').addClass('animated zoomIn ');
  $('.middle-card').addClass('animated zoomIn delay1-1');
  $('.bottom-card').addClass('animated zoomIn delay2-2');
  $('.lock-control').addClass('animated rotateIn delay3-3');
  $('.top-card').removeClass('hidden ');
  $('.middle-card').removeClass('hidden ');
  $('.bottom-card').removeClass('hidden ');
  $('.lock-control').removeClass('hidden ');


  if (y >= 1690)
    $('.tag4').addClass('tag4-newClass');

  if (y >= 1700) {
    $("#dude-key").addClass("animated zoomIn delay1-1");
    $("#shield-one").addClass("animated rotateIn delay2-2");
    setTimeout(function () {
      $("#small-key").removeClass("hidden");

    }, 1200);
    $("#small-key").addClass("animated  shake delay3-3");


    $("#dude-key").removeClass("hidden");
    $("#shield-one").removeClass("hidden");
  }

  if (y >= 2827) {
    $('.korean-absolute-position').addClass('animated bounceIn');
    $('.korean-absolute-position').removeClass('hidden');
  }

}

$(window).scroll(function () {
  y = window.scrollY;

  if (y >= 1100) {
    $('.top-card').addClass('animated zoomIn ');
    $('.middle-card').addClass('animated zoomIn delay1-1');
    $('.bottom-card').addClass('animated zoomIn delay2-2');
    $('.lock-control').addClass('animated rotateIn delay3-3');
    $('.top-card').removeClass('hidden ');
    $('.middle-card').removeClass('hidden ');
    $('.bottom-card').removeClass('hidden ');
    $('.lock-control').removeClass('hidden ');
  }

  if (y >= 1690)
    $('.tag4').addClass('tag4-newClass');

  if (y >= 1700) {
    $("#dude-key").addClass("animated zoomIn delay1-1");
    $("#shield-one").addClass("animated rotateIn delay2-2");
    setTimeout(function () {
      $("#small-key").removeClass("hidden");

    }, 1200);
    $("#small-key").addClass("animated shake delay3-3");


    $("#dude-key").removeClass("hidden");
    $("#shield-one").removeClass("hidden");
  }

  if (y >= 2827) {
    $('.korean-absolute-position').addClass('animated bounceIn');
    $('.korean-absolute-position').removeClass('hidden');

  }

});

// $.ajax({
//   type: "GET",
//   url: "https://www.stibits.io/httpRequests/counter.php",
//   success: function (response) {
//       var scrnwth = $(window).width();
//
//       var res = JSON.parse(response);
//       var count = res.count;
//       $('.to-value-87').text(count);
//       if(count == 0){
//           $('head').append('<style>.rectangle::after{width:'+(0)+'px !important;}</style>');
//           if(scrnwth < 992){
//               $('head').append('<style>.rectangle::after{width:'+(0)+'px !important;}</style>');
//           }
//       }else{
//           $('head').append('<style>.rectangle::after{width:'+(0.319*count)+'px !important;}</style>');
//           if(scrnwth < 992){
//               $('head').append('<style>.rectangle::after{width:'+(0.249*count)+'px !important;}</style>');
//
//           }
//       }
//
//       $('.to-value-87').each(function () {
//         $(this).prop('Counter', 0).animate({
//           Counter: $(this).text()
//         }, {
//           duration: 1800,
//           easing: 'swing',
//           step: function (now) {
//             $(this).text(Math.ceil(now));
//           }
//         });
//       });
//   }
// });






$(document).ready(function () {
  // delete 960 container and add fluid container if tablet mode is applied
  var screenWidth = $(window).width();
  var yOffest = $(window).scrollTop();


  if (screenWidth <= 998) {
    $('#first-section-container').removeClass('container');
    $('#first-section-container').addClass('container-fluid');

    $('#profiles-section').removeClass('container');
    $('#profiles-section').addClass('container-fluid');

    $('#parallax-section').removeClass('container');
    $('#parallax-section').addClass('container-fluid');
  }

  $('#open-close-navigation').on('click', function () {
    if ($('.navigation-open').hasClass('navigation-active')) {
      $('.navigation-open').removeClass('navigation-active');
    }
    else {
      $('.navigation-open').addClass('navigation-active');
    }
    $('.navigation-open').click(function () {
      $('.navigation-open').removeClass('navigation-active');
    })


  }
  );

  $(window).resize(function () {
    screenWidth = $(this).width();
    if ($(this).width() < 998) {
      $('#first-section-container').removeClass('container');
      $('#first-section-container').addClass('container-fluid');

      $('#profiles-section').removeClass('container');
      $('#profiles-section').addClass('container-fluid');

      $('#parallax-section').removeClass('container');
      $('#parallax-section').addClass('container-fluid');



    } else {
      $('#first-section-container').addClass('container');
      $('#first-section-container').removeClass('container-fluid');

      $('#profiles-section').addClass('container');
      $('#profiles-section').removeClass('container-fluid');

      $('#parallax-section').addClass('container');
      $('#parallax-section').removeClass('container-fluid');

    }
  });


  // sticky nav-bar

  $(window).scroll(function () {
    yOffest = $(window).scrollTop();
    if (yOffest > 0) {
      $('#navbarid').removeClass('navbar');
      $('#navbarid').addClass('navbar-sticky');
    } else {
      $('#navbarid').removeClass('navbar-sticky');
      $('#navbarid').addClass('navbar');
    }

    if (yOffest > 300) {
      $('.top').css("visibility", "visible");
    } else {
      $('.top').css("visibility", "hidden");

    }

  });




});


$(document).ready(function () {

  scrollToClosestUnlockBadge();

  $('.to-shake').click(function () {
    var x = document.forms["myFormSecond"]["email-sub-second"].value;
    if (x == "")
      $(".to-shake").effect("shake");
  });

  $('.to-shake2 > input').click(function () {
    var x = document.forms["myForm"]["email-sub"].value;
    if (x == "") {
      $(".to-shake2").effect("shake");
    }
  });

});
// fecth articles from medium

fetchMediumArticles();
function fetchMediumArticles() {
  var html = '';
  var html2 = '';
  fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@Roshii')
    .then((res) => res.json())
    .then((data) => {
      // Fillter the array
      const res = data.items //This is an array with the content. No feed, no info about author etc..
      res.forEach(element => {
        html2 = '';
        html2 += element.content;
        var div = document.createElement("div");
        div.innerHTML = html2;
        var text = div.textContent || div.innerText || "";

        html += '<div class="row">' +
          '<div class="col-lg-10 offset-lg-1">' +
          '<div class="article-container">' +
          '<div class="thumbnail-container" style="background-image: url(\'' + element.thumbnail + '\');"></div>' +
          '<div class="article-description">' +
          '<div class="author">' +
          '<p>Author: ' + element.author + '</p>' +
          '</div>' +
          '<h3 class="article-title">' + element.title + '</h3>' +
          '<p class="article-content">' + getWords(text) + '</p>' +
          '<a href="' + element.guid + '" target="_blank"><div class="read-more">Read More</div></a>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>';
      });
      $('#to-display-articles').append(html);
    });
}

function getWords(str) {
  return str.split(/\s+/).slice(0, 26).join(" ") + "...";
}

/**
 *  Scroll to the closest unlock badge form
 *
 */

function scrollToClosestUnlockBadge() {
  var yOffestUnlock = 0;
  $(window).scroll(function () {
    yOffestUnlock = $(window).scrollTop();
    $('#unlock-scroll').click(function () {
      if (yOffestUnlock < 1900) {
        document.getElementById('to-scroll-unlock').scrollIntoView();
      } else {
        document.getElementById('special-member').scrollIntoView();
      }
    });
  });
}


/**
 *  MailChimp subscription
 *
 */

var letTime;
function a(b) { function c(a, b) { return a >>> b | a << 32 - b } for (var d, e, f = Math.pow, g = f(2, 32), h = "length", i = "", j = [], k = 8 * b[h], l = a.h = a.h || [], m = a.k = a.k || [], n = m[h], o = {}, p = 2; 64 > n; p++)if (!o[p]) { for (d = 0; 313 > d; d += p)o[d] = p; l[n] = f(p, .5) * g | 0, m[n++] = f(p, 1 / 3) * g | 0 } for (b += "\x80"; b[h] % 64 - 56;)b += "\x00"; for (d = 0; d < b[h]; d++) { if (e = b.charCodeAt(d), e >> 8) return; j[d >> 2] |= e << (3 - d) % 4 * 8 } for (j[j[h]] = k / g | 0, j[j[h]] = k, e = 0; e < j[h];) { var q = j.slice(e, e += 16), r = l; for (l = l.slice(0, 8), d = 0; 64 > d; d++) { var s = q[d - 15], t = q[d - 2], u = l[0], v = l[4], w = l[7] + (c(v, 6) ^ c(v, 11) ^ c(v, 25)) + (v & l[5] ^ ~v & l[6]) + m[d] + (q[d] = 16 > d ? q[d] : q[d - 16] + (c(s, 7) ^ c(s, 18) ^ s >>> 3) + q[d - 7] + (c(t, 17) ^ c(t, 19) ^ t >>> 10) | 0), x = (c(u, 2) ^ c(u, 13) ^ c(u, 22)) + (u & l[1] ^ u & l[2] ^ l[1] & l[2]); l = [w + x | 0].concat(l), l[4] = l[4] + w | 0 } for (d = 0; 8 > d; d++)l[d] = l[d] + r[d] | 0 } for (d = 0; 8 > d; d++)for (e = 3; e + 1; e--) { var y = l[d] >> 8 * e & 255; i += (16 > y ? 0 : "") + y.toString(16) } return i };


function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function subscribe(e) {
  e.preventDefault();
  var email;
  var x = document.forms["myForm"]["email-sub"].value;
  if (x == "") {
    alert("Email must be filled out");
  } else {
    if (validateEmail(x) == false) {
      alert("Email must be valid");
    } else {
      email = x;
      $.ajax({
        type: "GET",
        dataType: 'jsonp',
        data: { EMAIL: encodeURI(email) },
        jsonp: 'c',
        url: 'https://stibits.us20.list-manage.com/subscribe/post-json?u=9b8ae2c192ba5f583b6475189&amp;id=9c641ada6c',
        cache: false,
        success: function (data) {
          if (data.result == 'success') {

            setTimeout(afterColor, 1000);
            function afterColor() {
              window.location.replace('thank-you.html');
            }
          } else {
            alert(data.msg);
          }
        },
        error: function (err) {
          alert("Could not connect to the registration server. Please try again later.");
        },
      });
    }
  }
}

function subscribeSecond(e) {
  e.preventDefault();
  var email;
  var x = document.forms["myFormSecond"]["email-sub-second"].value;
  if (x == "") {
    alert("Email must be filled out");
  } else {
    if (validateEmail(x) == false) {
      alert("Email must be valid");
    } else {
      email = x;
      $.ajax({
        type: "GET",
        dataType: 'jsonp',
        data: { EMAIL: encodeURI(email) },
        jsonp: 'c',
        url: 'https://stibits.us20.list-manage.com/subscribe/post-json?u=9b8ae2c192ba5f583b6475189&amp;id=9c641ada6c',
        cache: false,
        success: function (data) {
          if (data.result == 'success') {
            setTimeout(afterColor, 1000);
            function afterColor() {
              window.location.replace('thank-you.html');
            }
          } else {
            alert(data.msg);
          }
        },
        error: function (err) {
          alert("Could not connect to the registration server. Please try again later.");
        },
      });

    }
  }
}

