document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("header").innerHTML = `
        <header>
            <a href="index.html">
                <img src="https://lubavitchyeshiva.org/media/images/1310/QwiB13106920.png" class="logo" alt="School Logo">
            </a>
            <nav>
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
                <a href="login.html">Secure Login</a>
            </nav>
        </header>
    `;

    document.getElementById("footer").innerHTML = `
        <footer>
            <p>&copy; 2025 Lubavitch Yeshiva. All Rights Reserved.</p>
        </footer>
    `;
});
