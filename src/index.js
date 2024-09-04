const express = require('express');
const contactRoutes = require('./routes/contactRoutes.js');

const app = express();
app.use(express.json()); 


app.use('/contacts', contactRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
