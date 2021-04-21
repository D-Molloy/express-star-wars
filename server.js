// Dependencies
const express = require('express');
// Sets up the Express App
const app = express();
const PORT = 3000;
const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes")
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/", htmlRoutes)
app.use("/api/characters/", apiRoutes)

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
