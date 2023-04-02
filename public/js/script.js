// const notice = document.getElementById('notice');

// setTimeout(function(){notice.style.display = 'block'; notice.style.animationName = 'popUp'}, 3000);

// setTimeout( function(){notice.style.display = 'none'}, 8000);


const openMobileMenu = document.getElementById('open-menu');
const closeMobileMenu = document.getElementById('close-menu');
const header = document.getElementById('header');

openMobileMenu.addEventListener('click', ()=>{
    header.style.display = 'block';
    header.style.transition = 'all 0.8s';
})

closeMobileMenu.addEventListener('click', ()=>{
    header.style.display = 'none'
})

const formEl = document.getElementById('form');
formEl.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    // const email = document.getElementById('email').value,
    //       textComment = document.getElementById('text-comment').value;
    const formData = new FormData(formEl);
    const data = new URLSearchParams(formData);    

    fetch('/comment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
    }).then(response => {
        return response.json()
    }).then(msg => {
        console.log(msg);
    }).catch(err => {
        console.log('There were an error: ' + err);
    })
})

const switcher = document.getElementById('switch');
const globalContainer = document.getElementById('global-container');
const footer = document.getElementById('footer');

switcher.addEventListener('click', ()=>{
    console.log(switcher.firstElementChild);
    const target = switcher.firstElementChild;
    if(target.classList.contains('fa-sun')){
        target.classList.replace('fa-sun', 'fa-moon');
    }
    else{ target.classList.replace('fa-moon', 'fa-sun'); 
    }

    
    header.lastElementChild.classList.toggle('dark-theme');
    openMobileMenu.parentElement.classList.toggle('mb-menu')
    openMobileMenu.classList.toggle('mb-menu')
    closeMobileMenu.classList.toggle('mb-menu')
    globalContainer.classList.toggle('global-dark-theme');
    footer.classList.toggle('dark-theme');
}); 
