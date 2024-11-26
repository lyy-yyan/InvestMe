/**
 * This file is responsible for fetching and displaying the projects data from the JSON file.
 */
document.addEventListener('DOMContentLoaded', function() {
    fetch('../json/projects.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('grid-container');
            data.forEach(project => {
                const card = document.createElement('div');
                card.className = 'grid-item';

                const image = document.createElement('img');
                image.src = project.image;
                card.appendChild(image);

                const description = document.createElement('p');
                description.textContent = project.description;
                card.appendChild(description);
                
                const title = document.createElement('h2');
                title.textContent = project.title;
                card.appendChild(title);
                
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading projects:', error));
});
