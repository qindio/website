$(document).ready(function(){

	/* Show dropdown menu */

	function showMenu () {
		$(".dropdown-menu").fadeToggle(250);
	}


	/* Show Info services */

	function showInfo (e) {
   	e.stopPropagation();
   	e.preventDefault();
   	$(this).find(".services-info").fadeToggle(400);
   	$(this).find(".applyTeaser").toggleClass("transparency");
   }


  /* Ajax - show after submitting info */
  $("form").on("submit", function(event) {
  	event.stopPropagation();
  	event.preventDefault();
  	var form = $(this);

  	$.ajax(form.attr("action"), {
  		type: form.attr("method"),
  		data: form.serialize(),
  		success: function(response) {
  			form.find('.contact-form').find(".showMessage").fadeToggle(500);
  			
  			form.delay(3000).queue(function(){
					form.find(".contact-form").find(".showMessage").fadeToggle(400);
					form.dequeue();
				});
			
			document.getElementById("myForm").reset(); 

  		}
  	});
  });





  /* Show navigation menu - Header nav section */
  $(".dropdown-button").on("click", showMenu);
  $(".dropdown-menu").on("click", showMenu);

  /* Show services info - Services section */
  $(".teaser").on("mouseenter", showInfo);
  $(".teaser").on("mouseleave",showInfo);


});


