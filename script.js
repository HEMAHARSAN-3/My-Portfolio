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
