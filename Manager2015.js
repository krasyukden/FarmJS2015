"use strict";

class Manager {
	constructor(name){
	this._name = name;
	this._farm = null;
}
get name() {
	return this._name;
}
get farm() {
	return this._farm;
}
set farm(farm) {
	this._farm = farm;
}
getInfoByFarm() {
	  const arrayOfTechnoparkName = this._farm.allTechnopark.map( (value) => {
		  
		return value.name;
		});
		console.log(arrayOfTechnoparkName);//
		const stringOfTechnoparkName = arrayOfTechnoparkName.toString();
	return stringOfTechnoparkName;
}
}


/*Manager.prototype.getInfoByFarm = function () {//ok
	var arr = [];
	this._farm.getAllTechnopark().forEach(function (value) {

		arr.push(value.getName());
	});
	var str = arr.toString();
	return str;
}*/



