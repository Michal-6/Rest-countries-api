# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Links

- Solution URL: [[Add solution URL here](https://your-solution-url.com](https://www.frontendmentor.io/solutions/responsive-countries-page-FdTE74M6K3)]([https://your-solution-url.com](https://www.frontendmentor.io/solutions/responsive-countries-page-FdTE74M6K3))
- Live Site URL: [[Add live site URL here](https://your-live-site-url.com](https://michal-6.github.io/Rest-countries-api/)]([https://your-live-site-url.com](https://michal-6.github.io/Rest-countries-api/))

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Tailwindcss
- Flexbox
- Javascript
- REST COUNTRIES API(https://restcountries.com/)

### What I learned

I learned how to work with more complicated API. 
I learned how to create filter and search bar. 
I learned howto create "dark mode" with tailwindcss.

Function for getting all the JSON data:

```js
function getAPI(){
    document.getElementById('cards_holder').innerHTML = "";
    fetch('https://restcountries.com/v3.1/all')
    .then(res => {
        if(res.ok){
            console.log('SUCCESS');
            res.json().then(data => {
                data.forEach(country => {      
                    document.getElementById('cards_holder').innerHTML += `
                    <div onclick="select('${country.cca2}');" id="${country.name.common}" class="country ${country.region} rounded-lg bg-white dark:bg-darkBlue">
                        <img class="rounded-t-lg w-full" src="${country.flags.png}" alt="flag">
                        <div class="p-16px pb-32px text-14px font-300 flex flex-col gap-6px">
                            <h1 class="text-24px font-600 pb-6px">${country.name.common}</h1>
                            <div>
                                <span class="font-600">Population: </span>
                                <span class="font-300">${country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                            </div>
                            <div>
                                <span class="font-600">Region: </span>
                                <span class="font-300">${country.region}</span>
                            </div>
                            <div>
                                <span class="font-600">Capital: </span>
                                <span class="font-300">${country.capital}</span>
                            </div>
                        </div>
                    </div>`;
                });
            });
        }
        else{
            console.log('Not Successful');
        }
    })
}

```

## Author

- Frontend Mentor - [@Michal-6](https://www.frontendmentor.io/profile/Michal-6)
