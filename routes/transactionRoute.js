const express = require("express");
const {
  addTransaction,
  getAllTransaction,
} = require("../controllers/transactionCtrl");

//router object
const router = express.Router();

//routes
//add transaction POST
router.post("/add-transaction", addTransaction);

//get all transactions
router.get("/get-transaction", getAllTransaction);

module.exports = router;
