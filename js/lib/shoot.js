function shoot( c , x , y , w , h , meUUID , ship , direction ){

	this.c = c;

	this.meUUID = meUUID;

	this.ship = ship;

	this.direction = direction;

	if( direction ) this.speed *= -1;

	this.x = ( ( w / 2 ) + x ) - ( this.w / 2 ) ;

	this.y = y;

	this.UUID = this.c.createUUID();

	this.c.attach( this.UUID , this.draw , this );
}

shoot.prototype = {
	'c'				: null,
	'direction'		: null,
	'speed'			: 7,
	'w'				: 5,
	'h'				: 20,
	'x'				: null,
	'y'				: null,
	'UUID'			: null,
	'meUUID'		: null,
	'ship'			: null,
	'damage'		: 1,
	'color'			: 'white',
	'position'		: function(){

		this.y += this.speed;
	},
	'isVisible'		: function (){

		if(this.y < 0 || this.y > this.c.height ) this._destroy();
	},
	'draw'			: function( el ){

		el.c.cc.save();
		
		el.findColission( el , el.ship.enemies );

		el.position();

		el.c.cc.fillStyle = el.color ;

		el.c.cc.fillRect( el.x ,el.y , el.w , el.h );

		el.c.cc.restore();

		el.isVisible();

	},
	'findColission' : function( el, enemies ){

		for(var i in enemies){

			var en = enemies[i].getPosition();
			
			var l1 = el.x , r1 = el.x + el.w , t1 = el.y , b1 = el.y + el.h;

			var l2 = en.x , r2 = en.x + en.w , t2 = en.y , b2 = en.y + en.h;

			if(l1 < r2 && r1 > l2 && t1 < b2 && b1 > t2){

				el._destroy();

				enemies[i]._destroy();

				delete enemies[i];
			}

		}
	},
	'getPosition'	: function(){

		return {'x':this.x,'y':this.y,'w':this.w,'h':this.h};
	},
	'_destroy'		: function (){

		this.c.unattach( this.UUID );

		this.ship.shootDestroy( this.meUUID );
	}
}