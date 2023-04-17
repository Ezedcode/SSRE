const url = "http://localhost:3000/eleitor";

const login = document.getElementById("btn-login");

login.addEventListener("click", (e) => {
    e.preventDefault();
    const inputBI = document.getElementById("input-BI").value;
    getEleitorBD(inputBI);
});


const getEleitorBD = async (inputBI) => {
    const response = await fetch(url);
    const data = await response.json();
    let count = 0;

    data.forEach((element) => {
        if (element.bi.toLowerCase() == inputBI.toLowerCase()) {
            count++;
            sessionStorage.setItem("idEleitor", element.id);
        }
    })

    if (count == 0) {
        alert('Eleitor não encontrado!');
    } else {
        alert('Login Sucess!');
        window.location.href = "/pages/Votar.html";
    }
}
