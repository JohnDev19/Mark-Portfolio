    document.addEventListener('DOMContentLoaded', () => {
      const navItems = document.querySelectorAll('.nav-item');
      const sections = document.querySelectorAll('.section');

      navItems.forEach(item => {
        item.addEventListener('click', (e) => {
          e.preventDefault();

          const targetSection = item.getAttribute('data-section');

          navItems.forEach(navItem => navItem.classList.remove('active'));
          item.classList.add('active');

          const currentSection = document.querySelector('.section.active');
          currentSection.classList.remove('active');

          sections.forEach(section => {
            if (section.id === targetSection) {
              setTimeout(() => {
                section.classList.add('active');
              }, 50);
            }
          });
        });
      });

      const detailsToggle = document.getElementById('detailsToggle');
      const contactDetails = document.getElementById('contactDetails');

      if (detailsToggle) {
        detailsToggle.addEventListener('click', () => {
          contactDetails.classList.toggle('open');
        });
      }
    });

    document.addEventListener('DOMContentLoaded', () => {
      const selectedOption = document.getElementById('selectedOption');
      const optionsContainer = document.querySelector('.options-container');
      const optionsList = document.querySelectorAll('.option');
      const projectCards = document.querySelectorAll('.project-card');

      selectedOption.addEventListener('click', () => {
        optionsContainer.classList.toggle('show');
      });

      optionsList.forEach(option => {
        option.addEventListener('click', () => {
          const value = option.getAttribute('data-value');
          selectedOption.innerHTML = `${option.textContent} <i class="bi bi-chevron-down"></i>`;
          optionsContainer.classList.remove('show');
          filterProjects(value);
        });
      });

      function filterProjects(filter) {
        projectCards.forEach(card => {
          if (filter === 'all' || card.classList.contains(filter)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      }

      document.addEventListener('click',
        (event) => {
          if (!selectedOption.contains(event.target) && !optionsContainer.contains(event.target)) {
            optionsContainer.classList.remove('show');
          }
        });
    });

    document.querySelectorAll('.faq-item').forEach(item => {
      item.addEventListener('click',
        () => {
          item.classList.toggle('active');
        });
    });
