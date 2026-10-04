const express = require('express');   // 1. charger la bibliothèque Express

const app = express();                // 2. créer l'application : c'est notre serveur
const PORT = 3000;

app.use(express.json());

app.use(express.json());   // lit le corps JSON et le range dans req.body

// 3. une route : quand un client demande GET /, Express exécute cette fonction
app.get('/', (req, res) => {
  res.json({ message: "Bonjour, je suis l'API du blog" });
});
const articles = [
  { id: 1, title: 'Bienvenue sur le blog', author: 'Rania' },
  { id: 2, title: 'Mon premier serveur Express', author: 'Hedil' },
  { id: 3, title: 'Tester une API avec Postman', author: 'Aya' }
];
// GET /api/articles/2 -> l'article dont l'id vaut 2
app.get('/api/articles', (req, res) => {
  const { author } = req.query;

  let resultat = articles;
  if (author) {
    resultat = articles.filter(a => a.author === author);
  }
  res.json({ total: resultat.length, articles: resultat });
});

// GET /api/articles -> tous les articles
app.get('/api/articles', (req, res) => {
  res.json({ total: articles.length, articles: articles });
});
// GET /api/articles -> tous les articles
// GET /api/articles?author=Aya -> seulement les articles d'Aya

app.get('/api/articles', (req, res) => {
    const { author } = req.query;
    // Équivalent à : const author = req.query.author;

    let resultat = articles;

    if (author) {
        // Si le client a précisé ?author=Aya
        resultat = articles.filter(a => a.author === author);
    }

    res.json({
        total: resultat.length,
        articles: resultat
    });
});

let prochainId = 4;

app.post('/api/articles', (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ error: "Le titre et l'auteur sont obligatoires" });
  }

  const nouvelArticle = { id: prochainId, title: title, author: author };
  prochainId = prochainId + 1;
  articles.push(nouvelArticle);

  res.status(201).json({ message: 'Article créé', article: nouvelArticle });
});
// 4. démarrer le serveur : il attend les requêtes sur le port 3000
app.listen(PORT, () => {
  console.log(`Serveur disponible sur http://localhost:${PORT}`);
});