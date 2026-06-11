fetch('data/blog.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('blog-container');

    data.forEach(post => {
      const card = document.createElement('div');
      card.classList.add('blog-card');

      card.innerHTML = `
        <div class="blog-card-content">
            <h3>${post.titulo}</h3>
            <p>${post.descripcion}</p>
            <a class="btn" href="${post.url}">Leer más</a>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.log('Error cargando blog:', error));
