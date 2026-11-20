const { createElement } = require("react");

const API_URL = "https://countries.dev/countries";

// Tous les pays reçus de l'API (rempli une seule fois, au chargement)
// let allCountries = [];

// TODO : récupère ici les éléments du DOM dont tu as besoin

/**
 * Récupère tous les pays depuis l'API.
 * - Utilise fetch avec async/await.
 * - Appelée UNE SEULE FOIS, au chargement de la page.
 *
//  * @returns {Promise<Array>} Le tableau de tous les pays.
 */
async function fetchCountries() {
  let response = await fetch(API_URL);
  let countries =  await response.json();

  return countries;

};

/**
 * Crée la carte HTML d'un pays, sur le modèle de la maquette :
 * drapeau (avec un texte alternatif utile), nom, capitale, population.
 *
 * @param {Object} country - Un pays tel que renvoyé par l'API.
 * @returns {HTMLElement} La carte, prête à être ajoutée à la grille.
 */
function createCountryCard(country) {
    let countriesContainer = document.getElementById(countriesContainer);
    let article = document.createElement("div");
    article.innerHTML = " ";

    country.forEach(element => {
        article =+ `
                <article class="country-card bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition duration-300">

                    <img src="${element.flags.svg}"
                        alt="Drapeau du Morocco"
                        class="w-full h-48 object-cover">

                    <div class="p-5">

                        <h3 class="text-xl font-bold text-slate-900 mb-5">
                            Morocco
                        </h3>

                        <div class="country-info flex justify-between items-center border-b border-slate-100 py-3">

                            <p class="text-sm text-slate-500 font-medium">
                                Capitale
                            </p>

                            <span class="font-semibold text-slate-800">
                                Rabat
                            </span>

                        </div>

                        <div class="country-info flex justify-between items-center py-3">

                            <p class="text-sm text-slate-500 font-medium">
                                Population
                            </p>

                            <span class="font-semibold text-blue-700">
                                37 457 971
                            </span>

                        </div>

                    </div>
                </article>

        `;
        
    });
    countriesContainer.append()


    console.log(country);

  // TODO
};

/**
 * Affiche une liste de pays dans la grille.
 * - Vide d'abord la grille (sinon les cartes s'accumulent).
 * - Ajoute une carte par pays.
 * - Si la liste est vide, affiche le message « Aucun pays ne correspond ».
 *
 * @param {Array} countries - Les pays à afficher.
 */
function displayCountries(countries) {
  // TODO
}

/**
 * Applique les deux filtres EN MÊME TEMPS sur allCountries :
 * - le continent choisi dans la liste déroulante ;
 * - le texte saisi dans la recherche (majuscules et minuscules ignorées).
 * Puis affiche le résultat avec displayCountries().
 *
 * Aucune requête vers l'API ici !
 */
function filterCountries() {
  // TODO
}


// ------------------------------------------------------------
// BONUS
// ------------------------------------------------------------

/**
 * (Bonus) Trie des pays par population, du plus peuplé au moins peuplé.
 * Attention : ne modifie pas le tableau allCountries d'origine.
 *
 * @param {Array} countries
 * @returns {Array} Un nouveau tableau trié.
 */
function sortByPopulation(countries) {
  // TODO
}

/**
 * (Bonus) Affiche ou masque le message « Chargement des pays… ».
 *
 * @param {boolean} isLoading - true pour l'afficher, false pour le masquer.
 */
function showLoader(isLoading) {
  // TODO
}

/**
 * (Bonus) Affiche un message d'erreur clair quand l'API ne répond pas.
 *
 * @param {string} message
 */
function showError(message) {
  // TODO
}


// ------------------------------------------------------------
// DÉMARRAGE
// ------------------------------------------------------------

/**
 * Point d'entrée de l'application :
 * 1. récupère les pays avec fetchCountries() et les stocke dans allCountries ;
 * 2. affiche les pays du continent sélectionné par défaut ;
 * 3. écoute les changements de continent et la saisie dans la recherche.
 *
 * (Bonus) Gère le chargement et les erreurs avec try...catch.
 */
async function init() {
    let countryList = await fetchCountries();
    console.log(countryList);
    
    createCountryCard(countryList)
    

  // TODO
}

init();