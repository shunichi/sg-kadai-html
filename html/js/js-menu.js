$(document).ready(function(){
	$("#search-tool").click(function(){
		$("#menu").fadeToggle("fast");
		$("#results").fadeToggle("fast");
		$("#search-tool").toggleClass("toggle-button-selected")
	});
});
