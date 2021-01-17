/* <div class="col-md-4">
                <div class="item">
                    <h1>1111</h1>
                    <img src="" alt="">
                    <p></p>
                </div>
            </div>*/

let allRecipes=[]
let search1=document.getElementById("search1")
let search2=document.getElementById("search2")


async function getRecipy(){
    let x = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=2e7cbc8c5fd24eedd4e2d8a25f3bcb41`)
    allRecipes= await x.json()
    allRecipes = allRecipes.results
    dispaly(allRecipes)
    console.log(allRecipes)
} 
  

function dispaly(array){
    let item=``
    for(let i =0 ; i<array.length ; i++){
        item+=`<div class="col-md-4">
        <div class="item">
           
            <img src="https://image.tmdb.org/t/p/w500${array[i].poster_path}" alt="" class="w-100">
            <div class="info">
            <h2>${array[i].title || array[i].name}</h>
            <h3>${array[i].first_air_date || array[i].release_date} </h3>
            <h4>rate ${array[i].vote_average || array[i].vote_count}</h4>
            <p>${array[i].overview} </p>

               </div>
        </div>
    </div>`
    }
    document.getElementById("demo").innerHTML=item
}

function search(term){
   
    let item=``
    for(let i =0 ; i<allRecipes.length ; i++){
        if(allRecipes[i].title || allRecipes[i].name.toLowerCase().includes(term.toLowerCase())==true){
             item+=`<div class="col-md-4">
    
             <div class="item">
       
        <img src="https://image.tmdb.org/t/p/w500${allRecipes[i].poster_path}" alt="" class="w-100">
        <div class="info">
        <h2>${allRecipes[i].title || allRecipes[i].name}</h>
        <h3>${allRecipes[i].first_air_date || allRecipes[i].release_date} </h3>
        <h4>rate ${allRecipes[i].vote_average || allRecipes[i].vote_count}</h4>
        <p>${allRecipes[i].overview} </p>

           </div>
    </div>
</div>`
        
    }
    
    }
    document.getElementById("demo").innerHTML=item

   
}

async function getApiSearch(term_2){
    let x=await fetch(`https://api.themoviedb.org/3/search/multi?api_key=2e7cbc8c5fd24eedd4e2d8a25f3bcb41&language=en-US&query=${term_2}`)
    allRecipes= await x.json()
    allRecipes = allRecipes.results
    dispaly(allRecipes)
    console.log(allRecipes)
}

/*--------------------------- */
let tranding=[]
let now=[]
let populra=[]
async function top_r(){
    let x=await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    tranding= await x.json()
    tranding = tranding.results
    dispaly(tranding)
    console.log(tranding)
}
async function Now_m(){
    let x=await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    now= await x.json()
    now = now.results
    dispaly(now)
    console.log(now)
}
async function populra_a(){
    let x=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    populra= await x.json()
    populra = populra.results
    dispaly(populra)
    console.log(populra)
}

$("#now").click(function(){
    Now_m()
})
$("#top").click(function(){
    top_r()
})

$("#Trending").click(function(){
    getRecipy()
})
$("#Popular").click(function(){
    populra_a()
})











$(".icon11").click(function(){
    let leftNavWidth=$(".left-nav").outerWidth(true);    
    if($("#nav").css("left")=="0px"){
        $("#ic").attr("class","fa fa-align-justify")
        $("#nav").animate({left:`-${leftNavWidth}`})
    

        $(".menu li").eq(0).animate({bottom:"-400px"},500,
    function(){
        $(".menu li").eq(1).animate({bottom:"-400px"},500,function(){
            $(".menu li").eq(2).animate({bottom:"-400px"},500,function(){
                $(".menu li").eq(3).animate({bottom:"-400px"},500,function(){
                    $(".menu li").eq(4).animate({bottom:"-400px"},500,function(){
                        $(".menu li").eq(5).animate({bottom:"-400px"},500,)
                    })
                })
            })
        })
    })

    }
    else{
        $("#nav").animate({left:`0px`})
        $("#ic").attr("class","fas fa-times")
        $(".menu li").eq(0).animate({bottom:"0px"},500,
        function(){
            $(".menu li").eq(1).animate({bottom:"0px"},500,function(){
                $(".menu li").eq(2).animate({bottom:"0px"},500,function(){
                    $(".menu li").eq(3).animate({bottom:"0px"},500,function(){
                        $(".menu li").eq(4).animate({bottom:"0px"},500,function(){
                            $(".menu li").eq(5).animate({bottom:"0px"},500,)
                        })
                    })
                })
            })
        })
       
    }

  
  
})


$("#con").click(function(){
    let offSetCon=$("#Contact").offset().top
    $("html,body").animate({scrollTop:offSetCon},2000)
})

$(document).ready(function(){
    $("#loading").fadeOut(1500)
    getRecipy()   
    $("body").css("overflow","auto")
})
let userName=document.getElementById("userName")
let phone=document.getElementById("phone")
let email =document.getElementById("email")
let age=document.getElementById("age")

let password=document.getElementById("password1")

let password2=document.getElementById("password")

$(".contact input").blur(function(){
   let regaxName=/[A-Z][a-z]{5,20}/;
   if(regaxName.test($("#userName").val()) ==true){
  userName.classList.add("is-valid")
  userName.classList.remove("is-invalid")
   }else{
    userName.classList.add("is-invalid")
    
   }

   let regaxMail=/^[a-z]{5,12}([0-9]){1,}?(@gmail\.com|@yahoo.com)$/

   if(regaxMail.test($("#email").val()) ==true){
    email.classList.add("is-valid")
    email.classList.remove("is-invalid")
     }else{
        email.classList.add("is-invalid")
      
     }


   let regaxPhone=/^(002)?01[0125][0-9]{8}$/
   if(regaxPhone.test($("#phone").val()) ==true){
    phone.classList.add("is-valid")
    phone.classList.remove("is-invalid")
     }else{
        phone.classList.add("is-invalid")
      
     }

     let regaxAge=/^([1-7][0-9]|80)$/
     if(regaxAge.test($("#age").val()) ==true){
        age.classList.add("is-valid")
        age.classList.remove("is-invalid")
         }else{
            age.classList.add("is-invalid")
          
         }



 
})

$(window).scroll(()=>{
    let wScroll=$(window).scrollTop()
    if(wScroll > 200){
        $(".btnm").fadeIn(500)
    }
    else{
        $(".btnm").fadeOut(500)
    }

    
})

$(".btnm").click(()=>{
    $("html,body").animate({scrollTop:0},1000)
})

/*
    */
