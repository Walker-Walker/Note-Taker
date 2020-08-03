const router = require("express").Router();
const Lib = require('../db/lib');

router.get('/notes', (req, res) => {
    Lib.getNotes()//.then() return a promise ...send those notes back to the user..res.json send response to user 

 });
 



module.exports = router;