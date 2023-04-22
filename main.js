var region = "";

function filterByRegion(_region){
    if(region == ""){
        document.getElementById("drop_text").innerHTML = _region;
        region = _region;
    }
    else if(_region != region){
        document.getElementById("drop_text").innerHTML = _region;
        region = _region;
    }
    else{
        document.getElementById("drop_text").innerHTML = "Filter by Region";
        region = "";
    }
    search();
}

function search(){
    var filter = document.getElementById("search_i").value.toUpperCase();
    remove(filter);
}

function remove(filter){
    const countries = document.getElementsByClassName('country');
    for (const stream of countries) {
        stream.classList.remove('hidden');
        if(!stream.classList.contains(region) && region != "" || stream.id.toUpperCase().indexOf(filter) && filter != ""){
            stream.classList.add('hidden');
        }
    }
}

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

function select(_code){
    sessionStorage.setItem("code", _code);
    window.location.href = "./detail.html";
}

function fetchDetails(){
    var code = sessionStorage.getItem("code");
    document.getElementById('details_holder').innerHTML = "";
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then(res => {
        if(res.ok){
            console.log('SUCCESS');
            res.json().then(data => {
                document.getElementById('details_holder').innerHTML += `
                <div class="detail_wrap">
                    <img class="detail_flag" src="${data[0].flags.png}" alt="flag">
                    <div class="detail_content_wrap">
                        <h1 class="detail_header">${data[0].name.common}</h1>
                        <div class="detail_text_wrap">
                            <div class="flex flex-col gap-8px">
                                    <div>
                                        <span class="detail_title">Native Name: </span>
                                        <span class="detail_content">${data[0].name.nativeName[Object.keys(data[0].name.nativeName)[0]].common}</span>
                                    </div>
                                    <div>
                                        <span class="detail_title">Population: </span>
                                        <span class="detail_content">${data[0].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                                    </div>
                                    <div>
                                        <span class="detail_title">Region: </span>
                                        <span class="detail_content">${data[0].region}</span>
                                    </div>
                                    <div>
                                        <span class="detail_title">Sub Region: </span>
                                        <span class="detail_content">${data[0].subregion}</span>
                                    </div>
                                    <div>
                                        <span class="detail_title">Capital: </span>
                                        <span class="detail_content">${data[0].capital}</span>
                                    </div>
                            </div>
                            <div class="flex flex-col gap-8px">
                                    <div>
                                        <span class="detail_title">Top Level Domain: </span>
                                        <span class="detail_content">${data[0].tld}</span>
                                    </div>
                                    <div>
                                        <span class="detail_title">Currencies: </span>
                                        <span class="detail_content">${data[0].currencies[Object.keys(data[0].currencies)].name}</span>
                                    </div>
                                    <div>
                                        <span class="detail_title">Languages: </span>
                                        <span id="languages_wrap" class="detail_content"></span>
                                    </div>
                            </div>
                        </div>
                        <div class="border-countries_wrap flex items-top">
                            <span class="bc_title text-16px font-600 pr-8px">Border Countries:</span>
                            <div id="border_wrap" class="flex flex-wrap flex-row gap-16px"></div>
                        </div>
                    </div>
                </div>`;
                var y = document.getElementById('languages_wrap');
                for(var i = 0; i < Object.keys(data[0].languages).length; i++){
                    if(i == Object.keys(data[0].languages).length-1){
                        y.innerHTML += data[0].languages[Object.keys(data[0].languages)[i]];
                    }
                    else{
                        y.innerHTML += data[0].languages[Object.keys(data[0].languages)[i]] += ", ";
                    }
                }

                var x = document.getElementById('border_wrap');
                for(var i = 0; i < data[0].borders.length; i++){
                    fetch(`https://restcountries.com/v3.1/alpha/${data[0].borders[i]}`)
                    .then(res => {res.json()
                    .then(borderData => {
                        x.innerHTML += `
                        <button onclick="select('${borderData[0].cca2}');" class="text-16px font-300 rounded-lg px-32px py-8px bg-white dark:bg-darkBlue">
                        ${borderData[0].name.common}
                        </button>`;
                        })
                    });
                }
            });
        }
        else{
            console.log('Not Successful');
        }
    })
}