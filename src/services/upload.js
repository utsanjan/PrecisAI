const fetch = require('node-fetch'); // If using Node.js
const accessToken = 'YOUR_ACCESS_TOKEN';
const filePath = '/path/to/your/file.txt'; // Specify the desired path in your Dropbox folder

fetch('https://content.dropboxapi.com/2/files/upload', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Dropbox-API-Arg': JSON.stringify({
      path: filePath,
      mode: 'add',
      autorename: true,
      mute: false,
    }),
    'Content-Type': 'application/octet-stream',
  },
  body: fileContent,
})
  .then(response => response.json())
  .then(data => {
    const sharedLink = data.path_display; // The shared link to the uploaded file
    console.log('File uploaded successfully:', sharedLink);
  })
  .catch(error => {
    console.error('Error uploading file:', error);
  });



  fetch('https://api.dropboxapi.com/2/sharing/create_shared_link_with_settings', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      path: sharedLink,
      settings: {
        requested_visibility: 'public', // Set visibility to public or shared
      },
    }),
  })
    .then(response => response.json())
    .then(data => {
      const fileUrl = data.url; // The public URL link to the file
      console.log('Shared link:', fileUrl);
    })
    .catch(error => {
      console.error('Error creating shared link:', error);
    });  