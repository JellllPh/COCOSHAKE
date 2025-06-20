//Modal
const contactModal = document.getElementById("contactModal");
const messageForm = document.getElementById("messageForm");

function closeModal() {
    document.getElementById("contactModal").style.display = "none";
}

messageForm.addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {
        const response = await fetch("http://localhost:3000/api/messages", {
            method: "POST",
            mode : 'cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message || "Message sent successfully!");
            closeModal();
            messageForm.reset();
        } else {
            alert(result.error || "Failed to send message.");
        }
    } catch (error) {
        console.log(error);
        alert("An error occurred. Check the console");
    }
});

// Klik diluar sidebar untuk menghilangkan nav

const hamburger = document.querySelector("#toggler");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
