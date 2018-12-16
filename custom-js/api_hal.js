

// On page ready:
$(document).ready(function(){
    $.getJSON("https://api.archives-ouvertes.fr/search/?q=authIdHal_s:pierre-jacob&wt=json&fl=authFullName_s,title_s,conferenceTitle_s,producedDateY_i,uri_s&sort=producedDateY_i+desc", function(publications_query){
    publications = publications_query.response
    console.log(publications);
    var publications_list = document.getElementById('publications-shower');

    for(var k = 0; k<10;k++) {
    for(var i = 0; i < Object.keys(publications['docs']).length; i++) {
        var new_child = document.createElement('div');
        new_child.className = 'single-portfolio col-sm-4 all';

        var new_title = document.createElement('div');
        new_title.className = 'p-inner';
        var new_title_value = document.createElement("h4");
        new_title_value.appendChild(document.createTextNode(publications['docs'][i]['title_s']));
        new_title.appendChild(new_title_value);

        new_child.appendChild(new_title);

        publications_list.appendChild(new_child);
    }}
    });
});

//<div class="single-portfolio col-sm-4 all vector">
//    <div class="relative">
//        <div class="thumb">
//            <div class="overlay overlay-bg"></div>
//            <img class="image img-fluid" src="img/p1.jpg" alt="">
//        </div>
//        <a href="img/p1.jpg" class="img-pop-up">
//            <div class="middle">
//                <div class="text align-self-center d-flex"><img src="img/preview.png" alt=""></div>
//            </div>
//        </a>
//    </div>
//    <div class="p-inner">
//        <h4>2D Vinyl Design</h4>
//        <div class="cat">vector</div>
//    </div>
//</div>