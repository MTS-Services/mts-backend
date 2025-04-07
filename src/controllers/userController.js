const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new user
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: { name, email, password },
    });
    console.log(newUser);
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating user');
  }
};

// Get Single users
const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving users');
  }
};

// Export functions correctly
module.exports = {
  createUser,
  getAllUsers,
};
