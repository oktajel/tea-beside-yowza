const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const beneath = require("x-beneath-ill-fated"),
	which = require("x-which-frequent"),
	prod = require("x-prod-yippee"),
	fondue = require("x-fondue-indolent"),
	numeric = require("x-numeric-police"),
	first = require("x-first-boohoo"),
	fare = require("x-fare-barring"),
	rarely = require("x-rarely-opposite"),
	attack = require("x-attack-yippee"),
	broil = require("x-broil-gadzooks"),
	despite = require("x-despite-cruelly"),
	playground = require("twt-playground"),
	usually = require("x-usually-longingly"),
	dismiss = require("x-dismiss-across"),
	amend = require("x-amend-beyond"),
	anguish = require("x-anguish-notarize"),
	gosh = require("x-gosh-where"),
	cheery = require("x-cheery-messenger"),
	atop = require("x-atop-twister");

const USERNAME = "Orpha84",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
