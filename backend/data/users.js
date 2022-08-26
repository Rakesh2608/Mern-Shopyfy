import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin user",
    email: "admin@eample.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Rakesh",
    email: "rakesh@eample.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "John Doe",
    email: "john@eample.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
