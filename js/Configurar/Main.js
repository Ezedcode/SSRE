const url = 'http://localhost:3000/produto';

const btn_cadastrar = document.getElementById("btn-cadastrar");
const values = {};

lista.innerText = nome.value;

btn_cadastrar.addEventListener("click", (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome');
    const data_nascimento = document.getElementById('data-nascimento');
    const bi = document.getElementById('bi');
    const gender = document.getElementById('male');
    const nif = document.getElementById('nif');

    values.nome = nome.value;
    values.data_nascimento = data_nascimento.value;
    values.bi = bi.values;
    values.gender = gender.value;
    values.nif = nif.values;

    console.log(values);
});



// get products on bd
/*async function getAllProduts() {
    const response = await fetch(url);
    console.log(response);

    const data = await response.json();

    console.log(data);

    const div = document.getElementById("lista-candidatos");
    div.innerHTML = data[0].nome;
}

// post product
async function postProduct() {
    const resp = await fetch(url);
    const data = await resp.json();

    const product = {
        id: 5,
        nome: "Zedinaikjk"
    };

    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
            "Content-Type": "application/json",
        },
    });
}*/

//getAllProduts();
//postProduct();
