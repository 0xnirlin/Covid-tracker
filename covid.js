let total = document.querySelector(".total");
let death = document.querySelector(".death");
let recov = document.querySelector(".rec");

//Now working with the api
// let newTotal ;
// let newDeaths;
// let newRecov;
async function covidTracker()
{
    const response = await fetch("https://api.covid19api.com/summary");
    const data = await response.json();
    console.log(data);
    console.log(data.Global);
    // newTotal = data.Global.TotalConfirmed;
    // // console.log(newTotal);
    // newDeaths = data.Global.TotalDeaths;
    // // console.log(newDeaths);
    // newRecov = data.Global.TotalRecovered;
    // // console.log(newRecov);
    const { TotalConfirmed, TotalDeaths, TotalRecovered} = data.Global;
    total.textContent = TotalConfirmed;
    death.textContent = TotalDeaths;
    recov.textContent = TotalRecovered;
    

}

covidTracker();
