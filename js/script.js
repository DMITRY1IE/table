const button = document.getElementById('button');
const start = document.getElementById('start');
const in_progress = document.getElementById('in_progress');

const cell_1 = document.getElementById('cell-1')
const cell_2 = document.getElementById('cell-2')
const cell_3 = document.getElementById('cell-3')
const cell_4 = document.getElementById('cell-4')
const cell_5 = document.getElementById('cell-5')
const cell_6 = document.getElementById('cell-6')
const cell_7 = document.getElementById('cell-7')
const cell_8 = document.getElementById('cell-8')
const cell_9 = document.getElementById('cell-9')
const cell_10 = document.getElementById('cell-10')
const cell_11 = document.getElementById('cell-11')
const cell_12 = document.getElementById('cell-12')
const cell_13 = document.getElementById('cell-13')
const cell_14 = document.getElementById('cell-14')
const cell_15 = document.getElementById('cell-15')
const cell_16 = document.getElementById('cell-16')


button.addEventListener('click', function () {
    start.classList.toggle('none')
    in_progress.classList.toggle('none')
    // -------------------------
    let p = document.createElement('p')
    // p.classList.toggle('p_0')
    // let p_0 = document.querySelectorAll('p_0')
    document.getElementById('console').appendChild(p).innerHTML = '--- PROGRESS START ---'
    // -------------------------
    setTimeout(function () {
        let p = document.createElement('p')
        cell_1.classList.toggle('rotate')
        document.getElementById('console').appendChild(p).innerHTML = 'Cell 1 Animation START'
        setTimeout(function () {
            document.getElementById('console').appendChild(p).innerHTML = 'Cell 1 Animation END'
        }, 1000)
    }, 0)
    setTimeout(function () {
        let p = document.createElement('p')
        cell_2.classList.toggle('rotate')
        document.getElementById('console').appendChild(p).innerHTML = 'Cell 2 Animation START'
        setTimeout(function () {
            document.getElementById('console').appendChild(p).innerHTML = 'Cell 2 Animation END'
        }, 1000)
    }, 500)
    setTimeout(function () {
        cell_3.classList.toggle('rotate')
        let p = document.createElement('p')
        document.getElementById('console').appendChild(p).innerHTML = 'Cell 3 Animation START'
        setTimeout(function () {
            document.getElementById('console').appendChild(p).innerHTML = 'Cell 3 Animation END'
        }, 1000)
    }, 1000)
    setTimeout(function () {
        cell_4.classList.toggle('rotate')
        let p = document.createElement('p')
        document.getElementById('console').appendChild(p).innerHTML = 'Cell 4 Animation START'
        setTimeout(function () {
            document.getElementById('console').appendChild(p).innerHTML = 'Cell 4 Animation END'
        }, 1000)
    }, 1500)
    setTimeout(function () {
        cell_5.classList.toggle('rotate')
        let p = document.createElement('p')
        document.getElementById('console').appendChild(p).innerHTML = 'Cell 5 Animation START'
        setTimeout(function () {
            document.getElementById('console').appendChild(p).innerHTML = 'Cell 5 Animation END'
        }, 1000)
    }, 2000)
    setTimeout(function () {
        cell_6.classList.toggle('rotate')
        let p = document.createElement('p')
        document.getElementById('console').appendChild(p).innerHTML = 'Cell 6 Animation START'
        setTimeout(function () {
            document.getElementById('console').appendChild(p).innerHTML = 'Cell 6 Animation END'
        }, 1000)
    }, 2500)
    setTimeout(function () {
        cell_7.classList.toggle('rotate')
        let p = document.createElement('p')
        document.getElementById('console').appendChild(p).innerHTML = 'Cell 7 Animation START'
        setTimeout(function () {
            document.getElementById('console').appendChild(p).innerHTML = 'Cell 7 Animation END'
        }, 1000)
    }, 3000)
    setTimeout(function () {
        cell_8.classList.toggle('rotate')
        let p = document.createElement('p')
        document.getElementById('console').appendChild(p).innerHTML = 'Cell 8 Animation START'
        setTimeout(function () {
            document.getElementById('console').appendChild(p).innerHTML = 'Cell 8 Animation END'
        }, 1000)
    }, 3500)
    setTimeout(function () {
        cell_9.classList.toggle('rotate')
        let p = document.createElement('p')
        document.getElementById('console').appendChild(p).innerHTML = 'Cell 9 Animation START'
        setTimeout(function () {
            document.getElementById('console').appendChild(p).innerHTML = 'Cell 9 Animation END'
        }, 1000)
    }, 4000)
    setTimeout(function () {
        cell_10.classList.toggle('rotate')
        let p = document.createElement('p')
        document.getElementById('console').appendChild(p).innerHTML = 'Cell 10 Animation START'
        setTimeout(function () {
            document.getElementById('console').appendChild(p).innerHTML = 'Cell 10 Animation END'
        }, 1000)
    }, 4500)
    setTimeout(function () {
        cell_11.classList.toggle('rotate')
        let p = document.createElement('p')
        document.getElementById('console').appendChild(p).innerHTML = 'Cell 11 Animation START'
        setTimeout(function () {
            document.getElementById('console').appendChild(p).innerHTML = 'Cell 11 Animation END'
        }, 1000)
    }, 5000)
    setTimeout(function () {
        cell_12.classList.toggle('rotate')
        let p = document.createElement('p')
        document.getElementById('console').appendChild(p).innerHTML = 'Cell 12 Animation START'
        setTimeout(function () {
            document.getElementById('console').appendChild(p).innerHTML = 'Cell 12 Animation END'
        }, 1000)
    }, 5500)
    setTimeout(function () {
        cell_13.classList.toggle('rotate')
        let p = document.createElement('p')
        document.getElementById('console').appendChild(p).innerHTML = 'Cell 13 Animation START'
        setTimeout(function () {
            document.getElementById('console').appendChild(p).innerHTML = 'Cell 13 Animation END'
        }, 1000)
    }, 6000)
    setTimeout(function () {
        cell_14.classList.toggle('rotate')
        let p = document.createElement('p')
        document.getElementById('console').appendChild(p).innerHTML = 'Cell 14 Animation START'
        setTimeout(function () {
            document.getElementById('console').appendChild(p).innerHTML = 'Cell 14 Animation END'
        }, 1000)
    }, 6500)
    setTimeout(function () {
        cell_15.classList.toggle('rotate')
        let p = document.createElement('p')
        document.getElementById('console').appendChild(p).innerHTML = 'Cell 15 Animation START'
        setTimeout(function () {
            document.getElementById('console').appendChild(p).innerHTML = 'Cell 15 Animation END'
        }, 1000)
    }, 7000)
    setTimeout(function () {
        cell_16.classList.toggle('rotate')
        let p = document.createElement('p')
        document.getElementById('console').appendChild(p).innerHTML = 'Cell 16 Animation START'
        setTimeout(function () {
            document.getElementById('console').appendChild(p).innerHTML = 'Cell 16 Animation END'
        }, 1000)
    }, 7500)
    setTimeout(function () {
        let p = document.createElement('p')
        document.getElementById('console').appendChild(p).innerHTML = '--- PROGRESS END ---'
        start.classList.toggle('none')
        in_progress.classList.toggle('none')
        alert('succes')
        document.getElementById('console').innerHTML = ''
        cell_1.classList.remove('rotate')
        cell_2.classList.remove('rotate')
        cell_3.classList.remove('rotate')
        cell_4.classList.remove('rotate')
        cell_5.classList.remove('rotate')
        cell_6.classList.remove('rotate')
        cell_7.classList.remove('rotate')
        cell_8.classList.remove('rotate')
        cell_9.classList.remove('rotate')
        cell_10.classList.remove('rotate')
        cell_11.classList.remove('rotate')
        cell_12.classList.remove('rotate')
        cell_13.classList.remove('rotate')
        cell_14.classList.remove('rotate')
        cell_15.classList.remove('rotate')
        cell_16.classList.remove('rotate')

    }, 8600)
})