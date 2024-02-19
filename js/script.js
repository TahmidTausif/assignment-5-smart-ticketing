const allSeat = document.getElementsByClassName('btn-seat');
let count = 0;
let total = 0;
let avail = 40;



for(const seat of allSeat){
    seat.addEventListener('click', function(e){

       

        if(count+1>4){
            alert('You can buy only 4 seats at a time.');
            return;
        }

        e.target.style.backgroundColor = "rgb(29, 209, 0)"

        count = count + 1;
        total = total + 550;
        if(avail-1<0){
            alert('No seat left.');
            return;
        }
        avail = avail - 1;

        document.getElementById('modal-button')

        
        
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
       

        
        grandTotal()

        setInnerText("seat-count", count)
        setInnerText("total", total)
        setInnerText("available", avail)

        if(count>0){
            document.getElementById("modal-button").removeAttribute("disabled");
            
        }
        const target = e.target
        target.setAttribute("disabled", true);

         
        
    })
}



function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}

function grandTotal(){
    let grand = 0;
    const couponBox = document.getElementById('coupon-text')
    const discountText = document.getElementById('discount')
    const wrongDiscount = document.getElementById('wrong-discount')
    
    const coupon = document.getElementById('coupon').value

    if(coupon === "NEW15"){
        let discount = (total*(15/100));
        grand = total - discount;
        couponBox.classList.add('hidden');
        discountText.classList.remove('hidden');
        document.getElementById('discount-amount').innerText = discount;

    }
    else if(coupon === "Couple 20"){
        discount2 = (total*(20/100));
        grand = total - discount2;
        couponBox.classList.add('hidden');
        discountText.classList.remove('hidden');
        document.getElementById('discount-amount').innerText = discount2;

    }
    else{
        grand = total;
        couponBox.classList.add('hidden');
        wrongDiscount.classList.remove('hidden');
    }

    
    setInnerText("grand", grand)
}