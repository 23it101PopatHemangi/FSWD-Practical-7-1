const connectDB = require("./db");
const User = require("./User");

const addUser = async () => {
  await connectDB();

  const newUser = new User({
    name: "Popat Hemangi ",
    email: "hemangipopat@gmail.com",
    age: 20,
  });

  try {
    await newUser.save();
    console.log("User added successfully:", newUser);
  } catch (error) {
    console.error("Error adding user:", error);
  }
};

addUser();

