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
    if (filePath.endsWith('.apk')) {
      res.setHeader('Content-Type', 'application/vnd.android.package-archive');
      res.setHeader('Content-Disposition', 'attachment; filename="Sikad.apk"');
    }
  }
}));

// Debug route to check if files exist
app.get('/debug', (req, res) => {
  const fs = require('fs');
  const files = fs.readdirSync('.');
  res.json({
    files: files,
    sikadlogoExists: files.includes('sikadlogo.jpg'),
    apkExists: files.includes('Sikad.apk')
  });
});

// Specific route for APK download to ensure proper mobile download
app.get('/Sikad.apk', (req, res) => {
  const fs = require('fs');
  const apkPath = path.join(__dirname, 'Sikad.apk');
  
  if (fs.existsSync(apkPath)) {
    res.setHeader('Content-Type', 'application/vnd.android.package-archive');
    res.setHeader('Content-Disposition', 'attachment; filename="Sikad.apk"');
    res.setHeader('Content-Transfer-Encoding', 'binary');
    res.sendFile(apkPath);
  } else {
    res.status(404).send('APK file not found');
  }
});

// Handle client-side routing - serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Sikad website is running on port ${port}`);
  console.log(`Static files being served from: ${__dirname}`);
});
