const langToggle = document.querySelector("#language-toggle")
const currentLang = window.location.href.includes("indexenglish.html")
langToggle.checked = currentLang

function changeLanguage(language) {
    if(langToggle.checked){
        window.location.href = 'indexenglish.html';
    }else{
        window.location.href = 'index.html';
    }
}

langToggle.addEventListener('change', changeLanguage)

export default changeLanguage

