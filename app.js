const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api/users', userRoutes);

// Route to download PDF
app.get('/download-pdf', (req, res) => {
  const pdfPath = path.join(__dirname, 'public/pdfs/catalog.pdf');
  res.download(pdfPath, 'catalog.pdf', (err) => {
    if (err) {
      console.error('Error downloading PDF:', err);
      res.status(500).send('Error downloading PDF');
    }
  });
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder to serve React's build files
  app.use(express.static(path.join(__dirname, 'client', 'build')));

  // For any route that doesn't match an API route, serve index.html
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/pdfs', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Start the server
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
