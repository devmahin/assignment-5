
const allSite = document.querySelectorAll(".site-btn")
// #1DD100
allSite.forEach((vlaue) => {
    // console.log(vlaue)
    vlaue.addEventListener("click", function () {
        // vlaue.classList.add("text-white" , "bg-[#1DD100]")
        vlaue.style.backgroundColor = "#1DD100";
        vlaue.style.color = "white";
        vlaue.setAttribute("disabled", true)


        // ticketingInterface function
        ticketingInterface()

        // buySeatNameFun
        buySeatNameFun(vlaue)

        // total price 
        totalPriceFun()

        // nextBtnFun
nextBtnFun()

    })
})

function ticketingInterface() {

    // totalSeat
    const totalSeat = htmlStatickCount("totalSeat");
    const totalSeatSubtraction = totalSeat - 1;
    innetTexrFun("totalSeat", totalSeatSubtraction);

    // totalBuy
    let siteBuy = htmlStatickCount("site-buy");
    const siteBuyAddition = siteBuy + 1;
    // console.log(siteBuyAddition);
    innetTexrFun("site-buy", siteBuyAddition);
}



// nextBtn 
function nextBtnFun(){
    const numberInput = document.getElementById("phoneNumber");
    numberInput.addEventListener("input", function(e){
        let inputNumber = e.target.value;
        if(inputNumber > 0){
            const nextBtn = document.getElementById("nextBtn");
            nextBtn.removeAttribute("disabled")
            // addEventListener nextBtn
            nextBtn.addEventListener("click", modalPage)
        }else{
            nextBtn.setAttribute("disabled", true)
        }
    })
}



function modalPage(){
    
}





// copuponInput




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