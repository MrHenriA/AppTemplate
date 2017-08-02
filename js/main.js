$(document).ready(function() {
  $("section#screenshots a").on("click", function() {
    $("div#modal img").attr("src", $(this).attr("data-image-url"));
  });

  var nav = $(".navbar-fixed-top"); //the variable is holding The position of the nav bar

  var distance = $(".navbar-fixed-top").offset();

  if (distance.top >= 300) {
    if (scroll >= 300) {
      nav.addClass("effect");
    } else {
      nav.removeClass("effect");
    }
  }

  $(window).scroll(function() {
    // when you are scrolling
    var scroll = $(window).scrollTop(); // it will grab the position of your scroll

    if (scroll >= 300) {
      nav.addClass("effect");
    } else {
      nav.removeClass("effect");
    }
  });

  $("#about .blue-circle").waypoint(
    function() {
      $("#about .blue-circle").addClass("animated fadeInUp");
    },
    {
      offset: "50%"
    }
  );

  $("#features .blue-circle").waypoint(
    function() {
      $(this.element).addClass("animated fadeInUp");
    },
    {
      offset: "85%"
    }
  );

  $(".features-image img").waypoint(
    function() {
      $(".features-image img").addClass("animated rubberBand");
    },
    -{
      offset: "2%"
    }
  );

  $("#screenshots .col-xs-4").waypoint(
    function() {
      $(this.element).addClass("animated zoomIn");
      $(this.element).css({
        opacity: 1
      });
    },
    {
      offset: "65%"
    }
  );

  $("#download div.phone img").waypoint(
    function() {
      $(this.element).addClass("animated fadeInRight");
    },
    {
      offset: "65%"
    }
  );

  $("#download .platforms > div").waypoint(
    function() {
      $(this.element).addClass("animated fadeInUp");
    },
    {
      offset: "65%"
    }
  );

  $("#supportForm").bootstrapValidator({
    message: "That´s no valid!",
    feedbackIcons: {
      valid: "glyphicon glyphicon-ok",
      invalid: "glyphicon glyphicon-remove",
      validating: "glyphicon glyphicon-refresh"
    },
    fields: {
      name: {
        validators: {
          notEmpty: {
            message: "This field is mandatory and cannot be empty"
          }
        }
      },
      email: {
        validators: {
          notEmpty: {
            message: "This field is mandatory and cannot be empty"
          },
          emailAddress: {
            message: "That doesn´t look like an e-mail address"
          }
        }
      },
      messageField: {
        validators: {
          notEmpty: {
            message: "The Message Cannot be empty!"
          }
        }
      }
    }
  });

  smoothScroll.init({
    speed: 800,
    easing: "easeInOutQuad",
    updateURL: false,
    offset: 0
  });
});
