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
            $('#doctData').owlCarousel({
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
    $.getJSON("./data/blogs.json", function(data){
        $('#blogContent').html('')
        console.log(data)
        data.forEach((d)=>{  
            d.blogid = "blog"+Math.floor(Math.random() * 1000);
            if(d.type=="video"){
                var videoBlogs = `<div  style="padding: 16px">

                <a class="btn btn-play video-popup" id="${d.blogid}" href="${d.url}">
                     
                  
                <img height="155px" class="borderRound" src="images/thumbnail/${d.thumbnail}">
                <div
                    style="height: 160px;padding: 12px 0px 18px 12px;background-color: #fff;border-radius: 0px 0px 10px 10px;">
                    <h5 style="color: #464646;">${d.title}</h5>
                    <p>${d.Description}</p>
                    
                </div>
            </a>
            </div>`
            $('#blogContent').append(videoBlogs)
            
            $('#'+d.blogid).magnificPopup({
                type: 'iframe',
                mainClass: 'mfp-with-zoom',
                preload: [0,2],
                iframe: {
                    markup: '<div class="mfp-iframe-scaler">' +
                        '<div class="mfp-close"></div>' +
                        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                        '</div>',
                    patterns: {
                        youtube: {
                            index: 'youtube.com/',
                            id: 'v=',
                            src: '//www.youtube.com/embed/%id%?autoplay=1'
                        }
                    },
                    srcAction: 'iframe_src'
                }
        
            });

            }


           



        })

        $('#blogContent').owlCarousel({
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
                    loop:false,
                   
                },
                600:{
                    items:3,
                   
                    center: true,
                    loop:false,
                   
                },
                1000:{
                    items:4,
                   
                    loop:false
                    
                }
            }
        })
   

})


$.getJSON("./data/gallery.json", function(data){
    $('#galleryimage').html('')
    data.forEach((d)=>{  
        d.imgid = "blog"+Math.floor(Math.random() * 1000);
            var images = `<div  style="padding: 16px">
            <a id="${d.imgid}" href="images/blogs/${d.url}">
            <img  style="width: 100%;" height="155px" src="images/blogs/${d.url}">
           <a>
        </div>`
        $('#galleryimage').append(images)
        
        $('#'+d.imgid).magnificPopup({type:'image'
        });

    })

    $('#galleryimage').owlCarousel({
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
                loop:false,
               
            },
            600:{
                items:3,
               
                center: true,
                loop:false,
               
            },
            1000:{
                items:4,
               
                loop:false
                
            }
        }
    })


})
  });

