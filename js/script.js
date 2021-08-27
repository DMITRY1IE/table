const button = document.getElementById('button');
const start = document.getElementById('start');
const in_progress = document.getElementById('in_progress');


button.addEventListener('click', function () {
    start.classList.toggle('none')
    in_progress.classList.toggle('none')

    function start_1() {
        let p = document.createElement('p')
        document.getElementById('console').appendChild(p).innerHTML = '--- PROGRESS START ---'

    } start_1()

    var i = 0
    function tick() {
        if (++i === 16) clearInterval(t)
        const cell = document.getElementById('cell-' + i)
        cell.classList.toggle('rotate')
        let p = document.createElement('p')
        document.getElementById('console').appendChild(p).innerHTML = 'Cell ' + i + ' Animation START'
    }
    var t = setInterval(tick, 1000)
    tick()

    var r = 0
    function tick_2() {
        if (++r === 16) clearInterval(t_2)
        const cell = document.getElementById('cell-' + r)
        let p_2 = document.createElement('p')
        document.getElementById('console').appendChild(p_2).innerHTML = 'Cell ' + r + ' Animation END'
    }
    var t_2 = setInterval(tick_2, 1000)
    tick_2()

    setTimeout(() => {
        function end_1() {
            let p = document.createElement('p')
            document.getElementById('console').appendChild(p).innerHTML = '--- PROGRESS END ---'
            start.classList.toggle('none')
            in_progress.classList.toggle('none')
            alert('succes')
            document.getElementById('console').innerHTML = ''
            const cell = document.getElementById('cell-' + i)
            cell.classList.remove('rotate')
        } end_1()
    }, 16000);

})





