document.addEventListener("DOMContentLoaded", () => {
    let t0 = performance.now()

    fetch("https://api.exchangeratesapi.io/latest?base=USD")
    .then(response =>  response.json()) // return in one line
    .then(data => console.log(data))

    let t1 = performance.now()
    console.log("Call to fetch API data took " + (t1 - t0) + " milliseconds.")
});
