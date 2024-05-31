import {randomSuperhero} from "superheroes";
import generateName from "sillyname";

var superHeroName = randomSuperhero();
var sillyname = generateName();

console.log("I am " + superHeroName + "! But my real name is " + sillyname);