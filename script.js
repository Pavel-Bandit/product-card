const button = document.querySelector("button");

button.addEventListener("click", function () {
  alert("Дякуємо за покупку!");
  button.textContent = "Куплено ✅";
  button.disabled = true;
});
