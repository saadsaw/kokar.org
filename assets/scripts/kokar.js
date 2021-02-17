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

	// Welcome To Kokar Text Slide Up
	setTimeout(function() {
		$( ".contact-bar__msg" ).slideUp();
	}, 5000); // After 5 Seconds
	
	// Hamburger Menu Slide Down On Button Click On Mobile Screens
	$( "#hamburger-btn" ).click(function() {
		if ( $( ".site-header__navigation" ).first().is( ":hidden" ) ) {
			$( ".site-header__navigation" ).slideToggle( "slow" );
			$( "#hamburger-btn" ).attr( "src", "assets/images/icons/hamburger_open.svg" );
		} else {
			$( ".site-header__navigation" ).slideToggle( "slow" );
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
			// Get The Number Of Events The Current SDG Has
			var numberOfEvents = events.length;
			// Print The Event Count At Its Appropriate Place
			$( ".event-count-span" ).text(numberOfEvents);
			// Check Which SDG Is Selected To Display Its Information
			var SDGName = "";
			var SDGDesc = "";
			switch ((index + 1)) {
				case 1:
					SDGName = "No Poverty";
					SDGDesc = "End poverty in all its forms everywhere.";
					break;
				case 2:
					SDGName = "Zero Hunger";
					SDGDesc = "End hunger, achieve food security and improved nutrition and promote sustainable agriculture.";
					break;
				case 3:
					SDGName = "Good Health and Well-Being";
					SDGDesc = "Ensure healthy lives and promote well-being for all at all ages.";
					break;
				case 4:
					SDGName = "Quality Education";
					SDGDesc = "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.";
					break;
				case 5:
					SDGName = "Gender Equality";
					SDGDesc = "Achieve gender equality and empower all women and girls.";
					break;
				case 6:
					SDGName = "Clean Water and Sanitation";
					SDGDesc = "Ensure availability and sustainable management of water and sanitation for all.";
					break;
				case 7:
					SDGName = "Affordable and Clean Energy";
					SDGDesc = "Ensure access to affordable, reliable, sustainable and modern energy for all.";
					break;
				case 8:
					SDGName = "Decent Work and Economic Growth";
					SDGDesc = "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.";
					break;
				case 9:
					SDGName = "Industry, Innovation and Infrustructure";
					SDGDesc = "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.";
					break;
				case 10:
					SDGName = "Reduced Inequalities";
					SDGDesc = "Reduce inequality within and among countries.";
					break;
				case 11:
					SDGName = "Sustainable Cities and Communities";
					SDGDesc = "Make cities and human settlements inclusive, safe, resilient and sustainable.";
					break;
				case 12:
					SDGName = "Responsible Consumption and Production";
					SDGDesc = "Ensure sustainable consumption and production patterns.";
					break;
				case 13:
					SDGName = "Climate Action";
					SDGDesc = "Take urgent action to combat climate change and its impacts.";
					break;
				case 14:
					SDGName = "Life Below Water";
					SDGDesc = "Conserve and sustainably use the oceans, seas and marine resources for sustainable development.";
					break;
				case 15:
					SDGName = "Life on Land";
					SDGDesc = "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.";
				case 16:
					SDGName = "Peace, Justice and Strong Institutions";
					SDGDesc = "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.";
					break;
				case 17:
					SDGName = "Partnerships for the Goals";
					SDGDesc = "Strengthen the means of implementation and revitalize the global partnership for sustainable development.";					
					break;
			}
			$( ".info_a h2" ).text((index + 1) + " " + SDGName);
			$( ".info_a p" ).text(SDGDesc);

			if (numberOfEvents == 0) {
				$('.no-event').show();
				$('.sdg-events').hide();
				$('.sdg-events').empty();
			} else {
				$('.no-event').hide();

				$('.sdg-events').append(events[0]);
				$('.sdg-events').show();
				console.log(events[0]);
			}
		});
	});
});