$(function(){
	var elem_parallax = document.getElementsByClassName("parallax")[0];
	var elem_header = document.getElementsByTagName("header")[0];
	var elem_header_a = elem_header.getElementsByTagName("a");
	var coef = 2;
	var borderColor = "rgba(50,50,50,";
	var coefMinBorder = 0.15; 
	elem_parallax.onscroll=function(){

		var scrollTop = elem_parallax.scrollTop;
		
		
		

		if(scrollTop > 0 && scrollTop <= 100*coef){	
			// bg
			var coefAlpha = (1- ( (scrollTop)/(100*coef) ));
			elem_header.style.backgroundColor = "rgba(0,0,0,"+coefAlpha+")";

			// color text
			var color = parseInt( (1- ( (scrollTop)/(100*coef) )) * 255 );
			var rgb_color = "rgb("+color+","+color+","+color+")";
			elem_header.style.color = rgb_color;
			for(var i=0; i<elem_header_a.length; i++){
				elem_header_a[i].style.color = rgb_color;
				if(i != 0 && coefAlpha > coefMinBorder){// pas pour le title et que pour un coef grand ! on ne veux pas qu'il disparaisse
					elem_header_a[i].style.borderColor = borderColor+coefAlpha+")";
				}
			}
			console.log(rgb_color);
		}else if(scrollTop > 100*coef){
			elem_header.style.backgroundColor = "rgba(0,0,0,0)";
			elem_header.style.color = "rgb(0,0,0)";
			for(var i=0; i<elem_header_a.length; i++){
				elem_header_a[i].style.color = "rgb(0,0,0)";
				if(i != 0){// pas pour le title 
					elem_header_a[i].style.borderColor = borderColor+coefMinBorder+")";
				}
			}
		}else{
			elem_header.style.backgroundColor = "rgba(0,0,0,1)";
			elem_header.style.color = "rgb(255,255,255)";
			for(var i=0; i<elem_header_a.length; i++){
				elem_header_a[i].style.color = "rgb(255,255,255)";
				if(i != 0){// pas pour le title 
					elem_header_a[i].style.borderColor = borderColor+"1)";
				}
			}
		}

	};
});