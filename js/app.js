document.getElementById('getGoblins').addEventListener('click', function() {
    const goblins = [
        {
            amount: '1 Goblin',
            image: '/images/beegboi.gif',
            saying: 'A fine lad'
        },
        {
            amount: '2 goblin',
            image: '/images/2gerblin.png',
            saying: 'Hey there is 2 of them'
        },
        {
            amount: '3 goblin',
            image: '/images/3gerblin.png',
            saying: 'A trio of goblins'
        },
        {
            amount: '4 goblin',
            image: '/images/4gerblin.png',
            saying: 'A quartet of goblins'
        },
        {
            amount: '5 goblin',
            image: '/images/5gerblin.png',
            saying: 'A quintet of goblins'
        },
    ]
    const goblinAmount = goblins[Math.floor(Math.random() * goblins.length)]
    document.getElementById('goblinAmount').textContent = goblinAmount.amount
    const goblinImage = document.getElementById('goblinImage')
    goblinImage.src = goblinAmount.image
    console.log(goblinImage.src)
    goblinImage.style.display = 'block'
})