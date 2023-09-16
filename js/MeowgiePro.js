function openModal1() {
    document.getElementById('modal1').style.display = 'block';
    // Get the text content of the <h2> element
    var h2Text = document.querySelector('#modal1 h2').textContent;
    document.cookie = 'petName=' + encodeURIComponent(h2Text) + '; path=/;';
    localStorage.setItem('petName', encodeURIComponent(h2Text));
    sessionStorage.setItem('petName', encodeURIComponent(h2Text));

    var currentFileName = window.location.pathname.split('/').pop();

    if (currentFileName.includes('Doggie')) {
       
        document.cookie = 'petType=Dog; path=/;';
        localStorage.setItem('petType', 'Dog');
        sessionStorage.setItem('petType', 'Dog');

    } else if (currentFileName.includes('Meow')) {
        
        document.cookie = 'petType=Cat; path=/;';
        localStorage.setItem('petType', 'Cat');
        sessionStorage.setItem('petType', 'Cat');
    }
}
function closeModal1() {
    document.getElementById('modal1').style.display = 'none';
}
const learnmore1 = document.querySelectorAll('.learnmore-button-1');

learnmore1.forEach((button) => {
    button.addEventListener('click', () => {
        openModal1(); 
    });
});

function openModal2() {
    document.getElementById('modal2').style.display = 'block';
    // Get the text content of the <h2> element
    var h2Text = document.querySelector('#modal2 h2').textContent;
    document.cookie = 'petName=' + encodeURIComponent(h2Text) + '; path=/;';
    localStorage.setItem('petName', encodeURIComponent(h2Text));
    sessionStorage.setItem('petName', encodeURIComponent(h2Text));

    var currentFileName = window.location.pathname.split('/').pop();

    if (currentFileName.includes('Doggie')) {
       
        document.cookie = 'petType=Dog; path=/;';
        localStorage.setItem('petType', 'Dog');
        sessionStorage.setItem('petType', 'Dog');

    } else if (currentFileName.includes('Meow')) {
        
        document.cookie = 'petType=Cat; path=/;';
        localStorage.setItem('petType', 'Cat');
        sessionStorage.setItem('petType', 'Cat');
    }
}

// Function to close the modal
function closeModal2() {
    document.getElementById('modal2').style.display = 'none';
}
const learnmore2 = document.querySelectorAll('.learnmore-button-2');

learnmore2.forEach((button) => {
    button.addEventListener('click', () => {
        openModal2(); 
    });
});

function openModal3() {
    document.getElementById('modal3').style.display = 'block';
    // Get the text content of the <h2> element
    var h2Text = document.querySelector('#modal3 h2').textContent;
    document.cookie = 'petName=' + encodeURIComponent(h2Text) + '; path=/;';
    localStorage.setItem('petName', encodeURIComponent(h2Text));
    sessionStorage.setItem('petName', encodeURIComponent(h2Text));

    var currentFileName = window.location.pathname.split('/').pop();

    if (currentFileName.includes('Doggie')) {
       
        document.cookie = 'petType=Dog; path=/;';
        localStorage.setItem('petType', 'Dog');
        sessionStorage.setItem('petType', 'Dog');

    } else if (currentFileName.includes('Meow')) {
        
        document.cookie = 'petType=Cat; path=/;';
        localStorage.setItem('petType', 'Cat');
        sessionStorage.setItem('petType', 'Cat');
    }
}

// Function to close the modal
function closeModal3() {
    document.getElementById('modal3').style.display = 'none';
}
const learnmore3 = document.querySelectorAll('.learnmore-button-3');

learnmore3.forEach((button) => {
    button.addEventListener('click', () => {
        openModal3(); 
    });
});

function openModal4() {
    document.getElementById('modal4').style.display = 'block';
    // Get the text content of the <h2> element
    var h2Text = document.querySelector('#modal4 h2').textContent;
    document.cookie = 'petName=' + encodeURIComponent(h2Text) + '; path=/;';
    localStorage.setItem('petName', encodeURIComponent(h2Text));
    sessionStorage.setItem('petName', encodeURIComponent(h2Text));

    var currentFileName = window.location.pathname.split('/').pop();

    if (currentFileName.includes('Doggie')) {
       
        document.cookie = 'petType=Dog; path=/;';
        localStorage.setItem('petType', 'Dog');
        sessionStorage.setItem('petType', 'Dog');

    } else if (currentFileName.includes('Meow')) {
        
        document.cookie = 'petType=Cat; path=/;';
        localStorage.setItem('petType', 'Cat');
        sessionStorage.setItem('petType', 'Cat');
    }
}

// Function to close the modal
function closeModal4() {
    document.getElementById('modal4').style.display = 'none';
}
const learnmore4 = document.querySelectorAll('.learnmore-button-4');

learnmore4.forEach((button) => {
    button.addEventListener('click', () => {
        openModal4(); 
    });
});

function openModal5() {
    document.getElementById('modal5').style.display = 'block';
    // Get the text content of the <h2> element
    var h2Text = document.querySelector('#modal5 h2').textContent;
    document.cookie = 'petName=' + encodeURIComponent(h2Text) + '; path=/;';
    localStorage.setItem('petName', encodeURIComponent(h2Text));
    sessionStorage.setItem('petName', encodeURIComponent(h2Text));

    var currentFileName = window.location.pathname.split('/').pop();

    if (currentFileName.includes('Doggie')) {
       
        document.cookie = 'petType=Dog; path=/;';
        localStorage.setItem('petType', 'Dog');
        sessionStorage.setItem('petType', 'Dog');

    } else if (currentFileName.includes('Meow')) {
        
        document.cookie = 'petType=Cat; path=/;';
        localStorage.setItem('petType', 'Cat');
        sessionStorage.setItem('petType', 'Cat');
    }
}

// Function to close the modal
function closeModal5() {
    document.getElementById('modal5').style.display = 'none';
}
const learnmore5 = document.querySelectorAll('.learnmore-button-5');

learnmore5.forEach((button) => {
    button.addEventListener('click', () => {
        openModal5(); 
    });
});

function openModal6() {
    document.getElementById('modal6').style.display = 'block';
    // Get the text content of the <h2> element
    var h2Text = document.querySelector('#modal6 h2').textContent;
    document.cookie = 'petName=' + encodeURIComponent(h2Text) + '; path=/;';
    localStorage.setItem('petName', encodeURIComponent(h2Text));
    sessionStorage.setItem('petName', encodeURIComponent(h2Text));

    var currentFileName = window.location.pathname.split('/').pop();

    if (currentFileName.includes('Doggie')) {
       
        document.cookie = 'petType=Dog; path=/;';
        localStorage.setItem('petType', 'Dog');
        sessionStorage.setItem('petType', 'Dog');

    } else if (currentFileName.includes('Meow')) {
        
        document.cookie = 'petType=Cat; path=/;';
        localStorage.setItem('petType', 'Cat');
        sessionStorage.setItem('petType', 'Cat');
    }
}

// Function to close the modal
function closeModal6() {
    document.getElementById('modal6').style.display = 'none';
}
const learnmore6 = document.querySelectorAll('.learnmore-button-6');

learnmore6.forEach((button) => {
    button.addEventListener('click', () => {
        openModal6(); 
    });
});