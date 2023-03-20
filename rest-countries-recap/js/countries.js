const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>displayCountries(data) )

}
const displayCountries = countries =>{
    console.log(countries);
    const countriesHTML = countries.map(country =>  getCountryHTML(country));
    // console.log(countriesHTML[0] );
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}


// original

// const getCountryHTML = country => {
const getCountryHTML = ({name,flags,area,region}) => {

    // const{name,flags} = country;
    return`
    <div class = "country">
    <h2>${name.common}</h2>
    <p>Area:${area}</p>
    <p>Continet:${region}</p>
    <img src ="${flags.png}">
    
    </div>
    
    `
} ;



// const getCountryHTML = country => {
//     // option-1 :destructuring
//     const{name,flags} = country;
//     return`
//     <div class = "country">
//     <h2>${name.common}</h2>
//     <img src ="${flags.png}">
    
//     </div>
    
//     `;
// } 
loadCountries ();