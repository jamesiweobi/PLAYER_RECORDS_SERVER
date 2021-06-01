# PLAYER_RECORDS_SERVER

My submission for the following stutern task
Create a simple express server running on port 3000.

Add a database connection to your server and create a table ‘players’ with the following columns:

name, position, clubname, avatar

Expose the following endpoints on your server,

POST /player : For creating a new player

PATCH /player/:id: For updating a player’s details.

NB: use req.params.id to get the id from the url. E.g To update the id for a player with id = 10, the url path will be ‘/player/10’

PUT /player/avatar/:id: For creating or replacing a player’s avatar. Refer to the note above for getting the id from the url path.

GET /player/:id: For getting a single player. Refer to the note above for getting the id from the url path.

Use the multer library to accept a file on your server https://www.npmjs.com/package/multer. Save the file in an avatars folder on your server. 
NB: Postman can be used to upload the image.

Use uuid’s v4 module to generate unique strings and rename the avatar for each user. https://www.npmjs.com/package/uuid

Save the unique string in the user’s avatar column.
