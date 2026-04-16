// JavaScript functionality for tabs
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// JavaScript functionality for collapsible sections
function toggleCollapse(element) {
    var content = element.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

// Password protection for specific pages
function checkPassword() {
    var password = prompt("Please enter the password:");
    if (password !== "your_password") {
        alert("Access denied.");
        window.location.href = "index.html"; // Redirect to home page
    }
}

// Table of contents generation
function generateTOC() {
    var toc = document.getElementById("toc");
    var headings = document.querySelectorAll("h1, h2, h3");
    headings.forEach(function (heading) {
        var link = document.createElement("a");
        link.href = '#' + heading.id;
        link.textContent = heading.textContent;
        toc.appendChild(link);
    });
}

// Call the TOC generation function on page load
window.onload = generateTOC;
