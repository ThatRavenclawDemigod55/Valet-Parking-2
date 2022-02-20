canvas = document.getElementById("myCanvas") ;
ctx = canvas.getContext("2d") ;

greencar_width = 75 ;
greencar_height = 100 ;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5 ;
greencar_y = 225 ;

function add() {
	background_imgTag = new Image() ;
	background_imgTag.onload = uploadBackground() ;
	background_imgTag.src = background_image ;

	greencar_imgTag = new Image() ;
	greencar_imgTag.onload = uploadgreencar() ;
	greencar_imgTag.src = greencar_image ;

}

function uploadBackground() {
	ctx.drawImage(background_imgTag , 0 , 0 , canvas.width , canvas. height) ;
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag , greencar_x , greencar_y , greencar_width , greencar_height) ;
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}

		if ((greencar_x == 425) && (greencar_y == 95)) {
			document.getElementById("Win").innerHTML= "You have PARKED THE CAR!!" ;
			document.getElementById("myCanvas").style.borderColor= "red" ;
		 }

		 if ((greencar_x == 705) && (greencar_y == 95)) {
			document.getElementById("Win").innerHTML= "You have PARKED THE CAR!!" ;
			document.getElementById("myCanvas").style.borderColor= "red" ;
		 }
		
		
}

function up()
{
	if (greencar_y >= 0) {
		greencar_y = greencar_y - 10 ;
		console.log("when up arrow key is pressed, X =" + greencar_x + " and Y =" + greencar_y) ;
		uploadBackground() ;
		uploadgreencar() ;
	}
}

function down()
{
	if (greencar_y <= 350) {
		greencar_y = greencar_y + 10 ;
		console.log("when down arrow key is pressed, X =" + greencar_x + " and Y =" + greencar_y) ;
		uploadBackground() ;
		uploadgreencar() ;
	}
}

function left()
{
	if (greencar_x >= 0) {
		greencar_x = greencar_x - 10 ;
		console.log("when left arrow key is pressed, X =" + greencar_x + " and Y =" + greencar_y) ;
		uploadBackground() ;
		uploadgreencar() ;
	}
}

function right()
{
	if (greencar_x <= 750) {
		greencar_x = greencar_x + 10 ;
		console.log("when right arrow key is pressed, X =" + greencar_x + " and Y =" + greencar_y) ;
		uploadBackground() ;
		uploadgreencar() ;
	}
}
