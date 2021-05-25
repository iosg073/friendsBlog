const express = require ('express')
const router = express.Router();
const ctrl = require ('../controllers');

router.get('/usersdetail', ctrl.users.showAllUsers);
module.exports = router;
