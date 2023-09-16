 // Function to retrieve the value of a cookie by its name
function getCookie(cookieName) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName + '=') === 0) {
            return decodeURIComponent(cookie.substring(cookieName.length + 1));
        }
    }
    return null;
}

// Get the value of petName, petType
var petName = getCookie('petName');
var petType = getCookie('petType');

// Set the value of the text field with cookies
if (petName) {
    document.getElementById('pet-name').value = petName;
}

if (petType) {
    document.getElementById('pet-type').value = petType;
}

 // JavaScript code to handle form submission, storage, and display
 document.getElementById("adoption-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);

    // Store data in cookies
    document.cookie = "numPets=" + formData.get("numPets");
    document.cookie = "petType=" + formData.get("petType");
    document.cookie = "petName=" + formData.get("petName");
    document.cookie = "applicantName=" + formData.get("applicantName");
    document.cookie = "gender=" + formData.get("gender");
    document.cookie = "age=" + formData.get("age");
    document.cookie = "address=" + formData.get("address");
    document.cookie = "email=" + formData.get("email");
    document.cookie = "phone=" + formData.get("phone");

    // Store data in local storage
    localStorage.setItem("numPets", formData.get("numPets"));
    localStorage.setItem("petType", formData.get("petType"));
    localStorage.setItem("petName", formData.get("petName"));
    localStorage.setItem("applicantName", formData.get("applicantName"));
    localStorage.setItem("gender", formData.get("gender"));
    localStorage.setItem("age", formData.get("age"));
    localStorage.setItem("address", formData.get("address"));
    localStorage.setItem("email", formData.get("email"));
    localStorage.setItem("phone", formData.get("phone"));

    // Store data in session storage
    sessionStorage.setItem("numPets", formData.get("numPets"));
    sessionStorage.setItem("petType", formData.get("petType"));
    sessionStorage.setItem("petName", formData.get("petName"));
    sessionStorage.setItem("applicantName", formData.get("applicantName"));
    sessionStorage.setItem("gender", formData.get("gender"));
    sessionStorage.setItem("age", formData.get("age"));
    sessionStorage.setItem("address", formData.get("address"));
    sessionStorage.setItem("email", formData.get("email"));
    sessionStorage.setItem("phone", formData.get("phone"));

    // Display user inputs in the display box
    document.getElementById("display-num-pets").textContent = formData.get("numPets");
    document.getElementById("display-pet-type").textContent = formData.get("petType");
    document.getElementById("display-pet-name").textContent = formData.get("petName");
    document.getElementById("display-applicant-name").textContent = formData.get("applicantName");
    document.getElementById("display-gender").textContent = formData.get("gender");
    document.getElementById("display-age").textContent = formData.get("age");
    document.getElementById("display-address").textContent = formData.get("address");
    document.getElementById("display-email").textContent = formData.get("email");
    document.getElementById("display-phone").textContent = formData.get("phone");

    alert("Successfully submit the details !");

    // Show the display box
    const displayBox = document.getElementById("display-box");
    displayBox.style.display = "block";

});