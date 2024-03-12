const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = express.Router();
app.use("/api", routes)

//body-parser
routes.use(bodyParser.urlencoded({ extended: false}))
routes.use(bodyParser.json());

//cors
routes.use(cors());

app.listen(PORT, () => {
    console.log(`Lancement du serveur sur le http://localhost:${PORT}`);
});

routes.get("/", (req, res)=>{
    res.send("Bienvenue chez Sport Center");
})

routes.get("/products", (req, res)=>{
    res.send("liste des articles");
})
