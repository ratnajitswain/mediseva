$(document).ready(function(){
    $.getJSON("./data/doctors.json", function(data){
        $('#doctData').html('')
        
            console.log(data)
            data.forEach((i)=>{  
                if(i.image==""){  
                    i.image= "img_avatar.png"
                }
               var docts = `<div style="padding: 16px; object-fit: cover;">
                <img 
                height= "155px" class="borderRound" src="images/team/${i.image}">
                <div
                    style="height: 160px;padding: 12px 0px 18px 12px;border-left: 1px solid rgba(0, 0, 0, 0.25);border-right: 1px solid rgba(0, 0, 0, 0.25);border-bottom: 1px solid rgba(0, 0, 0, 0.25);border-radius: 0px 0px 10px 10px;">
                    <h5 style="color: #464646;">Dr. ${i.name}</h5>
                    <h6>${i.speciality}</h6>
                    
                </div>
            </div>`
            $('#doctData').append(docts)
            })
            $('.owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                responsiveClass:true,
                autoplay:true,
                autoplayTimeout: 2000,
                        autoplayspeed:2000,
                        nav:true,
                        navText : ['<i class="fas fa-angle-double-left" aria-hidden="true"></i>','<i class="fas fa-angle-double-right" aria-hidden="true"></i>'],
                responsive:{
                    0:{
                        items:1,
                        
                        center: true,
                        loop:true,
                       
                    },
                    600:{
                        items:3,
                       
                        center: true,
                        loop:true,
                       
                    },
                    1000:{
                        items:4,
                       
                        loop:true
                        
                    }
                }
            })
        }
    )
    
  });