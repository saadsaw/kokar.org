/*
 * TODO: Write Documentation
*/
$( document ).ready(function() {
	// Check Whether The 'display' Property Of The <span>'s Is 'none' Or Not
	// In Order For The Following Code Not To Work On Desktops
	
	if ( $( ".contact-bar__info span" ).css( "display" ) == "none" ) {
		// When The User Taps The Envelope Icon Show Kokar's E-Mail Address
		$( ".info__email img" ).click(function() {
			$( ".info__email span" ).slideToggle( "slow" );
			
		});
		// When The User Taps The Phone Icon Show Kokar's Phone Number
		$( ".info__phone img").click(function() {
			$( ".info__phone span" ).slideToggle( "slow" );
		});
	}
	
	// Hamburger Menu Slide Down On Button Click On Mobile Screens
	$( "#hamburger-btn" ).click(function() {
		if ( $( ".site-header__navigation" ).first().is( ":hidden" ) ) {
			$( ".site-header__navigation" ).slideDown( "slow" );
			$( "#hamburger-btn" ).attr( "src", "assets/images/icons/hamburger_open.svg" );
		} else {
			$( ".site-header__navigation" ).hide();
			$( "#hamburger-btn" ).attr( "src", "assets/images/icons/hamburger_closed.svg" );
		}
	});

	// Donate Button Action
	$( ".donate-btn-action" ).click(function() {
		$( ".modal" ).fadeIn();
	});

	// The 'X' Button On The Modal
	$( ".close" ).click(function() {
		$( ".modal" ).fadeOut();
	});

	// Language Button Action
	$( "#language-btn" ).click(function() {
		console.log("Language Button Clicked");
	});

	// Open the events.html page and bring all events of the chosen SDG in the sdgs.html page
	var $carousel = $('.carousel').flickity();
	$carousel.on( 'select.flickity', function(event, index) {
		$.get('../events.html', function(html) {
			var events = $('<section />', {html: html}).find('.sdg' + (index + 1));
			var numberOfEvents = events.length;
			if (numberOfEvents == 0) {
				$('.no-event').show();
			} else {
				$('.no-event').hide();
				// This means the selected card has events under it.
				// I am supposed to go to the events.html page and get all section elements which have a class of .sdg + (index + 1) -> sdg1 to sdg17 based on what is selected
			}
		});
	});
});