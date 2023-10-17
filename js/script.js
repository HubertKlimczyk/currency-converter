let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;
    let rateUSD = 4.36;
    let rateEUR = 4.61;
    let rateGBP = 5.30;
    let result;

    // if (currency == "USD") {
    //     result = amount / rateUSD;
    // } else if (currency == "EUR") {
    //     result = amount / rateEUR;
    // } else {
    //     result = amount / rateGBP
    // }

    // resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;

    switch (currency) {
        case "USD":
            result = amount / rateUSD;
            break;
        case "EUR":
            result = amount / rateEUR;
            break;
        case "GBP":
            result = amount / rateGBP;
            break;
    }

    resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;
});

