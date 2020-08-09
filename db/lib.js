//  Get the data from FILE and send it to the server
const fs = require("fs");
const util = require("util");
const rFAsync = util.promisify(fs.readFile);
const wFAsync = util.promisify(fs.writeFile);


class Lib {
  readNotesDataBase() {
    rFAsync("db.json", "utf8", function (err, data) {
      if (err) {
        return console.log(err);
      }
      return data;
    });

    // get all the notes data from db.json and return it
    // fs needs the directory where the JSON file is in order to READ
    // ./ locally
  }
  getNotesByQuery() {
    //parse returning data from readNotes function
    return this.readNotesDataBase().then(function (note) {
      const notes = JSON.parse(note);
      return notes;
    });
  }

  writeNotes(note) {
    // add it to the collection
    wFAsync("db.json", note, function (err) {
      if (err) {
        return console.log(err);
      }
    });
  }

  writeNotesToDataBase(note) {
// read file then write to it 
return this.getNotesByQuery.then(function (notes) {
    notes.push(note);
    writeNotes(note)
}
).then( function (note) {
    return note;
})


  }
}

module.exports = new Lib();
