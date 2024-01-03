const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const nodemailer = require('nodemailer');
const sql = require('mssql');
require('dotenv').config();


app.use(express.static('public'));
app.use(express.json());

const config = {
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    enableArithAbort: true,
    encrypt: true,
    trustedConnection: true,
  },
};

const pool = new sql.ConnectionPool(config);
const poolConnect = pool.connect();

poolConnect.then(() => {
  console.log('Connected to SQL Server');
}).catch((err) => {
  console.error('Error connecting to SQL Server:', err);
});

pool.on('error', err => {
  console.error('SQL Server Pool Error:', err);
});

// Event listener for the exit signal
process.on('exit', () => {
  // Close the SQL connection pool
  pool.close(err => {
    if (err) {
      console.error('Error closing pool:', err);
    } else {
      console.log('Pool connections closed');
    }
  });
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD, // Your email password or app-specific password
  },
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/submit-form', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: process.env.EMAIL, // Update with your sender email address
      to: process.env.RECIPIENT_EMAIL, // Update with the recipient's email address
      subject: 'New Contact Form Submission',
      html: `
        <h3>New Contact Form Submission</h3>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email: ', error);
    res.status(500).send('Error sending email.');
  }
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
