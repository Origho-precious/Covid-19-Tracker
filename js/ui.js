// Variables
const input = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const wrapper = document.getElementById('wrapper');
const container = document.getElementById('container');


class UI {
    showStats(c_data, w_data) {
        wrapper.innerHTML = `
            <div class="row mt-5">
                <div class="card text-left col-md-7">
                    <h3 class="pt-4 text-center">Country stats</h3>
                    <div class="card-body">
                        <div><img src="${c_data.countryInfo.flag}" id="flag" class="img-fluid"></div>
                        <h5 class="card-title mt-4">${c_data.country}, ${c_data.continent}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Total Number of Cases: ${c_data.cases}</li>
                            <li class="list-group-item">Total Number Of Death: ${c_data.deaths}</li>
                            <li class="list-group-item">Number of Recovered Persons: ${c_data.recovered}</li>
                            <li class="list-group-item">Active Cases: ${c_data.active}</li>
                            <li class="list-group-item">Critical Cases: ${c_data.critical}</li>
                            <li class="list-group-item">Tests Done: ${c_data.tests}</li>
                        </ul>
                    </div>
                </div>

                <div class="card text-left col-md-4">
                    <h3 class="pt-4 text-center">World stats</h3>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Number of Cases Today: ${w_data.todayCases}</li>
                            <li class="list-group-item">Total Number of Cases: ${w_data.cases}</li>
                            <li class="list-group-item">Number Of Death Today: ${w_data.todayDeaths}</li>
                            <li class="list-group-item">Total Number Of Death: ${w_data.deaths}</li>
                            <li class="list-group-item">Number of Recovered Persons: ${w_data.recovered}</li>
                            <li class="list-group-item">Active Cases: ${w_data.active}</li>
                            <li class="list-group-item">Critical Cases: ${w_data.critical}</li>
                            <li class="list-group-item">Tests Done: ${w_data.tests}</li>
                            <li class="list-group-item">Affected Countries: ${w_data.tests}</li>
                        </ul>
                    </div>
                </div>
            </div> 
        `;

        container.append(wrapper);
    }
}