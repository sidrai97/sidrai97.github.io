$(document).ready(function(){
	$('#splash').modal('show');
});
$('#go-to-top').click(function(){
	$('html,body').animate({ scrollTop: 0 }, 'slow');
	return false; 
});