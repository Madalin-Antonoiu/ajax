document.addEventListener("DOMContentLoaded", () => {

    fetch("https://api.exchangeratesapi.io/latest?base=USD")
    .then(response =>  response.json()) // return in one line
    .then(data => {
        const rate = data.rates.EUR;
        document.querySelector("body").innerHTML = `1 USD is equal to ${rate.toFixed(3)} EUR.`
    })

});
