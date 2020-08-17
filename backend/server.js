const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const projectsRouter = require('./routes/projects');
const companiesRouter = require('./routes/companies');
const testsRouter = require('./routes/tests');

app.use('/projects', projectsRouter);
app.use('/companies', companiesRouter);
app.use('/tests', testsRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
