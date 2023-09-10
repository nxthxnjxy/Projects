var currency = "";  

function vrobitCalculator() {

    let vrobit = parseInt(document.getElementById("vrobit").value);

    if (vrobit >= 100000) {

        let drobit = Math.floor(vrobit / 100000);
        vrobit %= 100000;

        let clickwick = Math.floor(vrobit / 50000);
        vrobit %= 50000;

        let gazoontight = Math.floor(vrobit / 10000);
        vrobit %= 10000;

        let frazoint = Math.floor(vrobit / 1000);
        vrobit %= 1000;

        let blointoint = Math.floor(vrobit / 500);
        vrobit %= 500

        currency += "you have " + drobit + " drobit(S)"
        currency += "\n"
        currency += "you have " + clickwick + " clickwick(s)"
        currency += "\n"
        currency += "you have " + gazoontight + " gazoontight(s)"
        currency += "\n"
        currency += "you have " + frazoint + " frazoint(s)"
        currency += "\n"
        currency += "you have " + blointoint + " blointoint(s)"
        currency += "\n"
        currency += "and " + vrobit + " vrobits remaining"

    } else if (vrobit >= 50000 && vrobit < 100000) {

        let clickwick = Math.floor(vrobit / 50000);
        vrobit %= 50000;

        let gazoontight = Math.floor(vrobit / 10000);
        vrobit %= 10000;

        let frazoint = Math.floor(vrobit / 1000);
        vrobit %= 1000;

        let blointoint = Math.floor(vrobit / 500);
        vrobit %= 500

        currency += "you have " + clickwick + " clickwick(s)"
        currency += "\n"
        currency += "you have " + gazoontight + " gazoontight(s)"
        currency += "\n"
        currency += "you have " + frazoint + " frazoint(s)"
        currency += "\n"
        currency += "you have " + blointoint + " blointoint(s)"
        currency += "\n"
        currency += "and " + vrobit + " vrobits remaining"

    } else if (vrobit >= 10000 && vrobit < 50000) {

        let gazoontight = Math.floor(vrobit / 10000);
        vrobit %= 10000;

        let frazoint = Math.floor(vrobit / 1000);
        vrobit %= 1000;

        let blointoint = Math.floor(vrobit / 500);
        vrobit %= 500

        currency += "you have " + gazoontight + " gazoontight(s)"
        currency += "\n"
        currency += "you have " + frazoint + " frazoint(s)"
        currency += "\n"
        currency += "you have " + blointoint + " blointoint(s)"
        currency += "\n"
        currency += "and " + vrobit + " vrobits remaining"

    } else if (vrobit >= 1000 && vrobit < 10000) {

        let frazoint = Math.floor(vrobit / 1000);
        vrobit %= 1000;

        let blointoint = Math.floor(vrobit / 500);
        vrobit %= 500

        currency += "you have " + frazoint + " frazoint(s)"
        currency += "\n"
        currency += "you have " + blointoint + " blointoint(s)"
        currency += "\n"
        currency += "and " + vrobit + " vrobits remaining"

    } else if (vrobit >= 500 && vrobit < 1000) {

        let blointoint = Math.floor(vrobit / 500);
        vrobit %= 500

        currency += "you have " + blointoint + " blointoint(s)"
        currency += "\n"
        currency += "and " + vrobit + " vrobits remaining"

    } else {
        currency += "you have insufficient vrobits or inputted a value other than an integer"
    }
    
    document.getElementById('currencyDisplay').innerHTML = currency

}