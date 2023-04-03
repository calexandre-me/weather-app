console.log('Hi this is forecast.');

const searchWeather = document.querySelector("form");
const [table] = document.getElementsByClassName("table");   

document.addEventListener('click', (e)=>{
    if(!e.target.classList.contains('table')){
        table.style.display = 'none';
    }
})

searchWeather.addEventListener("submit", (event) => {
    event.preventDefault();

    const userTarget = document.getElementById("target-location").value;   
    fetch(`/secure-1234-weather-info-api-get-info?address=${userTarget}`).then(response=>{
        console.log(response);
        response.json().then(data=>{
        console.log(data);
        const [serverMessageBox] = document.getElementsByClassName('server-message');
        const serverMessage = document.getElementById('message'); 

        const txtResume = document.getElementById('txt-resume');      
        const [tableWeather] = document.getElementsByClassName('table');
            if(!data.error){
                if(tableWeather.classList.contains('hide')){
                    tableWeather.classList.remove('hide')
                }
                if(!serverMessageBox.classList.contains('hide')){
                    serverMessageBox.classList.add('hide');
                }

                //get the results
                const results = Object.values(data);
                console.log(results);
                
                const resultFields = document.getElementsByClassName("result");
                console.log(resultFields);
                
                results.forEach((value, index) => {
                    if(index == 1) { console.log(value);
                     resultFields[index].src = value }
                    resultFields[index].textContent = value;
                });
                console.log('Hey!!! ' + results.length);
                console.log('Hey!!! ' + results);
                txtResume.textContent = `${userTarget} is ${results[results.length-1]}`; 
                table.style.display = 'block';
            }
            else{
                
                if(!tableWeather.classList.contains('hide')){
                    tableWeather.classList.add('hide')
                }
                if(serverMessageBox.classList.contains('hide')){
                    serverMessageBox.classList.remove('hide');
                }
                
                Object.assign(serverMessageBox.style, {
                    backgroundColor: '#D60d0d',
                    padding: '10px'
                  });

                serverMessage.textContent = data.error;
            }
        })
    })
});
