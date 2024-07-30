document.getElementById('getGoblins').addEventListener('click', function() {
    const items = ['1 Goblin', '2 Goblins', '3 Goblins', '4 Goblins', '5 Goblins']
    const goblinAmount = items[Math.floor(Math.random() * items.length)]
    document.getElementById('goblinAmount').textContent = goblinAmount
})