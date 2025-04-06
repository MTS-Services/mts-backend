const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const userModel = prisma.users;

module.exports = {
  userModel,
};
