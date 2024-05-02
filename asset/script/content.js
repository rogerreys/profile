document.addEventListener("DOMContentLoaded", function () {
    // console.log("dict: "+ dict["intro"]["title"])
    intro();
    infoAboutMe();
    skill();
    project();
    contact();
});

function intro() {
    let intro = '';
    intro += "<h3 class='text-end'><a href='#intro'>" + dict.intro.title + "</a></h2>";
    intro += "<p class='text-end'>" + dict.intro.description + "</p>";
    // Agregar el HTML al div con id "content"
    document.getElementById('intro').innerHTML = intro;
}

function infoAboutMe() {
    let text_inf = `<div class='container text-center'> 
        <h3 class='text-center'><a href='#AboutMe'>${dict.aboutMe.title}</a></h2>
        <div>${dict.aboutMe.description}</div>
        <img class='img-fluid' src="${dict.aboutMe.img}"/>
    </div>`;

    let infoAboutMe = document.getElementsByClassName('infoAboutMe')[0];
    infoAboutMe.innerHTML = text_inf
}

function skill() {
    let content = '';
    let long = Object.keys(dict.skill).length - 1
    let text = `<div class='container'>`;
    text = `<h3 class="text-center"><a href="#AboutMe">${dict["skill"]["title"]}</a></h2>`;
    text += `<div class="container text-center">`

    for (var key in dict.skill) {
        if (dict.skill.hasOwnProperty(key)) {

            var aRow = (parseInt(key) % 2 == 0 || parseInt(key) == long);
            var item = dict.skill[key];

            content += `<div class="col-6">
                <h3>${item.title}</h3>
                <ul><li>${item.description}</li></ul>
            </div>`;


            text += aRow ? '<div class="row">' + content + `</div>` : '';
            content = aRow ? '' : content;
        }
    }
    text += '</div></div>';

    let skill = document.getElementsByClassName('skill')[0];
    skill.innerHTML = text
}

function project() {
    let text = '';
    let active = true;
    text += `<h2><a href="#Project">${dict.project.title}</a></h2>`;

    text += `<div id="carouselExampleCaptions" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-inner">`;
    for (var key in dict.project) {

        if (dict.project.hasOwnProperty(key) && (parseInt(key) % 1) == 0) {
            var item = dict.project[key];

            text += `<div class="carousel-item ${(active) ? 'active' : ''}" data-bs-interval="3000">
                <img src="${item.img}" class="d-block mx-auto" alt="${item.alt}">
                <div class="carousel-caption d-none d-md-block border rounded-3 transparent">
                
                    <h5 class="${item.color ? item.color : 'text-white'} d-block">${item.title}</h5>
                    <p class="${item.color ? item.color : 'text-white'}">${item.description}</p>
                    <a href="${item.link}" class="btn btn-danger stretched-link active" target="_blank">Ver pagina</a>
                </div>
            </div>`;
            active = false;
        }
    }
    text += `</div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>`;
    text += `<p>Más proyectos próximamente...</p>`

    let project = document.getElementById('project');
    project.innerHTML = text

    projectCarouselImg();
}

function projectCarouselImg(){
    let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    let heightImg = `${height - (height/6)}px`;
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let widthImg = `${width - (width/5)}px`;
    var imagenes = document.querySelectorAll('.carousel-item img');
    
    imagenes.forEach(function(imagen) {
        imagen.style.height = heightImg;
        imagen.style.width = widthImg;
    });
}

function contact() {
    let text = `<div class='container text-center'>`;
    text += `<h2><a href="#Contact">${dict.contact.title}</a></h2>`;
    text += `<div class="container text-center">`
    text += `<div class="row">`;

    for (var key in dict.contact) {
        if (dict.contact.hasOwnProperty(key) && (parseInt(key) % 1) == 0) {

            var item = dict.contact[key];

            text += `<div class="col">
            <nav>
                <ul>
                    <li><a target="_blank" href="${item.link}">
                            <img src="${item.img}" alt="${item.page}"><br>
                            <p>${item.nickname}</p>
                        </a>
                    </li>                      
                </ul>
            </nav>
        </div>`;
        }
    }
    text += '</div></div></div>';

    let contact = document.getElementById('contact');
    contact.innerHTML = text
}