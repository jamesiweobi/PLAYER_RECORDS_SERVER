const express = require('express');
const app = express();
const port = 3000;
const { upload } = require('./middleware');
const {
  addPlayers,
  updatePlayer,
  deletePlayer,
  allPlayers,
  updatePlayerDetails,
} = require('./routes');

app.use(express.json());

// Add Players
app.post('/player', upload.single('image'), addPlayers);

// Update Player Avatar
app.put('/player/avatar/:id', upload.single('image'), updatePlayer);

// Updating player details
app.patch('/player/:id', updatePlayerDetails);

// Delete Player
app.delete('/player/:id', deletePlayer);

// Get all Players
app.get('/player', allPlayers);

// server
app.listen(port, () => {
  console.log(`server listening on port: ${port}.....`);
});
