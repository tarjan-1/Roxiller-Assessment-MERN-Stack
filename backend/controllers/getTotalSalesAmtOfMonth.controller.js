const Transaction = require("../models/transacation");

const getTotalSalesAmtOfMonth = async (req, res) => {
  try {
    let { month } = req.query;
    month = parseInt(month);

    if (month > 12 || month <= 0) {
      return res.json({ err: "month values should be between 1 - 12" });
    }

    Transaction.aggregate([
      {
        $match: {
          $expr: {
            $eq: [{ $month: "$dateOfSale" }, month],
          },
        },
      },
      {
        $group: {
          _id: null,
          totalSalesAmt: { $sum: "$price" },
        },
      },
    ])
      .then((result) => {
        console.log("Total sales amount for the desired month:", result);
        res.json({ totalSalesAmountForGivenMonth: result[0]?.totalSalesAmt });
      })
      .catch((error) => {
        console.error(
          "Error occurred while fetching total sales amount:",
          error
        );
      });
  } catch (error) {
    console.log("error occured getting total sales amount: ", error.message);
  }
};

module.exports = getTotalSalesAmtOfMonth;
