"use strict";

var sun = new Farm("Sun");
console.log(sun.name);
sun.name = "Cow"
console.log(sun.name);
sun.addTechnopark(new Harvester("JohnDeere1", ["grain Harvesting1", "corn Harvesting1", "potato Harvester1"]));
sun.addTechnopark(new Harvester("JohnDeere2", ["grain Harvesting2", "corn Harvesting2", "potato Harvester2"]));
sun.addTechnopark(new Harvester("JohnDeere3", ["grain Harvesting3", "corn Harvesting3", "potato Harvester3"]));
console.log(sun.getTechnoparkByName("JohnDeere2"));
console.log(sun.allTechnopark);
sun.deleteTechnoparkByName("JohnDeere3");//ok
console.log(sun.allTechnopark);

sun.asyncOnTechnoparkByName("JohnDeere1", 1000, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(sun.getTechnoparkByName("JohnDeere1").status);
        sun.asyncOnTechnoparkByName("JohnDeere2", 1000, (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log(sun.getTechnoparkByName("JohnDeere2").status);
                sun.asyncOnTechnoparkByName("JohnDeere3", 2000, (error) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log(sun.getTechnoparkByName("JohnDeere3").status);
                    }
                })
            }
        })
    }
})


/*
sun.asyncOnTechnoparkByName("JohnDeere1", 1000)// ok
    .then(() => {
        console.log(sun.getTechnoparkByName("JohnDeere1").status);
        return sun.asyncOnTechnoparkByName("JohnDeere2", 1000)
    })
    .then(() => {
        console.log(sun.getTechnoparkByName("JohnDeere2").status);
        return sun.asyncOnTechnoparkByName("JohnDeere3", 1000)
    })
    .then(() => {
        console.log(sun.getTechnoparkByName("JohnDeere3").status);

    })
    .catch((error) => {
        console.log(error);
    })
*/

(async () => {
    try {
        await sun.asyncOnTechnoparkByName("JohnDeere1", 1000);
        console.log(sun.getTechnoparkByName("JohnDeere1").status);
        await sun.asyncOnTechnoparkByName("JohnDeere2", 1000);
        console.log(sun.getTechnoparkByName("JohnDeere2").status);
        await sun.asyncOnTechnoparkByName("JohnDeere3", 1000);
        console.log(sun.getTechnoparkByName("JohnDeere3").status);
    } catch (error) {
        console.log(error);
    }
})()

    


sun.onTechnoparkByName("JohnDeere2");
console.log(sun.getTechnoparkByName("JohnDeere2").status)


var sam = new Manager("Sam");
console.log(sam.name);
console.log(sam.farm);
//sam.setFarm(new Farm("F2").addTechnopark(new Harvester("JohnDeere3", ["grain Harvesting3", "corn Harvesting3", "potato Harvester3"])));
sam.farm = new Farm("F2")
sam.farm.addTechnopark(new Harvester("JohnDeere3", ["grain Harvesting3", "corn Harvesting3", "potato Harvester3"]));
sam.farm.addTechnopark(new Harvester("JohnDeere4", ["grain Harvesting4", "corn Harvesting4", "potato Harvester4"]));
console.log(sam.farm);

console.log(sam.getInfoByFarm());



var johnDeere = new Harvester("JohnDeere", ["grain Harvesting", "corn Harvesting", "potato Harvester"]);
//var johnDeere =  Harvester("JohnDeere", "grain Harvesting", "corn Harvesting", "potato Harvester");

console.log(johnDeere.status);
johnDeere.on();
console.log(johnDeere.status);
console.log(johnDeere.name);
console.log(johnDeere.modes);
johnDeere.nextMode();
console.log(johnDeere.mode);
johnDeere.previousMode();
console.log(johnDeere.mode);
johnDeere.mode = "potato Harvester";
console.log(johnDeere.mode);
console.log(johnDeere.currentMode);

console.log(johnDeere.levelGrainBin);
johnDeere.levelGrainBin = 25;
console.log(johnDeere.levelGrainBin);
johnDeere.off();
console.log(johnDeere.status);
johnDeere.on();
console.log(johnDeere.status);
johnDeere.levelGrainBin = 35;
console.log(johnDeere.levelGrainBin);
johnDeere.levelGrainBin = 30;
console.log(johnDeere.status);
johnDeere.on();
console.log(johnDeere.status);
johnDeere.levelGrainBin = 20;
johnDeere.on();
console.log(johnDeere.status);