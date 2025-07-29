import express from "express";
import { Playlist } from "./MusicData.data.js";

const app = express();

app.get('/', (req, res) => {
    res.send("We Good")
})

app.get('/api/musicData', (req, res) => {
    res.send(Playlist)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`)
})