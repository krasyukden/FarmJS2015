"use strict";

class Technopark{
	constructor(name, modes){
	if (typeof name === "string" && name.length >= 2) {
		this._name = name;
	} else {
		this._name = "Harvester";
	}
	if (/*modes instanceof Array*/ Array.isArray(modes)) {
		this._modes = modes;
	} else {
		throw new Error("Error array")
	}
	this._currentMode = 0;
	this._status = false;

}
get name() {
	return this._name;
}
on() {
	this._status = true;
}
off() {
	this._status = false;
}
get status() {
	return this._status;
}
nextMode() {
	if (this._currentMode < this._modes.length - 1) {
		this._currentMode++;
	}
}
previousMode() {
	if (this._currentMode > 0) {
		this._currentMode--;
	}
}
get modes() {
	return this._modes;
}
get mode() {
	return this._modes[this._currentMode];
}
get currentMode() {
        return this._currentMode;
    }
set mode (value) {
	if (this._modes.indexOf(value) >= 0) {
		this._currentMode = this._modes.indexOf(value);
	}

}


}

