$(document).ready(function(){
	$("#search-tool").click(function(){
		$(".menu").fadeToggle("fast");
		$(".menu").toggleClass("menu-opened");
		$(".results").fadeToggle("fast");
		$(".results").toggleClass("results-closed");
		$("#search-tool").toggleClass("toggle-button-selected");
	});
});