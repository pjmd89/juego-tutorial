window.addEventListener( 'load' , init );

function init(){

	var ships = [];

	var enemies = [];

	var canvas = new createCanvas( 'juego' );

	var bg = new background( canvas , bgloaded );

	function bgloaded(){

		for(var i = 0 ; i < 10 ; i++ ){

			enemies.push( new enemy( canvas ,  i * 50 ) );
		}

		ships.push( new ship( canvas , enemies ) );

		var impact = new collisions( canvas , ships , enemies );
	}
}