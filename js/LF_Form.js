 // JavaScript code to handle form submission, storage, and display
 document.getElementById("lf-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);

    // Store data in cookies
    document.cookie = "petType=" + formData.get("petType");
    document.cookie = "applicantName=" + formData.get("applicantName");
    document.cookie = "desc=" + formData.get("desc");
    document.cookie = "address=" + formData.get("address");
    document.cookie = "email=" + formData.get("email");
    document.cookie = "phone=" + formData.get("phone");

    // Store data in local storage
    localStorage.setItem("petType", formData.get("petType"));
    localStorage.setItem("applicantName", formData.get("applicantName"));
    localStorage.setItem("desc", formData.get("desc"));
    localStorage.setItem("address", formData.get("address"));
    localStorage.setItem("email", formData.get("email"));
    localStorage.setItem("phone", formData.get("phone"));

    // Store data in local storage
    sessionStorage.setItem("petType", formData.get("petType"));
    sessionStorage.setItem("applicantName", formData.get("applicantName"));
    sessionStorage.setItem("desc", formData.get("desc"));
    sessionStorage.setItem("address", formData.get("address"));
    sessionStorage.setItem("email", formData.get("email"));
    sessionStorage.setItem("phone", formData.get("phone"));

    // Display user inputs in the display box
    document.getElementById("display-pet-type").textContent = formData.get("petType");
    document.getElementById("display-applicant-name").textContent = formData.get("applicantName");
    document.getElementById("display-desc").textContent = formData.get("desc");
    document.getElementById("display-address").textContent = formData.get("address");
    document.getElementById("display-email").textContent = formData.get("email");
    document.getElementById("display-phone").textContent = formData.get("phone");

    alert("Successfully submit the details !");

    // Show the display box
    const displayBox = document.getElementById("display-box");
    displayBox.style.display = "block";

});