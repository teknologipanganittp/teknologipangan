
    let fade_from_top = document.querySelectorAll(".fade-in.fade-fromTop");
    let fade_from_left = document.querySelectorAll(".fade-in.fade-fromLeft");
    let fade_from_right = document.querySelectorAll(".fade-in.fade-fromRight");
    
    for(let i=0;i<fade_from_top.length;i++){
        
        let fade_item = fade_from_top[i].querySelectorAll(".fade-in.fade-fromTop .fade-item"); //hitung fade-item dalam fade-in
        
        window.addEventListener("scroll",function(){
            //console.log(fade_from_top[i].offsetTop);
            if(window.scrollY>=(fade_from_top[i].offsetTop - 400)){
                for(let j=0;j<fade_item.length;j++){
                    setInterval(function(){
                        fade_item[j].style.opacity="1";
                        fade_item[j].style.transform="translateY(0px)";
                    },300*j)                    
                }
            }
        });        
    }

    for(let i=0;i<fade_from_left.length;i++){
        
        let fade_item = fade_from_left[i].querySelectorAll(".fade-in.fade-fromLeft .fade-item"); //hitung fade-item dalam fade-in
        //console.log(fade_from_left[i].offsetTop);
        window.addEventListener("scroll",function(){
            if(window.scrollY>=(fade_from_left[i].offsetTop - 400)){
                for(let j=0;j<fade_item.length;j++){
                    setInterval(function(){
                        fade_item[j].style.opacity="1";
                        fade_item[j].style.transform="translateX(0px)";
                    },300*j)                    
                }
            }
        });        
    }

    for(let i=0;i<fade_from_right.length;i++){
        
        let fade_item = fade_from_right[i].querySelectorAll(".fade-in.fade-fromRight .fade-item, .fade-in .fade-fromRight .fade-item"); //hitung fade-item dalam fade-in
        //console.log(fade_from_left[i].offsetTop);
        window.addEventListener("scroll",function(){
            if(window.scrollY>=(fade_from_right[i].offsetTop - 400)){
                for(let j=0;j<fade_item.length;j++){
                    setInterval(function(){
                        fade_item[j].style.opacity="1";
                        fade_item[j].style.transform="translateX(0px)";
                    },300*j)                    
                }
            }
        });        
    }

   
    let parallax_media = document.querySelectorAll(".parallax");
    window.addEventListener("scroll",function(){
        for(let i=0;i<parallax_media.length;i++){
            let parallax_point = window.scrollY;
            // console.log(parallax_point);
            parallax_media[i].style.transform="translateY("+ parallax_point/(parallax_media.length*2) +"px)";
        }
    });   
    