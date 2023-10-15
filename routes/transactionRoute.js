const express = require("express");
const {
  addTransaction,
  getAllTransaction,
  editTransaction,
} = require("../controllers/transactionCtrl");

//router object
const router = express.Router();

//routes
//add transaction POST
router.post("/add-transaction", addTransaction);

//edit transactions
router.post("/edit-transaction", editTransaction);

//get all transactions
router.post("/get-transaction", getAllTransaction);

module.exports = router;
