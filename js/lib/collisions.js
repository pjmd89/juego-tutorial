function collisions( c , ships , enemies ){

	this.c = c;

	this.ships = ships;

	this.enemies = enemies;

	this.c.attach( this.c.createUUID() , this.findCollisions , this );
}

collisions.prototype = {
	'c'						: null,
	'ships'					: null,
	'enemies'				: null,
	'totalEnemies'			: null,
	'totalEnemiesDestroyed' : null,
	'counter'				: 0,
	'findCollisions'		: function( el ){

		if( (el.enemies).length > el.totalEnemiesDestroyed ){

			for( var i in el.ships ){

				for( var j in el.ships[i].shipShoots ){

					var shoot = el.ships[i].shipShoots[j];

					for( var k in el.enemies ){

						var en = el.enemies[k].getPosition();
				
						var l1 = shoot.x , 
							r1 = shoot.x + shoot.w , 
							t1 = shoot.y , 
							b1 = shoot.y + shoot.h;

						var l2 = en.x , r2 = en.x + en.w , t2 = en.y , b2 = en.y + en.h;

						if(l1 < r2 && r1 > l2 && t1 < b2 && b1 > t2){

							shoot._destroy();

							el.enemies[k]._destroy();

							delete el.enemies[k];

							++el.totalEnemiesDestroyed;

							//(el.enemies).splice(el.enemies[k],1);
						}
					}
				}
			}
		}
		else{

			el.gameOver();
		}
	},
	'gameOver'				: function(){

		this.c.cc.save();

		this.c.cc.globalAlpha = this.counter / 50.0;

		this.c.cc.fillStyle = 'white';

		this.c.cc.font = "Bold 90px Arial";

		this.c.cc.fillText("GANASTE", 190, 290);

		this.c.cc.restore();

		this.counter++;
	}

}