const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`
<script>
let nome = prompt("Digite seu nome:");
let idade = Number(prompt("Digite sua idade:"));
let estudante = true;

console.log (typeof(nome));
console.log (typeof(idade));
console.log (typeof(estudante));

console.log (nome)
console.log (idade)
console.log (estudante)

if (estudante === true) {
console.log("Você é um estudante.")
} else {
console.log("Você não é um estudante.")
}
</script>
`)
});

app.listen(3000, () => { console.log("Servidor ligado") })