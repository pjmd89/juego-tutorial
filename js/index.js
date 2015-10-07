window.addEventListener( 'load' , init );

function init(){

	var enemies = [];

	var canvas = new createCanvas( 'juego' );

	var bg = new background( canvas );

	for(var i = 0 ; i < 10 ; i++ ){

		enemies.push( new enemy( canvas ,  i * 50 ) );
	}

	var ship1 = new ship( canvas , enemies );
}