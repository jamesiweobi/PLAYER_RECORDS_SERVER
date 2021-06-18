const { avaterName, upload } = require('./middleware');
const { pool } = require('./database');

// Adding new players to the database
const addPlayers = async (req, res) => {
  console.log(req.file);
  try {
    const { playerName, positions, clubname } = req.body;
    const newPlayer = await pool.query(
      `INSERT INTO players (player_name, positions, clubname, avatar_uid) VALUES ( $1, $2, $3, $4 ) RETURNING *`,
      [playerName, positions, clubname, avaterName]
    );
    res.json({
      status: 'success',
      message: 'Player added and Avatar upload Success!!!',
      data: newPlayer,
    });
  } catch (err) {
    console.log(err);
  }
};

// Updating player details
const updatePlayerDetails = async (req, res) => {
  const { id } = req.params;
  const { playerName, positions, clubname } = req.body;
  try {
    const result = await pool.query(
      'UPDATE players SET player_name = $1, positions = $2, clubname = $3 WHERE player_id = $4 RETURNING *',
      [playerName, positions, clubname, id]
    );

    let { rows } = result;
    if (rows.length > 0) {
      res.status(200).json({ status: 'succesfull' });
    } else {
      res.status(401).json({ status: 'success', message: 'player not found!' });
    }
  } catch (err) {
    throw err;
  }
};

// Update player

const updatePlayer = async (req, res) => {
  let { id } = req.params;
  await pool.query(
    `UPDATE players SET avatar_uid = $1 WHERE player_id = $2 RETURNING *`,
    [avaterName, id],
    (err, result) => {
      if (err) {
        throw err;
      }
      let { rows } = result;
      console.log(rows);
      if (rows.length > 0) {
        res.status(200).json({ status: 'succesfull' });
      } else {
        res
          .status(201)
          .json({ status: 'success', message: 'player not found!' });
      }
    }
  );
};

// Delete Player

const deletePlayer = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(
    'DELETE FROM players WHERE player_id = $1',
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`User deleted with ID: ${id}`);
    }
  );
};

// get All players

const allPlayers = async (req, res) => {
  await pool.query('SELECT * FROM players', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

module.exports = {
  addPlayers,
  updatePlayer,
  deletePlayer,
  allPlayers,
  updatePlayerDetails,
};
