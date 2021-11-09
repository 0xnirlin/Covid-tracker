let total = document.querySelector(".total");
let death = document.querySelector(".death");
let recov = document.querySelector(".rec");
let button = document.querySelector(".sButton");
let input = document.querySelector("[data-city-search]");


//Now working with the api
// let newTotal ;
// let newDeaths;
// let newRecov;
let placeName;
async function covidTracker()
{
    const response = await fetch("https://api.covid19api.com/summary");
    const data = await response.json();
 

    for (let i = 0; i < 193; i++) {
        if(data.Countries[i].Country.toUpperCase() == input.value.toUpperCase())
        {
             total.textContent = data.Countries[i].TotalConfirmed;
             death.textContent = data.Countries[i].TotalDeaths;
             recov.textContent = data.Countries[i].TotalRecovered;
             
        }
        
    }
    
    
}


button.addEventListener("click", ()=>
{
    covidTracker();
    setTimeout(() => {
        input.value = '';
        
    }, 500);
    
})

// console.log(placeName.formatted);
// console.log(document.querySelector('[data-city-search]').formatted_address);