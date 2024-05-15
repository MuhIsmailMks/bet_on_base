// navbar handler
const menu_btn = document.querySelector('.menu-btn');
const ul = document.querySelector('nav ul');
menu_btn.addEventListener('click', () => {
    ul.classList.toggle('active')
})

// width 
// loader
document.addEventListener('DOMContentLoaded', function () { 
    setTimeout(() => {
     document.querySelector('.loading').classList.add('show');
    }, 3000);
 });
  
 
function updateAttributesBasedOnWidth() {
    let widthWin = window.innerWidth;
    if (widthWin >= 1024) {
        ul.setAttribute('data-aos', 'fade-down');
        ul.setAttribute('data-aos-duration', '400');
        ul.setAttribute('data-aos-delay', '4000');
    } else {
        ul.removeAttribute('data-aos');
        ul.removeAttribute('data-aos-duration');
        ul.removeAttribute('data-aos-delay');
    }
}
 
updateAttributesBasedOnWidth(); 
window.addEventListener('resize', updateAttributesBasedOnWidth);


// address  
const copied = document.querySelector('.copied')
let addressContainer = document.querySelector('.address_form'); 

addressContainer.addEventListener('click', function() { 
    let addressText = addressContainer.querySelector('.address_form span').textContent;

    copied.classList.add('flex')
    copied.classList.remove('hidden')
    setInterval(() => {
        copied.classList.add('hidden')
        copied.classList.remove('flex')
    },1000);

    navigator.clipboard.writeText(addressText)
        .then(function() { 
            
        })
        .catch(function(error) { 
            alert('Cannot copy address:' + error);
        });
});

// chart

let ctx = document.getElementById('myPieChart').getContext('2d');

let myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Tokens 30% LP", "Token Sale", "Casino Treasury","Staking", "Rewards", "Team"],
        datasets: [{
            data: [30,30,20,10,5,5],
            backgroundColor: [
                '#16c1ec',
                '#8B93FF', 
                '#FF9800',
                '#EBF400',
                '#7469B6',
                '#8DECB4',
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        legend: {
            display: false 
        },
        tooltips: {
            enabled: false, 
            callbacks: {
                label: function(tooltipItem, data) {
                    let dataset = data.datasets[tooltipItem.datasetIndex];
                    let total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                        return previousValue + currentValue ;
                    });
                    let currentValue = dataset.data[tooltipItem.index];
                    let percentage = ((currentValue / total) * 100).toFixed(2);
                    return data.labels[tooltipItem.index] + ": " + currentValue + " (" + percentage + "%)";
                }
            }
        }
    }
});


document.addEventListener("DOMContentLoaded", function() {
 
 
}); 


// scroll reveal animation
AOS.init({
    once: true
});


// faq
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    const arrow_img = faq.querySelector('.faq_btn img')
    const answer = faq.querySelector('.answer')
    const faq_btn = faq.querySelector('.faq_btn')

    faq_btn.addEventListener('click', () =>{
        faq_btn.classList.toggle('active')
        answer.classList.toggle('active')
       
        if(faq_btn.classList.contains("active")){
            arrow_img.setAttribute('src', "./assets/images/faq_arrow_active.svg")
        } else {
            arrow_img.setAttribute('src', "./assets/images/faq_arrow.svg")
        }
    })

  
})

  