// DOM - Document Object Model

//Définir l'interface

const form = document.querySelector('#course-form'),
    listeTache = document.querySelector('.collection'),
    supprimerListe = document.querySelector('.supprimer-course'),
    contenuTache = document.querySelector('#contenuTache'),
    filtrer = document.querySelector('#filter');

//Application

maListedeTache()


function maListedeTache() {
    //ajouter un évènement
    form.addEventListener('submit', ajouterUneTache);

    //supprimer une tache
    listeTache.addEventListener('click', supprimerUneTache);
    
    //nettoyer la liste de tache
    supprimerListe.addEventListener('click', nettoyerLaListe);

    //filtrer les taches
    filtrer.addEventListener("keyup", filtrerlestaches)

}

//Ajouter une tache

function ajouterUneTache(e) {
    if (contenuTache.value === '') {
        alert('ajouter une tache')
    }

    //ajouter une balise

    const li = document.createElement('li');

    //ajouter une class dans <li>
    li.className = "collection-item";

    //relier le contenu dans <li>
    li.appendChild(document.createTextNode(contenuTache.value));

    //créer le lien
    const link = document.createElement('a');

    link.className = 'delete-item secondary-content';

    //ajouter l'icone
    link.innerHTML = '<ion-icon name="close-circle"></ion-icon>';

    //relier <a> dans le <li>
    li.appendChild(link);

    //relier <li> à <ul>
    listeTache.appendChild(li);

    contenuTache.value = '';


    e.preventDefault()
}

//supprimer une tache

function supprimerUneTache(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove();
    }


}

//nettoyer la liste

function nettoyerLaListe(){
    listeTache.innerHTML = ''

}

//filtrer

function filtrerlestaches (e) {
    const contenuClavier = e.target.value;

    document.querySelectorAll('.collection-item').forEach(
        function(tache){
            const motCle = tache.firstChild.textContent;
            if(motCle.toLocaleLowerCase().indexOf(contenuClavier) != -1) {
                tache.getElementsByClassName.display = 'block'
            } else {
                tache.style.display = 'none'
            }
        }
    )
    console.log(contenuClavier);
}