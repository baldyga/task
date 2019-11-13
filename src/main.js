import './styles/styles.styl'

function getData() {
    fetch('https://content.guardianapis.com/search?from-date=2019-10-28&to-date=2019-11-11&order-by=newest&use-date=published&page-size=9&api-key=d336af3d-6ecc-4c86-a1d3-2dc36abff6ed')
    .then(response => response.json())
    .then(response => {
        console.log(response);
        for(let i = 0; i < response.response.results.length; i++) {
            const section = document.querySelector('section');
            let article = document.createElement('article');
            section.appendChild(article);

            let sectionName = document.createElement('h2');
            let data = document.createElement('h3');
            let title = document.createElement('h4');
            let a = document.createElement('a');
            a.innerHTML = "Read more";

            article.appendChild(sectionName);
            sectionName.innerHTML = response.response.results[i].sectionName;

            article.appendChild(data);
            data.innerHTML = response.response.results[i].webPublicationDate;
    
            article.appendChild(title);
            title.innerHTML = response.response.results[i].webTitle;
  
            article.appendChild(a);
            a.setAttribute("href", response.response.results[i].webUrl);
            a.setAttribute("target", "_blank")

            let d = new Date();

            function GFG_Fun() { 
                data.innerHTML = d.toISOString().split('T')[0]
            }
            GFG_Fun();
        }
    });
}
getData()

