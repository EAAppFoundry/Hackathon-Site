/*
* Skeleton V1.1
* Copyright 2011, Dave Gamache
* www.getskeleton.com
* Free to use under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 8/17/2011
*/


$(document).ready(function() {

	/* Tabs Activiation
	================================================== */

	var tabs = $('ul.tabs');

	tabs.each(function(i) {

		//Get all tabs
		var tab = $(this).find('> li > a');
		tab.click(function(e) {

			//Get Location of tab's content
			var contentLocation = $(this).attr('href');

			//Let go if not a hashed one
			if(contentLocation.charAt(0)=="/") {
				e.preventDefault();
				window.location.href = $(this).attr('href');
			}
		});
	});
	
	tabs.each(function(i) {
		var tab = $(this).find('> li > a');
		var url = document.location.href;
		var route = url.slice(url.lastIndexOf('/')+1);
		if(route === '') route = 'home';

		for(var i=0;i<tab.length;i++){
			
			var tabText = $(tab[i]).text().toLowerCase();

			if(tabText === route) {
				$(tab[i]).addClass('active');
			}
			else{
				$(tab[i]).removeClass('active');
			}
		}
	});

});