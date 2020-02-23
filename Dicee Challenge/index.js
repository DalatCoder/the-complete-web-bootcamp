(function() {
    // 1. Get random dice number
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    // 2. Render
    document.querySelector('.img1').setAttribute('src', `/images/dice${dice1}.png`);
    document.querySelector('.img2').setAttribute('src', `/images/dice${dice2}.png`);

    // 3. Render winner
    const titleEl = document.querySelector('.title');
    if (dice1 > dice2) return titleEl.textContent = '🚩 Player 1 won!';
    if (dice2 > dice1) return titleEl.textContent = 'Player 2 won! 🚩';
    return titleEl.textContent = '🚩 Draw! 🚩';
})();
