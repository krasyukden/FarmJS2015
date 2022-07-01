"use strict";

// наследник - Harvester

class Harvester extends Technopark{
	constructor (name, modes){
	super (name, modes);
	this._levelGrainBin = 0;
}

get levelGrainBin() {
	return this._levelGrainBin;
}
set levelGrainBin(value) {
	if (typeof value === "number" && value >= 0 && value <= 30)
		this._levelGrainBin = value;

	if (this._levelGrainBin === 30) { 
		this.off();
	}
}
on() {
	if (this._levelGrainBin < 30) {
		this._status = true;
	} 
}
}






