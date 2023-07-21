
var myHeaders = new Headers();
myHeaders.append("apikey", "Unfzb6aLbPuW0WlR2TZ8naLD0WdCAjT5");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

class Currency {


    
  constructor(firstCurrency, secondCurrency) {
    this.firstCurrency = firstCurrency;
    this.secondCurrency = secondCurrency;
    this.url = `https://api.apilayer.com/exchangerates_data/convert?to=${this.secondCurrency}&from=${this.firstCurrency}&amount=`;

    this.amount = null;
  }

  exchange() {

    return new Promise((resolve,reject) =>{
        fetch(this.url + this.amount, requestOptions)
        .then((response) => response.json())
        .then((data) => {resolve(data)})
        .catch((err) => reject(err));
    });

  }

  changeAmount(amount) {
    this.amount = amount;
  }

  changeFirstCurrency(newFirstCurrency) {
    this.firstCurrency = newFirstCurrency;
  }

  changeSecondCurrency(newSecondCurrency) {
    this.secondCurrency = newSecondCurrency;
  }
}

