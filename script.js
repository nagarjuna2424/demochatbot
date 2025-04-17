// script.js
function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return; // Don't send if input is empty
  
    // Display the user's message
    displayMessage(userInput, "user");
  
    // Simulate bot's response
    setTimeout(() => {
      const botResponse = getBotResponse(userInput);
      displayMessage(botResponse, "bot");
    }, 1000);
  
    // Clear the input field
    document.getElementById("user-input").value = "";
  }
  
  function displayMessage(message, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", `${sender}-message`);
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
  }
  
  function getBotResponse(userInput) {
    // Simple responses for demonstration
    const lowerCaseInput = userInput.toLowerCase();
    if (lowerCaseInput.includes("hello")) {
      return "Hi! How can I assist you today?";
    } else if (lowerCaseInput.includes("how are you")) {
      return "I'm just a bot, but I'm doing great! How about you?";
    } else if (lowerCaseInput.includes("bye")) {
      return "Goodbye! Have a great day!";
    } else {
      return "Sorry, I didn't understand that.";
    }
  }
  