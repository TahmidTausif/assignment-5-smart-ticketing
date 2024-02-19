const allSeat = document.getElementsByClassName('btn-seat');
let count = 0;
let total = 0;

for(const seat of allSeat){
    seat.addEventListener('click', function(e){
        count = count + 1;
        total = total + 550;
        const seatName = e.target.id;

        const tbContainer = document.getElementById('tb-container');

        const tr = document.createElement("tr")
        const td1 = document.createElement("td")
        td1.innerText = seatName
        const td2 = document.createElement("td")
        td2.innerText = "economy"
        const td3 = document.createElement("td")
        td3.innerText = "550"

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tbContainer.appendChild(tr)




        setInnerText("seat-count", count)
        setInnerText("total", total)
    })
}

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}