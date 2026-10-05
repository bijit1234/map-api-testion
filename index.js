import mines from "./data/data.js";
import express from "express";
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/mines", (req, res) => {
    res.render('index',{mines});
});

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/map", (req, res) => {
    res.render("index2", { mines });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});