const connectDB = require('./db');
const User = require('./User');

const fetchUsers = async () => {
  await connectDB();
  try {
    const users = await User.find();
    console.log("All Users:", users);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

fetchUsers();

