const prompt = require("prompt-sync")();

function askUsrName() {
    let userName = prompt("Veuillez saisir votre pseudo: ");
    return userName
}

let inventory2 = ["Fire", "Water", "Plant"]
function botChoice(inventory2) {
    let random = Math.floor(Math.random() * 3)
    return inventory2[random]
}

function myChoice() {
    console.log("\n >>>>>>>>>>Attack list<<<<<<<<<<");
    console.log("   Fire   Water   Plant");
    console.log("P.S: sensible à la casse donc veuillez tapez la forme respective de l'attaque");
    let attack = prompt("Que voulez-vous envoyer? : ")
    return attack
}


function battle(userAttack, botAttack, victories) {
    if ((userAttack == "Fire" && botAttack == "Plant") ||
        (userAttack == "Water" && botAttack == "Fire") ||
        (userAttack == "Plant" && botAttack == "Water")) {
        victories.user++;
        console.log("You win!");
        console.log("Le score de l'utilisateur est: " + victories.user);
        console.log("Le score de l'AI est:  " + victories.bot);
    }
    else if (userAttack === botAttack) {
        console.log("Draw!");
        console.log("Le score de l'utilisateur est: " + victories.user);
        console.log("Le score de l'AI est:  " + victories.bot);
    }
    else if ((userAttack == "Plant" && botAttack == "Fire") ||
        (userAttack == "Fire" && botAttack == "Water") ||
        (userAttack == "Water" && botAttack == "Plant")) {
        victories.bot++;
        console.log("You lose!");
        console.log("Le score de l'utilisateur est: " + victories.user);
        console.log("Le score de l'AI est:  " + victories.bot);
    }
    else {
        console.log("Commande invalide veuillez entre une commande correct");
        return 0
    }
    return victories
}






function rounds() {
    let victories = { user: 0, bot: 0 }
    let nameUser = askUsrName();
    for (let round = 1; round <= 3; round++) {
        let userAttack = myChoice();
        let botAttack = botChoice(inventory2);
        console.log("AI attack is " + botAttack)
        battle(userAttack, botAttack, victories);
    }
    console.log("\n >>>>>>FINAL RESULT!<<<<<<");
    if (victories.user > victories.bot) {
        console.log(nameUser + " Wins!");
    }
    else if (victories.user === victories.bot) {
        let retry = prompt("Egalités! Voulez vous rejouer (oui/non): ")
        if (retry == "oui") {
            rounds()
        }
        else if (retry == "non") {
            console.log("Merci d'avoir joué! A très bientôt")
            return 0
        }
    }
    else if (victories.user < victories.bot) {
        console.log("Victoire de l'IA \n Better luck next time ");
        return 0
    }
}

exports.rounds = rounds