$(document).ready(function(){

	/* Show dropdown menu */

	function showMenu (e) {
    e.stopPropagation();
		$(".dropdown-menu").fadeToggle(200);
    /*$(".dropdown-menu").toggleClass("hidden");*/
	}


	/* Show Info services */

	function showInfo (e) {
   	e.stopPropagation();
   	e.preventDefault();

    if ($(this).find(".services-info").length) {
      $(this).find(".services-info").fadeToggle(400);
      $(this).find(".applyTeaser").toggleClass("transparency");
      $(this).find("h3").toggleClass("transparency");
    }
    else if ($(this).find(".approach-info").length) {
      $(this).find(".approach-info").fadeToggle(400);
      $(this).find(".applyTeaser").toggleClass("transparency");
      $(this).find("h3").toggleClass("transparency");
    }
  }
  
  /* Ajax - show after submitting info */
  $("form").on("submit", submitForm);

  function submitForm(event) {
  	event.stopPropagation();
  	event.preventDefault();
  	var form = $(this);
    var data = form.serialize();

    form.find("input[type='text']").val("");
    form.find("input[type='email']").val("");
    form.find("textarea").val("");

    form.find(".showMessage").fadeToggle(500);
    form.delay(3000).queue(function(){
      form.find(".showMessage").fadeToggle(5000);
      form.dequeue();
    });

  	$.ajax(form.attr("action"), {
  		type: form.attr("method"),
  		data: data,
  		success: function(response) {
  		}
  	});
  }

  /* Show navigation menu - Header nav section */
  $(".dropdown-button").on("click", showMenu);
  $(".dropdown-menu").on("click", showMenu);

  /* Show services info - Services section */
/*  $(".teaser").on("mouseenter", showInfo);
  $(".teaser").on("mouseleave",showInfo);*/
  $(".teaser").on("click", showInfo);
  $(".teaser-approach").on("click", showInfo);


});


