const messagesList = document.getElementById("messagesList");

// Function to fetch messages from the API
async function fetchMessages() {
  try {
    // Fetch messages from the API
    const response = await fetch("/api/messages");
    const messages = await response.json();

    // Clear the existing messages from the list
    messagesList.innerHTML = "";

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
  } catch (error) {
    console.error("Error fetching messages:", error);
  }
}

// Event listener for form submission
document.getElementById("messageForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  // Get the message from the input field
  const messageInput = document.getElementById("messageInput");
  const message = messageInput.value;

  try {
    // Send the message to the API
    await fetch("/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    // Clear the input field
    messageInput.value = "";

    // Fetch and display updated messages
    await fetchMessages();
  } catch (error) {
    console.error("Error posting message:", error);
  }
});

// Fetch messages when the page loads
fetchMessages();
