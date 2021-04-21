const path = require('path');
const express = require("express")

const router = express.Router()


// Basic route that sends the user first to the AJAX Page
router.get('/', (req, res) => res.sendFile(path.join(__dirname, '../../public/view.html')));

router.get('/add', (req, res) => res.sendFile(path.join(__dirname, '../../public/add.html')));

module.exports = router;