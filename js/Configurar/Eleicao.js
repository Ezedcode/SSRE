const tipoEleicao = document.querySelectorAll(".tipoEleicao");
const definir = document.getElementById("definir");

const url = [
    "http://localhost:3000/eleicao-presidencial",
    "http://localhost:3000/eleicao-parlamentar",
    "http://localhost:3000/eleicao-municipal"
];

definir.addEventListener("click", () => {
    tipoEleicao.forEach((element, index) => {
        if (element.checked) {
            sessionStorage.setItem("eleicao-name", element.value);
            sessionStorage.setItem("url", url[index]);
        }
    });
});

