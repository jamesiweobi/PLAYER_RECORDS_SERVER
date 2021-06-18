CREATE DATABASE playerdb;


--\c playerdb;   
\c playerdb;

CREATE TABLE players(
  player_id SERIAL PRIMARY KEY, 
  player_name VARCHAR(100) NOT NULL,
  positions VARCHAR(30) NOT NULL,
  clubname VARCHAR(30) NOT NULL,
  avatar_uid UUID NOT NULL
);