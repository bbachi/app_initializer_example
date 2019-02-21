const express = require('express');


const app = express();

app.use(express.static(process.cwd()+"/appui/dist/appui/"));

const port = 3070;

const settings = {
    settings:"settings from server", 
    title: "APP_UI", 
    fullName: "Bhargav Bachina", 
    pageWidth: "60%", 
    text:"This settings coming from the server",
    headerColor: "gray",
    footerColor: "red"
};

app.get('/api/settings', (req,res) => {
    res.json(settings)
})

app.get('/', (req, res) => {
  res.sendFile(process.cwd()+"/appui/dist/appui/index.html")
});


app.listen(port, (err) => {
  if (err) {
    logger.error('Error::', err);
  }
  console.log(`running server on from port:::::::${port}`);
});