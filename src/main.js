import './styles/styles.styl'

function getData() {
    fetch('https://content.guardianapis.com/search?section=sport&from-date=2019-10-28&to-date=2019-11-11&order-by=newest&use-date=published&show-elements=all&page-size=10&q=football&api-key=d336af3d-6ecc-4c86-a1d3-2dc36abff6ed')
    .then(response => response.json())
    .then(response => {
        console.log(response);

        for(let i = 0; i < 10; i++) {
            let resSection = response.response.results[i].sectionName;
            let resData = response.response.results[i].webPublicationDate;
            let resTitle = response.response.results[i].webTitle;
            // let resBtn = response.response.results[i].webUrl;

            const section = document.querySelector('section');
            let article = document.createElement('article');
            section.appendChild(article);

            let sectionName = document.createElement('h2');
            let data = document.createElement('h3');
            let title = document.createElement('h4');
            let btn = document.createElement('button');
            btn.innerHTML = "Read more";

            article.appendChild(sectionName);
            sectionName.innerHTML = (`Sekcja: ` + resSection);

            article.appendChild(data);
            data.innerHTML = resData;
    
            article.appendChild(title);
            title.innerHTML = resTitle;
  
            article.appendChild(btn);
            // btn.innerHTML = resBtn;
        }
    });
}
getData()