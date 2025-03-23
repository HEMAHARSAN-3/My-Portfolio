(function () {
    emailjs.init("JgGVSlfTu9U5uI3Qp"); // Replace with your EmailJS user ID
})();

function sendEmail(event) {
    event.preventDefault();

    emailjs.sendForm('service_4chdkfw', 'template_9nw9f9f', event.target)
        .then(() => {
            alert('Your message has been sent successfully!');
        })
        .catch((error) => {
            alert('Failed to send your message. Please try again.');
            console.error("Email sending failed:", error);
        });
}

document.addEventListener('DOMContentLoaded', function() {
    const projectsContainer = document.getElementById('projects-container');

    // List of projects to exclude
    const excludedProjects = ['BookSky', 'VideoSynthesis', 'NumberSystemConverter', 'Kapilan747', 'Elite','Kapilan747.github.io'];

    // Fetch GitHub repos dynamically
    async function fetchGitHubProjects() {
        const username = 'HEMAHARSAN-3';
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await response.json();

        repos.forEach(repo => {
            // Check if the project is excluded
            if (!excludedProjects.includes(repo.name)) {
                const imageUrl = `https://raw.githubusercontent.com/${username}/${repo.name}/main/img/download.jpg`;
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');

                projectCard.innerHTML = `
                    <img src="${imageUrl}" alt="${repo.name} Image" class="project-image">
                    <h3 class="project-title">${repo.name}</h3>
                    <a href="${repo.html_url}" class="github-link" target="_blank">View on GitHub</a>
                `;

                projectsContainer.appendChild(projectCard);
            }
        });
    }

    fetchGitHubProjects();
});

function openMenu() {
    const nav = document.querySelector('.uls');
    nav.classList.toggle('active');
}


document.addEventListener("DOMContentLoaded", function () {
    const text = `
Hello! I'm Hema Harsan R, a passionate B.Tech student specializing in Artificial Intelligence and Data Science. My journey in technology began at a young age, and I have always been fascinated by the potential of AI to transform industries and improve lives.I actively engage in various projects that allow me to apply my knowledge in real-world scenarios. I have experience working with Python, R, and various data visualization tools, and I am always eager to learn new technologies and methodologies.    `;
    const typingEffect = document.getElementById("typing-effect");
    let index = 0;

    function type() {
        if (index < text.length) {
            typingEffect.textContent += text[index];
            index++;
            setTimeout(type, 50);
        }
    }

    type();
});


document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("nav");
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    // Change Navbar Background on Scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Toggle Mobile Menu
    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});
