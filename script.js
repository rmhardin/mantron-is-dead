var fortuneArray = [
    "Perhaps he truly is dead. May he rest in peace.",
    "The stars may one day align and harken his return.",
    "Have faith, my child. Good things come to those who wait.",
    "Only the gods know. May they smile upon us.",
    "We are the arbiters of our own fates. Perhaps you may be the arbiter of his as well.",
    "What is dead may never die.",
    "Do you believe in life after love?"
];



function fortuneFunction () {
    var yourFortune = fortuneArray[
        Math.floor(Math.random() * fortuneArray.length)
    ];
    document.getElementById("cookie").innerText = yourFortune;
}