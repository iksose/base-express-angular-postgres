import pg from 'pg';
import pgp from 'pg-promise';
import {connectionString, connectionObject} from '../dbconfig'

const connection = pgp();
const db = connection(connectionString)

export class Todo {
  constructor(){}
  static async add(todo = {}){
    const results = [];
    pg.connect(connectionString, function(err, client, done) {
      // Handle connection errors
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({ success: false, data: err});
      }

      // SQL Query > Insert Data
      client.query("INSERT INTO items(text, complete) values($1, $2)", [todo.text, todo.complete]);

      // SQL Query > Select Data
      var query = client.query("SELECT * FROM items ORDER BY id ASC");

      // Stream results back one row at a time
      query.on('row', function(row) {
          results.push(row);
      });

      // After all data is returned, close connection and return results
      query.on('end', function() {
          done();
          return results;
          // return res.json(results);
      });
    });
  }
  static async all(){
    console.log("get all")
    const results = await db.query("SELECT * FROM items ORDER BY id ASC;")
    return results;
  }
}
