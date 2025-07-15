const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

mongoose.connect('mongodb://mongo-service:27017/fullstackdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Message = mongoose.model('Message', { text: String });

app.get('/api/messages', async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

app.listen(3001, () => console.log('Backend running on port 3001'));