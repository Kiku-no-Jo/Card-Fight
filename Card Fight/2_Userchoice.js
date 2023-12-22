const menu = require("./1_Menu")
const rounds = require("./3_Play");
const rules = require("./4_Rules")
function userChoice() {
    const prompt = require("prompt-sync")();
    let choice = prompt("Veuillez saisir votre choix: ");
    if (choice == 1) {
        //fonction jouer;
        rounds.rounds();
    }
    else if (choice == 2) {
        rules.rules();
        menu.menu()
        userChoice()
    } else if (choice == 3) {
        console.log("Merci d'avoir jouer! A bientôt.");
        return 0
    } else {
        console.log("invalid commmand")
            return 0
    }
}

exports.userChoice = userChoice