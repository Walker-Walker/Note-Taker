
const router = require("express").Router();
const lib = require('../db/lib');
const  notes = require('../db/db.json');
router.get('/notes', (req, res) => {
    // don't make any unnecessary trips to the database
    // es6 lame version return req.query ? res.json( getNotesByQuery(req.query, notes) ) : res.json(notes);
    let results = notes;
    /*if (req.query) {
        results = lib.getNotesByQuery(req.query, results);
    }*/
   res.json(results);  
 });
    
router.post('/notes', (req, res) => {
    // console.log(req)// what is this?
    const notes = req.body;

    lib.writeNotesToDataBase(notes)
    .then((notes) => {
        res.json(result)
    })
    
 
})

//     Lib.getNotes()//.then() return a promise ...send those notes back to the user..res.json send response to user 

//  });
 



module.exports = router;