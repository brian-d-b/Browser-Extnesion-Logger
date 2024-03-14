// background.js
browser.runtime.onMessage.addListener((message) => {
  console.log("Received message:", message);

  // Determine the endpoint URL
  const url = 'http://192.168.1.9:1234'; // Ensure this is accessible from the browser

  // Prepare the data for sending
  const data = { type: message.type, url: message.url, text: message.text };
  console.log("Preparing to send data to server:", data);

  // Attempt to send data to the server using fetch
  fetch(url, {
      method: 'POST', // Using POST method
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  })
  .then(response => {
      console.log(`Response status: ${response.status} ${response.statusText}`);
      return response.text();
  })
  .then(data => {
      console.log('Server response:', data);
  })
  .catch((error) => {
      console.error('Fetch error:', error);
  });
});
