$(document).ready ->
	$("#search-tool").click ->
		$(".menu").fadeToggle "fast"
		$(".menu").toggleClass "menu-opened"
		$(".results").fadeToggle "fast"
		$(".results").toggleClass "results-closed"
		$("#search-tool").toggleClass "toggle-button-selected"
	