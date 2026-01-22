import express from "express";
import usuarioRoutes from "./src/router/UsuarioRouter.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/usuario", usuarioRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Aplicação rodando em http://localhost:${PORT}`);
});
