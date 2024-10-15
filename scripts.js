let isfeaturesListHiden = true;
let isCompanyListHiden = true;
let showMobileMenue = document.querySelector(".show-links");
let hideMobileMenue = document.querySelector(".close-links");
// ----------------------------------------------
let showMobilefeaturesList = document.getElementById("show-mobile-features-list");
let featuresList = document.getElementById("features-list");
// ----------------------------------------------
let showMobileCompanyList = document.getElementById('show-mobile-company-list');
let CompanyList = document.getElementById('company-list');

showMobileMenue.addEventListener("click",() => {
    console.log("kk")
    document.querySelector(".mobile-container").style.display = "flex";
})
hideMobileMenue.addEventListener("click",() => {
    document.querySelector(".mobile-container").style.display = "none";
})
// ----------------------------------------------
showMobilefeaturesList.addEventListener("click", () => {
    if(isfeaturesListHiden){
        featuresList.style.display = "block";
        showMobilefeaturesList.firstChild.src = "images/icon-arrow-up.svg";
        isfeaturesListHiden = false;
    }else{
        featuresList.style.display = "none";
        showMobilefeaturesList.firstChild.src = "images/icon-arrow-down.svg";
        isfeaturesListHiden = true;
    }
    
})
// ----------------------------------------------
showMobileCompanyList.addEventListener("click", () => {
    if(isCompanyListHiden){
        CompanyList.style.display = "block";
        showMobileCompanyList.firstChild.src = "images/icon-arrow-up.svg";
        isCompanyListHiden = false;
    }else{
        CompanyList.style.display = "none";
        showMobileCompanyList.firstChild.src = "images/icon-arrow-down.svg";
        isCompanyListHiden = true;
    }
    
})
// ---------------------------------------------------

let isDesfeaturesListHiden = true;
let isDesCompanyListHiden = true;
let showfeaturesList = document.getElementById("show-features-list");
let desFeaturesList = document.getElementById("des-fetures");
// ----------------------------------------------
let showCompanyList = document.getElementById('show-company-list');
let desCompanyList = document.getElementById('des-company');
// ----------------------------------------------
showfeaturesList.addEventListener("click", () => {
    if(isDesfeaturesListHiden){
        desFeaturesList.style.display = "block";
        showfeaturesList.firstChild.src = "images/icon-arrow-up.svg";
        isDesfeaturesListHiden = false;
    }else{
        desFeaturesList.style.display = "none";
        showfeaturesList.firstChild.src = "images/icon-arrow-down.svg";
        isDesfeaturesListHiden = true;
    }
    
})
// ----------------------------------------------
showCompanyList.addEventListener("click", () => {
    if(isDesCompanyListHiden){
        desCompanyList.style.display = "block";
        showCompanyList.firstChild.src = "images/icon-arrow-up.svg";
        isDesCompanyListHiden = false;
    }else{
        desCompanyList.style.display = "none";
        showCompanyList.firstChild.src = "images/icon-arrow-down.svg";
        isDesCompanyListHiden = true;
    }
    
})
// ------------------------------------


const screenSize = window.matchMedia("(max-width: 768px)");

function handleMediaQueryChange(e){
    if(e.matches){
        document.querySelector(".image img").src = "images/image-hero-mobile.png";
    }else{
        document.querySelector(".image img").src = "images/image-hero-desktop.png";
    }
}
handleMediaQueryChange(screenSize);