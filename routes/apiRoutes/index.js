const express = require("express")
const router = express.Router()
const { readFile, writeFile } = require("../../utils/fsUtils")


// (GET) returns all characters  ||  (POST) creates and returns a new character
// localhost:3000/api/characters/
router.get('/', async (req, res) => {
  let data = await readFile()
  res.json(data)
}).post('/', async (req, res) => {
  const newCharacter = req.body;
  let characters = await readFile()
  await writeFile([...characters, newCharacter])
  res.json(newCharacter);
});

// return a single character, or returns false
// localhost:3000/api/characters/:character
router.get('/:character', async (req, res) => {
  const chosen = req.params.character;
  let characters = await readFile()
  let [matchedChar] = characters.filter(character => character.routeName === chosen)
  if (matchedChar) return res.json(matchedChar);
  return res.json(false);
});




module.exports = router;