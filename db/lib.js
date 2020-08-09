//  Get the data from FILE and send it to the server
const fs = require("fs");
const util = require("util");
const rFAsync = util.promisify(fs.readFile);
const wFAsync = util.promisify(fs.writeFile);
const { v4: uuidv4} = require('uuid');

class Lib {
  //   readNotesDataBase() {
  //     rFAsync("db.json", "utf8", function (err, data) {
  //       if (err) {
  //         return console.log(err);
  //       }
  //       return data;
  //     });

  //     // get all the notes data from db.json and return it
  //     // fs needs the directory where the JSON file is in order to READ
  //     // ./ locally
  //   }
  readNotesDataBase() {
    return rFAsync("db/db.json", "utf8");
  }

  getNotesByQuery() {
    //parse returning data from readNotes function
    return this.readNotesDataBase();
    
    /*.then(function (notes) {
      const notes = JSON.parse(notes);
      return notes;
    });*/
  }

  writeNotes(note) {
    // add it to the collection
    return wFAsync("db/db.json", JSON.stringify(note));
   
  }

  writeNotesToDataBase(note) {
    // read file then write to it
    // generate a unique Id for the element to add to your DB
    note.id = uuidv4(note);
   // write the new collection to the database using a helper in your lib
   
    return this.getNotesByQuery()
      .then((notes) => {
        notes.push(note);
        return this.writeNotes(notes);
      })
      .then(() => {
        return note;
      }).catch ((error) => {
          console.error(error);
      });
  };
 
}

module.exports = new Lib();
