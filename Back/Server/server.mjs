import express from "express";
import pkg from '@prisma/client';

const {PrismaClient} = pkg;
const prisma = new PrismaClient();
const app = express();
const port = 3001;
const wifi_host = '192.168.1.26';

app.get('/', async (req, res) => {
  var allUsers = await prisma.users.findMany();
  // console.table(allUsers);
  // console.log(req.headers.host);
  
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



app.listen(port, wifi_host, () => {
  console.log(`To see the server, Go to the folloing link :
  http://${wifi_host}:${port}/`);
})