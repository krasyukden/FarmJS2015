"use strict";

class Farm {
	constructor(name) {
		this._name = name;
		this._technopark = [];
	}
	get name() {
		return this._name;
	}
	set name(name) {
		this._name = name;
	}
	
	getTechnoparkByName(name) {
		let techno = null;
		this._technopark.forEach((value) => {
			if (name == value.name) {
				techno = value;
			}
		})
		return techno;
	}
	
	get allTechnopark() {
		return this._technopark;
	}
	addTechnopark(technopark) {
		this._technopark.push(technopark);
	}
	
	deleteTechnoparkByName(name) { 

		this._technopark = this._technopark.filter((value) => name != value.name)
	}

	
	onTechnoparkByName(name) {
		if (this.getTechnoparkByName(name)) {
			this.getTechnoparkByName(name).on();
		}
	}

	asyncOnTechnoparkByName(name, delay, callback) {// ok
		setTimeout(	 
			() => {
				let error;
				if (this.getTechnoparkByName(name)) {
					this.getTechnoparkByName(name).on();
				} else {
					error = new Error("Name does not exist")
				}
				callback(error)
			}, delay)
	}

	
	asyncOnTechnoparkByName(name, delay) { // ok
		return new Promise((resolve, reject) => {
			setTimeout(
				() => {
					if (this.getTechnoparkByName(name)) {
						this.getTechnoparkByName(name).on();
						resolve();
					} else {
						reject(new Error ("Name does not exist"))
					}
				}, delay)

		})
	}
}













/*
		async onTechnoparkByNameAsync(name, delay) {// не ok
			await new Promise((resolve, reject) => {
				setTimeout(
					() => {
						if (this.getTechnoparkByName(name)) {
							resolve(this.getTechnoparkByName(name).on());
							
						} else {
							reject(new Error ("Name does not exist"))
						}
					}, delay)
	
			})
		}
	*/









