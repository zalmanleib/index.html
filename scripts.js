document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("header").innerHTML = `
        <header>
            <h1>School Name</h1>
            <nav>
                <a href="index.html">Home</a> |
                <a href="about.html">About</a> |
                <a href="contact.html">Contact</a> |
                <a href="login.html">Secure Login</a>
            </nav>
        </header>
    `;

    document.getElementById("footer").innerHTML = `
        <footer>
            <p>&copy; 2025 School Name. All Rights Reserved.</p>
        </footer>
    `;
});
