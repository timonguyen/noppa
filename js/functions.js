const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById('dice').addEventListener('click', () => {
    const randomized_number = getRandomIntNumberInRange(1, 6);
    
    document.getElementById('kuva').setAttribute("src", "/kuvat/inverted-dice-" + randomized_number + ".png");
});


