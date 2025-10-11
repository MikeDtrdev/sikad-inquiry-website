const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the current directory with explicit MIME types
app.use(express.static('.', {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
      res.setHeader('Content-Type', 'image/jpeg');
    }
    if (filePath.endsWith('.png')) {
      res.setHeader('Content-Type', 'image/png');
    }
    if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
    if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

// Debug route to check if files exist
app.get('/debug', (req, res) => {
  const fs = require('fs');
  const files = fs.readdirSync('.');
  res.json({
    files: files,
    sikadlogoExists: files.includes('sikadlogo.jpg')
  });
});

// Handle client-side routing - serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Sikad website is running on port ${port}`);
  console.log(`Static files being served from: ${__dirname}`);
});
