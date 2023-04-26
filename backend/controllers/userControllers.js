import User from "../models/User.js";

export const getUsers = async (req, res) => {
  try {
    const users2 = await User.find()
   
    const users = await User.find({
      income: { $lt: '5' },
      car: { $in: ['BMW', 'Mercedes-Benz'] }
    }).exec();
    
   
    if (users) {
      res.status(200).send({
        message: "Users found",
        users,
        // users2
      });
    } else {
      res.status(400).send({
        message: "No users",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error in getting users",
      error,
    });
  }
};

export const getMaleOnPhone = async (req, res) => {
  try {
    const users = await User.find({
      gender: "Male",
      $expr: { $gt: [{ $toInt: "$phone_price" }, 10000] },
    });

    if (users) {
      res.status(200).send({
        message: "Users found",
        users,
      });
    } else {
      res.status(400).send({
        message: "No users",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error in getting users",
      error,
    });
  }
};

export const getUsersOnQuote = async (req, res) => {
  try {
    const users = await User.find({
      last_name: /^M/,
      quote: { $exists: true, $gte: 15 },
      email: { $regex: /M$/i },
    });

    if (users) {
      res.status(200).send({
        message: "Users found",
        users,
      });
    } else {
      res.status(400).send({
        message: "No users",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error in getting users",
      error,
    });
  }
};

export const getUserNoDigitEmail = async (req, res) => {
  try {
    const users = await User.find({
      car: { $in: ["BMW", "Mercedes-Benz", "Audi"] },
      email: { $not: { $regex: /\d/ } },
    });

    if (users) {
      res.status(200).send({
        message: "Users found",
        users,
      });
    } else {
      res.status(400).send({
        message: "No users",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error in getting users",
      error,
    });
  }
};

export const getTopCities = async (req, res) => {
  try {
    const users = await User.aggregate(
      [
        {
          $group: {
            _id: '$city',
            count: { $sum: 1 },
            avg_income: { $avg: { $toDouble: "$income" } },
          },
        },
        { $sort: { count: -1 } },
        { $limit: 10 },
      ]
    );

    if (users) {
      res.status(200).send({
        message: "Users found",
        users,
      });
    } else {
      res.status(400).send({
        message: "No users",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error in getting users",
      error,
    });
  }
};
