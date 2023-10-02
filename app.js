const express = require('express');
const app = express();
const cors = require('cors');
const { prisma } = require('./config/prisma');
const logger = require('./middleware/logger');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger);

app.get('/', async (req, res) => {
  res.send('Hello World!');
});


app.get('/messages', async (req, res) => {
  const messages = await prisma.message.findMany();
  res.status(200).json({
    message: "Messages retrieved successfully",
    data: messages
  })
});

app.post('/messages', async (req, res) => {
  console.log(req.body)
  const { name, message } = req.body;
  const newMessage = await prisma.message.create({
    data: {
      name,
      message
    }
  });
  res.status(201).json({
    message: "Message added successfully",
    data: newMessage
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});