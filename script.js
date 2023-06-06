const convertButton = document.querySelector(".convert-button")
const currencySelectConverted = document.querySelector(".currency-select-converted")

function convertValues (){
    const inputCurrency = document.getElementById("input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")



    const dolarToday = 4.93
    const euroToday = 5.28
    const libraToday = 6.13
    const bitcoinToday = 127020.60
    const realToday = 1

    if(currencySelectConverted.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency:"BRL"
        }).format(inputCurrency / realToday)
    }
    
    if(currencySelectConverted.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency:"USD"
        }).format(inputCurrency / dolarToday)
    }

    if(currencySelectConverted.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency:"EUR"
        }).format(inputCurrency / euroToday)
    }

    if(currencySelectConverted.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency:"GBP"
        }).format(inputCurrency / libraToday)
    }

    if(currencySelectConverted.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency:"BTC"
        }).format(inputCurrency / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency:"BRL"
    }).format(inputCurrency)

}


function changeCurrency (){
    const currencyNameConverted = document.getElementById("currency-name-converted")
    const currencyImg = document.querySelector(".currency-img")

    if(currencySelectConverted.value == "real"){
        currencyNameConverted.innerHTML = "Real"
        currencyImg.src = "./assets/real.png"
    }

    if(currencySelectConverted.value == "dolar"){
        currencyNameConverted.innerHTML = "Dólar Americano"
        currencyImg.src ="./assets/dolar.png"
        }
    
    if(currencySelectConverted.value == "euro"){
        currencyNameConverted.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if(currencySelectConverted.value == "libra"){
        currencyNameConverted.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }
    
    if(currencySelectConverted.value == "bitcoin"){
        currencyNameConverted.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }
    
convertValues ()

}

currencySelectConverted.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
