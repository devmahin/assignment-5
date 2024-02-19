
const allSite = document.querySelectorAll(".site-btn")
const copuponInput = document.getElementById("copuponInput")
const apply = document.getElementById("apply")
// #1DD100
allSite.forEach((vlaue) => {
    // console.log(vlaue)
    vlaue.addEventListener("click", function () {
        // vlaue.classList.add("text-white" , "bg-[#1DD100]")
        vlaue.style.backgroundColor = "#1DD100";
        vlaue.style.color = "white";
        vlaue.setAttribute("disabled", true);

        // ticketingInterface function
        ticketingInterface(vlaue)

        // buySeatNameFun
        buySeatNameFun(vlaue)

        // total price 
        totalPriceFun()

        // nextBtnFun
        nextBtnFun()

    })
})

function ticketingInterface(sit) {

    // totalSeat
    const totalSeat = htmlStatickCount("totalSeat");
    const totalSeatSubtraction = totalSeat - 1;
    innetTexrFun("totalSeat", totalSeatSubtraction);

    // totalBuy
    let siteBuy = htmlStatickCount("site-buy");
    const siteBuyAddition = siteBuy + 1;
    // console.log(siteBuyAddition);
    innetTexrFun("site-buy", siteBuyAddition);

    if (siteBuyAddition >= 4) {
        for (let sit of allSite) {
            sit.setAttribute("disabled", true);
        }
        copuponInputFun()
        alert("A person can buy maximum 4 seats")

    }

}



// nextBtn 
function nextBtnFun() {
    const numberInput = document.getElementById("phoneNumber");
    numberInput.addEventListener("input", function (e) {
        let inputNumber = e.target.value;
        if (inputNumber > 0) {
            const nextBtn = document.getElementById("nextBtn");
            nextBtn.removeAttribute("disabled")
        } else {
            nextBtn.setAttribute("disabled", true)
        }
    })
}






// copuponInput
function copuponInputFun() {
    copuponInput.removeAttribute("disabled")
    apply.removeAttribute("disabled")
    apply.addEventListener("click", function () {
        let copuponInputValue = copuponInput.value.toLowerCase();
        let inputValidCopoun = copuponInputValue.split(" ").join("");
        if(inputValidCopoun === "couple20"){
           discountCopoun(20)
           copuponInput.value = "";
           alert(`Discount 20%`)
           apply.setAttribute("disabled", true)
        }else if(inputValidCopoun === "new15"){
            discountCopoun(15)
            copuponInput.value = "";
            alert(`Discount 15%`)
            apply.setAttribute("disabled", true)
        }else{
            copuponInput.value = "";
            alert(`Coupone is not match`)
        }

    })
}
// discountCopoun
function discountCopoun(value){
    let copounDiscount =  htmlStatickCount("grandTotal")
    let discount = copounDiscount * value / 100;
    innetTexrFun("grandTotal", (copounDiscount - discount))
}




//total price
function totalPriceFun() {
    let tiketPrice = htmlStatickCount("tiketPrice");
    let siteBuy = htmlStatickCount("site-buy");

    // total price send
    innetTexrFun("totalPrice", parseFloat((tiketPrice * siteBuy)).toFixed(2))
    // grandTotal price send
    innetTexrFun("grandTotal", parseFloat((tiketPrice * siteBuy)).toFixed(2))

}





// buySeatName
function buySeatNameFun(value) {
    let siteName = value.innerText
    // console.log(siteName)
    let tiketPrice = htmlStatickCount("tiketPrice");

    // sentSell store
    const buySeatName = document.getElementById("buySeatName");
    buySeatName.innerHTML += `
    <ul class="flex justify-between font-semibold">
    <li class="text-xl">${siteName}</li>
    <li class="text-xl">Economoy</li>
    <li class="text-xl">${tiketPrice}</li>
    </ul>
    `
}


// htmlStringConvat
function htmlStatickCount(id) {
    const statickNumber = document.getElementById(id);
    return parseInt(statickNumber.innerText);
}

// innetText set function
function innetTexrFun(id, value) {
    const idName = document.getElementById(id)
    idName.innerText = value;
}