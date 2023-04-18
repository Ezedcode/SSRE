const url = "http://localhost:3000/administradores";

const login = document.getElementById("btn-login-admin");

login.addEventListener("click", (e) => {
    e.preventDefault();
    const inputCode = document.getElementById("code").value;
    const inputPass = document.getElementById("password").value;
    getAdminBD(inputCode, inputPass);
});


const getAdminBD = async (code, pass) => {
    const response = await fetch(url);
    const data = await response.json();
    let count = 0;

    data.forEach((element) => {
        if (element.codigo == code && element.password == pass) {
            count++;
        }
    })

    if (count == 0) {
        alert('Admin não encontrado!');
    } else {
        alert('Login Sucess!');
        window.location.href = "/pages/AdminPage.html";
    }
}
