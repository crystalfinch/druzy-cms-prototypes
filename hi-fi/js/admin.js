$(document).ready(function() {

	// Menu Toggle
	$('.toggle.button').on('click', function() {
		$('body').toggleClass('menu-open');
	});

	// Semantic UI inits
	$('.menu .item').tab();
	$('.signup-buttons.buttons .button').tab();
	$('.ui.checkbox').checkbox();
	$('.ui.selection.dropdown').dropdown();
	$('.special.cards .image').dimmer({
		on: 'hover'
	});

});
