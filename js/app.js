
const covid = new Covid();
const ui = new UI();

document.addEventListener('keypress', e => {
    if(e.keyCode == 13 || e.which === 13){
        e.preventDefault()
        return false;
    }
});

searchBtn.addEventListener('click', (e) => {

    if(input.value !== null || input.value !== ''){
        let msg = document.querySelector('.feedback');

        covid.getStats(input.value)
            .then(data => {
                input.classList.add('success');
                msg.textContent = 'Success!'
                msg.classList.add('m-success');
                input.value = '';
                ui.showStats(data.countryData, data.worldData);

                setTimeout(() => {
                    input.classList.remove('success');
                    msg.classList.remove('m-success');
                }, 2000)
            })
            .catch(err => {
                input.className = 'form-control rounded';
                let msg = document.querySelector('.feedback');
                msg.textContent = 'Please provide a valid country name!'
                msg.classList.add('m-error');

                setTimeout(() => {
                    input.className = 'form-control rounded';
                    msg.className = 'feedback';
                }, 2000)
            })
    }

});
