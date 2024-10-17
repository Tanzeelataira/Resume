document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("formMessage").textContent = "Message sent successfully!";
        document.getElementById("formMessage").style.color = "green";
    } else {
        document.getElementById("formMessage").textContent = "Please fill out all fields!";
        document.getElementById("formMessage").style.color = "red";
    }
});
