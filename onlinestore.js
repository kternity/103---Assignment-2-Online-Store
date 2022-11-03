function app() {
  console.log("Buying...");

  let description = prompt("Add the product's name");
  console.log(description);
  
  let price = prompt("How much is it?");
  console.log(price);
  
  let quantity = prompt("How many are you buying?");
  console.log(quantity);

  let subTotal = (price*quantity);
  console.log(subTotal);
  alert("Your subtotal before tax is " + subTotal + ".");

  const taxes = 0.16;
  alert("Your tax rate is " + taxes + "%.");

  let total = (subTotal + subTotal*taxes);
  console.log(total);
  alert("Your total including tax is $" + total + ".");

  console.log(); // total after tax in console
  // document.write(); //total after tax in html
}
