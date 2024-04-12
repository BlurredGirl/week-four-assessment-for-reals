const messagesList = document.getElementById("messagesList");

// Get messages from the API
async function getMessages() {
    const response = await fetch("https://week-four-assessment-for-reals.onrender.com/messages"); // Change to Render SERVER URL before submitting
    const messages = await response.json();
console.log(messages)


    // Iterate through the messages and append them to the list
    messages.forEach(function (message) {
      // Create elements for message display
      const li = document.createElement("li");
      const p = document.createElement("p");

      // Set the text content of the paragraph to the message text
      p.textContent = message.text;

      // Append the paragraph to the list item
      li.appendChild(p);

      // Append the list item to the messages list
      messagesList.appendChild(li);
    });
  }

// Event listener for form submission
document.getElementById("messageForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  // Get the message from the input field
  const nameInput = document.getElementById("nameInput");
  console.log({nameInput, messageInput, yourName, message})  // See the input value in the console log (34 and 36 are missing bits)
  const yourName = nameInput.target.yourName.value; // CHANGED - ADDED .target.yourName
  const messageInput = document.getElementById("messageInput");
  const message = messageInput.target.message.value; // CHANGED - ADDED .target.message

    // Send the message to the API - // replace with Render URL at the end before submission
    await fetch("https://week-four-assessment-for-reals.onrender.com/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ yourName: nameInput, messageInput: message }), // add more input into curly braces - DONE?
    });

    // Clear the input field
    messageInput.value = "";

// Fetch messages when the page loads
fetchMessages();
  })
