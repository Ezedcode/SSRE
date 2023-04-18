const menu = document.querySelectorAll("#lista-processos li");
const declararVencedor = document.querySelectorAll("input");

const list = document.querySelectorAll(".container div").forEach((tabela) => {
    tabela.style.display = "none"
});

document.getElementById("first").classList.add("active");
document.getElementById(`tabela1`).style.display = "block";

menu.forEach((option, index) => {
    option.addEventListener("click", () => {
        option.classList.add("active");
        document.getElementById(`tabela${index + 1}`).style.display = "block";
        menu.forEach((menuOption, index) => {
            if (option.textContent != menuOption.textContent) {
                menuOption.classList.remove("active");
                document.getElementById(`tabela${index + 1}`).style.display = "none";
            }
        });
    });
});

declararVencedor.forEach((button, index) => {
    button.addEventListener("click", () => {
        sessionStorage.setItem(`button${index}`, true);
        button.style.display = "none";
        location.reload();
    })
});

declararVencedor.forEach((button, index) => {
    if (sessionStorage.getItem(`button${index}`))
        button.style.display = "none";
});