var my_time;
		var count = 0;
		setTimeout('pageScroll()', 0);
		function pageScroll() {
      // If condition to set repeat 
			if (count < 5) {
				var objDiv = document.getElementById("data");
				objDiv.scrollTop = objDiv.scrollTop + 1;
				if (objDiv.scrollTop == (objDiv.scrollHeight - 350)) {
          setTimeout(function() {
						objDiv.scrollTop = 0;
						count++;
            }, 1200);
				}
        //set scrolling time start
				my_time = setTimeout('pageScroll()', 15);
        //set scrolling time end
			}
         
		}




