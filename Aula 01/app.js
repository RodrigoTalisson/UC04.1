import express from "express"; // importa o framework express

const app = express(); // cria a aplicação
const port = 3000; // porta da API

app.get("/", (req, res) => {
    res.send("Hello World!!!");
});

app.get("/teste", (req, res) => {
    res.send("Hello World meu fi!!!");
});

app.get("/usuario", (req, res) => {
    res.json({
        nome: "Rodrigo",
        idade: 15,
        cidade: "Natal"
    });
});
app.get("/status", (req, res) => {
    res.status(200),send("Status ok");
});
app.get("/usuario/:id", (req, res)=>{
    const {id}=req.params;
    res.status(200), json({
        id:id,
        nome: "User exemplo"
    })
})

app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`);
});
