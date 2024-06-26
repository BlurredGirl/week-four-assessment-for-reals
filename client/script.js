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
      const namePara = document.createElement("p"); 
      const p = document.createElement("p");

      // Set the text content of the paragraph to the message text
      namePara.textContent = message.name; 
      p.textContent = message.message; 
console.log(p.textContent);


      // Append the paragraph to the list item
      li.appendChild(namePara);
      li.appendChild(p);
      

      // Append the list item to the messages list
      messagesList.appendChild(li);
      messagesList.appendChild(li);
    });
  }

// Event listener for form submission
document.getElementById("messageForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  // Get the message from the input field
  const nameInput = document.getElementById("nameInput");
  const yourName = event.target.name.value; // CHANGED - ADDED event.target.yourName
  const messageInput = document.getElementById("messageInput");
  const message = event.target.message.value; // CHANGED - ADDED event.target.message
  console.log({nameInput, messageInput, yourName, message}) 


    // Send the message to the API - // replace with Render URL at the end before submission
    await fetch("https://week-four-assessment-for-reals.onrender.com/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: yourName, message:message}), // add more input into curly braces - DONE?
    });

// Fetch messages when the page loads
getMessages();
  })
