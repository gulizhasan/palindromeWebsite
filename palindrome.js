function palindrome() {
  var inputValue = document.getElementById("input").value;

  const arrayValues = inputValue.split('');
  const reverseArrayValues = arrayValues.reverse();
  const reverseString = reverseArrayValues.join('');

  if (inputValue == reverseString) {
    document.getElementById("js").innerHTML = "Palindrome!";
  }
  else {
    document.getElementById("js").innerHTML = "Not a palindrome.";
  }
}

// var btn = document.getElementById("btn");
// btn.addEventListener("click", palindrome(inputValue));
