document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("form").onsubmit = function(){

        fetch("https://api.exchangeratesapi.io/latest?base=USD")
        .then(response =>  response.json()) // return in one line
        .then(data => {
            const currency = document.querySelector("#currency").value;
            const rate = data.rates[currency];
            const result = document.querySelector("#result");
            rate ? result.innerHTML = `1 USD is equal to ${rate.toFixed(3)} ${currency}` : result.innerHTML = `Invalid currency.`
            
        })

        return false; // we dont submit to other page, we want to run locally
    }



});
