function countdown_full(event, single = false)
{
	var target = event.target || event.srcElement;

	var time = $(target).data('countdown');

	// Set the date we're counting down to
	// Format: Y/m/d H:i:s
	var countDownDate = new Date(time).getTime();

	// Update the count down every 1 second
	var x = setInterval(function() {

	  	// Get todays date and time
	  	var now = new Date().getTime();

	  	// Find the distance between now an the count down date
	  	var distance = countDownDate - now;

	  	// Time calculations for days, hours, minutes and seconds
	  	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	  	// If the count down is finished, write some text 
	  	if (distance < 0) {
	  		clearInterval(x);
	  		var count = "HẾT HẠN";
	  		target.setAttribute("disabled", true);
	  		target.removeAttribute("href");
	  		if(single){
	  			location.reload();
	  		}
	  	}else{
	  		// Display the result in the element with class="countdown"
	  		if(single){
	  			if(days == 0 && hours == 0 && minutes == 0)
	  				count = seconds + " giây";
	  			else if(days == 0 && hours == 0)
	  				count = minutes + " phút " + seconds + " giây";
	  			else if(days == 0)
	  				count = hours + " giờ " + minutes + " phút " + seconds + " giây";
	  			else
	  				count = days + " ngày " + hours + " giờ " + minutes + " phút " + seconds + " giây";
	  		}else{
	  			if(days == 0 && hours == 0 && minutes == 0)
	  				count = seconds + " giây";
	  			else if(days == 0 && hours == 0)
	  				count = minutes + " phút " + seconds + " giây";
	  			else if(days == 0)
	  				count = hours + " giờ " + minutes + " phút " + seconds + " giây";
	  			else
	  				count = days + " ngày " + hours + " giờ " + minutes + " phút " + seconds + " giây";
	  		}
		}
		target.innerHTML = count;
	}, 1000);
}
function countdown(event, single = false)
{
	var target = event.target || event.srcElement;

	var time = $(target).data('countdown');

	// Set the date we're counting down to
	// Format: Y/m/d H:i:s
	var countDownDate = new Date(time).getTime();

	// Update the count down every 1 second
	var x = setInterval(function() {

	  	// Get todays date and time
	  	var now = new Date().getTime();

	  	// Find the distance between now an the count down date
	  	var distance = countDownDate - now;

	  	// Time calculations for days, hours, minutes and seconds
	  	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	  	// If the count down is finished, write some text 
	  	if (distance < 0) {
	  		clearInterval(x);
	  		var count = "HẾT HẠN";
	  		target.setAttribute("disabled", true);
	  		target.removeAttribute("href");
	  		if(single){
	  			location.reload();
	  		}
	  	}else{
	  		// Display the result in the element with class="countdown"
	  		if(days > 0)
	  			hours = hours + (days * 24);
	  		if(hours < 10)
	  			hours = '0' + hours;
	  		if(minutes < 10)
	  			minutes = '0' + minutes;
	  		if(seconds < 10)
	  			seconds = '0' + seconds;
  			count = hours + ":" + minutes + ":" + seconds;
		}
		target.innerHTML = count;
	}, 1000);
}
$(document).ready(function(){
	$(".countdown").trigger("load");
});