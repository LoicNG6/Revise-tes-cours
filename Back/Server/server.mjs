import express from "express";
import pkg from '@prisma/client';

const {PrismaClient} = pkg;
const prisma = new PrismaClient();
const app = express();
const port = 3001;

app.get('/', async (req, res) => {
  var allUsers = await prisma.users.findMany();
  console.table(allUsers);
  res.send(allUsers);
})

app.get('/create', async (req, res) => {
  const user = await prisma.users.create({
    data: {
      email: "chris@hotmail.com",
      firstname:"chris",
      lastname:"WILL",
    },
  });
  res.json(user);
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}.
  Go to the folloing link : http://localhost:${port}/`);
})