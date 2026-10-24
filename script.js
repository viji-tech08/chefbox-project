
/* 1. Mobile Navigation */

var menuToggle = document.getElementById("menu-toggle");
var navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Close navigation menu");
    } else {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    }
});

/* Close mobile menu when a navigation link is clicked */

var navItems = navLinks.querySelectorAll("a");

navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});


/* 2. Home Page Recipe Search */

var searchForm = document.getElementById("recipe-search");
var searchInput = document.getElementById("search-input");
var recipeCards = document.querySelectorAll(".recipe-card");
var noResults = document.getElementById("no-results");

function searchRecipes() {
    var searchText = searchInput.value.toLowerCase().trim();
    var foundRecipes = 0;

    recipeCards.forEach(function (card) {
        var recipeName = card.querySelector("h3").textContent.toLowerCase();
        var recipeDetails = card.getAttribute("data-search").toLowerCase();

        if (
            searchText === "" ||
            recipeName.includes(searchText) ||
            recipeDetails.includes(searchText)
        ) {
            card.style.display = "block";
            foundRecipes++;
        } else {
            card.style.display = "none";
        }
    });

    if (foundRecipes === 0) {
        noResults.hidden = false;
    } else {
        noResults.hidden = true;
    }
}

/* Search when the form is submitted */

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    searchRecipes();

    document.getElementById("recommendations").scrollIntoView({
        behavior: "smooth"
    });
});

/* Update recipe cards as the user types */

searchInput.addEventListener("input", function () {
    searchRecipes();
});
