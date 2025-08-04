const display = document.getElementById("display");

display.addEventListener("input", function (e) {
  let caract = display.value.length;
  document.getElementById("value").textContent = caract;
});

display.addEventListener("input", function (e) {
  let i = 0;
  let cuv = 0;

  const sircar = display.value.split(" ");
  console.log(sircar);
  for (i; i < sircar.length; i++) {
    if (sircar[i].length > 0) {
      cuv++;
    }
  }
  document.getElementById("value2").textContent = cuv;
});

function saveToLocalStorage() {
  localStorage.setItem("textuu", display.value);
}

function loadFromLocalStorage() {
  let saved = localStorage.getItem("textuu");
  if (saved != null) {
    if (display.value != saved) {
      if (confirm("URMEAZA SA MODIFICI TEXTUL CU CEL SALVAT")) {
        display.value = localStorage.getItem("textuu") || "";
        display.dispatchEvent(new Event("input"));
      }
    }
  }
}
