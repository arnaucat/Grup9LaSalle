
const newsContainer = document.getElementById('news-container');
const spinner = document.getElementById('spinner');

setTimeout(function(){
      console.log("tempo 5 segons");
   
  fetch('https://www.elmundotoday.com/wp-json/wp/v2/posts')
    .then(response => response.json())
    .then(data => {

      spinner.style.display = 'none';

      
      data.forEach(article => {
        const articleHTML = `
          <h2>${article.title.rendered}</h2>
          <p>${article.excerpt.rendered}</p>
          <a href="${article.link}" target="_blank">leer mas</a>
        `;
        newsContainer.innerHTML += articleHTML;
      });
    })
    .catch(error => console.error(error));
}, 1000);
