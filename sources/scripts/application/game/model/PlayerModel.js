/*jshint undef:false */
var PlayerModel = Class.extend({
	init: function (){
		this.velocity = 4;
		this.fireFreq = 10;


		this.life = 20;
		this.level = 2;
		this.magicPower = 20;
		this.spellPower = 2;
        this.battlePower = 2;
		this.defense = 20;
		this.critialChance = 0.0;
		this.speedStatus = 'normal';
		this.vigor = 100;
        this.vigor2 = this.vigor*2;
        if(this.vigor >= 128){
            this.vigor2 = 255;
        }
		this.attack = this.battlePower + this.vigor2;
        this.speed = 10;
		this.xp = 0;
	},
	updateLevel: function(){
		// console.log((this.level*this.level+this.level+3)/4, 'compare');

		if(this.xp > (this.level*this.level+this.level+3)/4* 100){
			this.level ++;
		}
		console.log(this.level,'<- level, xp ->',this.xp);
	},
	updateXp: function(xp){
		console.log('xp', xp);
		this.xp += xp;
		this.updateLevel();
	},
	getDemage: function(type){
		var damageMultiplier = Math.random() < this.critialChance ? 0.5 : 2;
		var demage = 0;
		if(type === 'physical'){
			demage = this.battlePower + ((this.level * this.level * this.attack) / 256) * 3 / 2;
		}else if(type === 'magical'){
			demage = this.spellPower * 4 + (this.level * this.magicPower * this.spellPower / 32);
		}

		demage = demage + ((demage / 2) * damageMultiplier);

		return demage;
	},
	getHurt: function(demage){
		demage = (demage * (255 - this.defense) / 256) + 1;
		return demage;
	},
	getSpeed: function(type){
		if(type === 'normal'){
			currentSpeed = (96 * (this.speed + 20)) / 16;//normal
		}else if(type === 'haste'){
			currentSpeed = (126 * (this.speed + 20)) / 16;//haste
		}else if(type === 'slow'){
			currentSpeed = (48 * (this.speed + 20)) / 16; //slow
		}
		return currentSpeed;
	}
});