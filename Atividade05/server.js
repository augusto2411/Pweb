const app = require("./app");
const PORT = 3333;

app.listen(PORT, () => console.log("Rodando"));

let animes = [
  {
    id: 1,
    nome: "Naruto",
    genero: "Ação",
    estudio: "Pierrot",
  },
];

const findAnimeById = (id) => animes.find((anime) => anime.id === parseInt(id));

app.get("/animes", (req, res) => {
  res.json(animes);
});

app.get("/animes/:id", (req, res) => {
  const anime = findAnimeById(req.params.id);
  if (!anime) {
    return res.status(404).json({ message: "Anime não encontrado" });
  }
  res.json(anime);
});

app.post("/animes", (req, res) => {
  const { nome, genero, estudio } = req.body;

  if (!nome || !genero || !estudio) {
    return res.status(400).json({
      message: "Informacoes incompletas",
    });
  }

  const novoAnime = {
    id: animes.length + 1,
    nome,
    genero,
    estudio,
  };
  animes.push(novoAnime);
  res.status(201).json(novoAnime);
});

app.put("/animes/:id", (req, res) => {
  const anime = findAnimeById(req.params.id);
  if (!anime) {
    return res.status(404).json({ message: "Anime não encontrado" });
  }

  const { nome, genero, estudio } = req.body;

  if (!nome || !genero || !estudio) {
    return res.status(400).json({ message: "Informacoes incompletas" });
  }

  if (nome) anime.nome = nome;
  if (genero) anime.genero = genero;
  if (estudio) anime.estudio = estudio;

  res.json(anime);
});

app.delete("/animes/:id", (req, res) => {
  const animeIndex = animes.findIndex(
    (anime) => anime.id === parseInt(req.params.id)
  );

  animes.splice(animeIndex, 1);
  res.status(204).send();
});
