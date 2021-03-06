'use strict';

/**
 * Powerup super class
 *
 * @constructor
 */
function PowerUp() {

	Character.call(this);

	this.visible = true;
	this.randomization = {};
	this.size = {
		x: 80,
		y: 130
	};
}

PowerUp.prototype = Object.create(Character.prototype);
PowerUp.prototype.constructor= PowerUp;

/**
 * Randomize position and make the powerup visible
 */
PowerUp.prototype.init = function() {

	this.randomizePos(this.randomization);

	this.visible = true;
};

/**
 * Toggle powerup visibility
 */
PowerUp.prototype.toggle = function() {
	this.visible = !this.visible;
};

/**
 * Randomizes power up position
 * 
 * @param  {Object} limits  The limits for randomization
 * @param  {Object} offset  Offset that random value
 */
PowerUp.prototype.randomizePos = function(limits, offset) {

	this.pos.x = this.getRandomNum(limits.xMin || 0, limits.xMax || 0) + ((offset) ? offset.x : 0);
	this.pos.y = this.getRandomNum(limits.yMin || 0, limits.yMax || 0) + ((offset) ? offset.y : 0);
};




/**
 * Adds life to the player
 *
 * @constructor
 */
function HealthPowerUp() {

	PowerUp.call(this, null);

	this.setSprite('images/Heart.png');

	// Randomization limits
	this.randomization = {
		xMin: 0,
		xMax: 5,
		yMin: 0,
		yMax: 3
	};

	// Scale it down to half the size
	this.size.x = this.size.x / 1.2;
	this.size.y = this.size.y / 1.2;
}

HealthPowerUp.prototype = Object.create(PowerUp.prototype);
HealthPowerUp.prototype.constructor= HealthPowerUp;

/**
 * Activation action - Increase health by 1
 */
HealthPowerUp.prototype.activate = function() {
	player.addHealth(1);
};


HealthPowerUp.prototype.randomizePos = function(limits) {

	// super call
	PowerUp.prototype.randomizePos.call(this, limits, {
		x: 17,
		y: 50
	});
};




/**
 * Increases the points scored
 *
 * @constructor
 */
function StarPowerUp() {

	PowerUp.call(this, null);

	this.setSprite('images/Star.png');

	// Randomization limits
	this.randomization = {
		xMin: 0,
		xMax: 5,
		yMin: 0,
		yMax: 0
	};
}

StarPowerUp.prototype = Object.create(PowerUp.prototype);
StarPowerUp.prototype.constructor= StarPowerUp;

/**
 * Activation action - Increase the score of the player by 1
 */
StarPowerUp.prototype.activate = function() {
	myGame.score += 1;
};


StarPowerUp.prototype.randomizePos = function(limits) {

	// super call
	PowerUp.prototype.randomizePos.call(this, limits, {
		x: 10,
		y: 20
	});
};