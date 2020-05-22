 
class Covid{
    async getStats(country){
        const countryResponse = await fetch(`https://corona.lmao.ninja/v2/countries/${country}?yesterday&strict&query`);
        const countryData = await countryResponse.json();

        const worldResponse = await fetch('https://corona.lmao.ninja/v2/all?yesterday');
        const worldData = await worldResponse.json();

        return {
            countryData,
            worldData
        }
    }
}