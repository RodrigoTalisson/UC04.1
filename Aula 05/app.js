import express from 'express';
import "dotenv/config.js"
;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app

app.get('/', (req, res) => {
  res.send(process.env.SAUDACAO);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});