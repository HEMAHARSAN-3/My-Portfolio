
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("active");
});



(function () {
    emailjs.init("JgGVSlfTu9U5uI3Qp"); 
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
    const excludedProjects = ['BookSky', 'VideoSynthesis', 'NumberSystemConverter', 'Kapilan747', 'Elite', 'Kapilan747.github.io'];

    // Fetch GitHub repos dynamically
    async function fetchGitHubProjects() {
        try {
            const username = 'HEMAHARSAN-3';
            const response = await fetch(`https://api.github.com/users/${username}/repos`);
            const repos = await response.json();

            repos.forEach((repo, index) => {
                // Check if the project is excluded
                if (!excludedProjects.includes(repo.name)) {
                    const imageUrl = `https://raw.githubusercontent.com/${username}/${repo.name}/main/img/download.jpg`;
                    const fallbackImage = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
                    
                    const projectCard = document.createElement('div');
                    projectCard.classList.add('project-card');
                    projectCard.style.animationDelay = `${index * 0.1}s`;

                    projectCard.innerHTML = `
                        <img src="${imageUrl}" alt="${repo.name} Image" class="project-image" onerror="this.src='${fallbackImage}'">
                        <h3 class="project-title">${repo.name.replace(/-/g, ' ')}</h3>
                        <p class="project-description">${repo.description || 'A personal project showcasing my development skills.'}</p>
                        <a href="${repo.html_url}" class="github-link" target="_blank" aria-label="View ${repo.name} on GitHub">
                            <i class="fab fa-github"></i> View Project
                        </a>
                    `;

                    projectsContainer.appendChild(projectCard);
                }
            });
        } catch (error) {
            console.error('Error fetching GitHub projects:', error);
            projectsContainer.innerHTML = `
                <div class="error-message">
                    <p>Unable to load projects at this time. Please check back later or visit my <a href="https://github.com/HEMAHARSAN-3" target="_blank">GitHub profile</a> directly.</p>
                </div>
            `;
        }
    }

    fetchGitHubProjects();
});

function openMenu() {
    const nav = document.querySelector('.uls');
    nav.classList.toggle('active');
}
