let select = "";
let totalPagar = document.getElementById("totalPagar");
let buttonResumen = document.getElementById("buttonResumen");
let buttonDelete = document.getElementById("buttonDelete");
let cantidad = "";

console.log(cantidad.value);

const formResumen = (e) => {
  e.preventDefault();
  select = document.getElementById("select").value;
  cantidad = document.getElementById("cantidad").value;
  switch (select) {
    case "estudiante":
      totalPagar.innerHTML = cantidad * (200 - 0.8 * 200);
      break;
    case "trainee":
      totalPagar.innerHTML = cantidad * (200 - 0.5 * 200);
      break;
    case "junior":
      totalPagar.innerHTML = cantidad * (200 - 0.15 * 200);
      break;
    default:
      console.log(select);
      break;
  }
  cantidad = "";
};

const formDelete = () => {
  totalPagar.innerHTML = "";
};

buttonResumen.addEventListener("click", formResumen);
buttonDelete.addEventListener("click", formDelete);
