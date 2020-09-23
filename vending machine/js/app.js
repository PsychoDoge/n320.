class Vendingmachine{
  constructor(name,item) {
    this.name = name;
    this.item = item;
    this.cost = 10;
  }
  render() {
    return `
      <div>${this.name}</div>
      <div>Item: ${this.item}</div>
      <div>Cost: ${this.cost}</div>
    `;
  }
  buy() {
  if (this.item > 0) {


    this.item --;
    }
  }
}

let firstCandy = new Vendingmachine("chacolet bar","3");
let secondCandy = new Vendingmachine("lolipop","4");
let thirdCandy = new Vendingmachine("bubble gum","2");
let candyDiv = document.getElementById("candyDiv");
let candyDiv2 = document.getElementById("candyDiv2");
let candyDiv3 = document.getElementById("candyDiv3");
candyDiv.innerHTML = firstCandy.render();
candyDiv2.innerHTML = secondCandy.render();
candyDiv3.innerHTML = thirdCandy.render();

function buyfirstCandy() {
  firstCandy.buy();
  candyDiv.innerHTML = firstCandy.render();
}
function buysecondCandy() {
  secondCandy.buy();
  candyDiv2.innerHTML = secondCandy.render();
}

function buythirdCandy() {
  thirdCandy.buy();
  candyDiv3.innerHTML = thirdCandy.render();
}
