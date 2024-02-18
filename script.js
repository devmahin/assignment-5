
const allSite = document.querySelectorAll(".site-btn")
// #1DD100
allSite.forEach((vlaue) => {
    // console.log(vlaue)
    vlaue.addEventListener("click", function () {
        vlaue.style.backgroundColor = "#1DD100";
        vlaue.setAttribute("disabled", true)


        // ticketingInterface function
        ticketingInterface()

        // buySeatNameFun
        buySeatNameFun(vlaue)
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
    console.log(siteBuyAddition);
    innetTexrFun("site-buy", siteBuyAddition);



}
// buySeatName
function buySeatNameFun(value) {
    let siteName = value.innerText
    // console.log(siteName)
    let tiketPrice = htmlStatickCount("tiketPrice");
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