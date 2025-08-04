// Poate sa-ti dea null daca nu exista
const display = document.getElementById("display");
if (display === null) {
  throw new Error("Display nu a fost gasit");
}

display.addEventListener("input", function (e) {
  let caract = display.value.length;
  document.getElementById("value").textContent = caract;
});

display.addEventListener("input", function (e) {
  let i = 0;
  let cuv = 0;

  // Asta e ok, dar daca te intereseaza cum sa-l faci mai eficient, uita-te mai jos
  const sircar = display.value.split(" ");
  console.log(sircar);
  for (i; i < sircar.length; i++) {
    if (sircar[i].length > 0) {
      cuv++;
    }
  }

  // Mai eficient (se poate optimiza si mai mult, dar nu complic)
  // let count = 0;
  // for (let i = 0; i < sircar.length; i++) {
  //   if (sircar[i] === " ") {
  //     continue;
  //   }
  //   count++;
  // }
  // document.getElementById("value2").textContent = count;

  document.getElementById("value2").textContent = cuv;
});

function saveToLocalStorage() {
  console.log("Save to local storage");
  localStorage.setItem("textuu", display.value);
}

function loadFromLocalStorage() {
  console.log("Load from local storage");
  let saved = localStorage.getItem("textuu");
  // In cazul asta, nu exista nicio problema, dar ti-as recomand sa nu folosesti NICIODATA == in js. Pt ca face multe chestii care nu au sens (foloseste === in loc)
  // Daca te intereseaza: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness
  if (saved != null) {
    if (display.value != saved) {
      if (confirm("URMEAZA SA MODIFICI TEXTUL CU CEL SALVAT")) {
        display.value = localStorage.getItem("textuu") || "";
        display.dispatchEvent(new Event("input"));
      }
    }
  }
}
