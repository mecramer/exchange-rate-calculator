const currencyEl_one = document.querySelector('#currency-one');
const currencyEl_two = document.querySelector('#currency-two');
const amountEl_one = document.querySelector('#amount-one');
const amountEl_two = document.querySelector('#amount-two');

const rateEl = document.querySelector('#rate');
const swap = document.querySelector('#swap');

// Fetch exchange rates and update the DOM
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  // console.log(currency_one, currency_two);

  // fetch the data from the api
  // then run a promise and turn to json
  // currency_one is what the first currency is currently set to
  // then take the data and set a const (rate) to be the second currency rat chosen
  // then print out that 1 of the current currency equals how much of the second
  // lastly, set the amount of second currency relative to how many units fo the first currency
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const rate = data.rates[currency_two];
      // console.log(rate);

      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

// Event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);
// to swap values:
// copy currency one vaue to a temp holding spot
// set currency one to what currency two currently is
// set currency two to what currency one was (being held in temp)
// run calculate() on the new values
swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();






// example of how to use fetch om a local json file
// function calculate() {
//   fetch('items.json')
//     .then(res => res.json())
//     .then(data => console.log(data));
// }

// calculate();