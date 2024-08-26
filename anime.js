let info=document.querySelector(".info");
let dataInfo=document.querySelector(".data h1");
let inputSearch=document.querySelector(".inputSearch");
let wait=document.querySelector(".wait");
let moreInfo=document.querySelector(".moreInfo");
let infoBox=document.querySelector(".infoBox");

let NameofAnime="Naruto: Shippuden";
let d,data,urlInfo;
function createInfo(){
    for(let i=0;i<d;i++){
        info.innerHTML+=`<div class="boxInfo">
                <img src="${data.data[i].images.jpg.image_url}" alt="There is no photo">
                <h1>${data.data[i].title_english}</h1>
                <p>Anime | <span>${data.data[i].episodes} Episodes</span>
                  <big> | ${data.data[i].duration} Duration | Aired: </big>
                  <small>${data.data[i].aired.string}</small>
                </p>
                <button>View More Info</button>
            </div>`;
            console.log("new");
    }
    getclick();
}

function getAnime() {
    let boxes=document.querySelectorAll(".MenuBox");
    boxes.forEach((box1,index)=>{
        box1.addEventListener("click",()=>{
            NameofAnime=box1.innerText;
            info.innerHTML='';
            info.style.visibility = "hidden";
            wait.style.visibility = "visible";
            getInfo();
        });
    });
}
getAnime();

function getclick() {
    let boxes=document.querySelectorAll(".boxInfo");
    boxes.forEach((box1,index)=>{
        box1.querySelector("button").addEventListener("click",()=>{
            infoBox.style.visibility = "hidden";
            info.style.visibility = "hidden";
            moreInfo.style.visibility = "visible";
            infoBox.style.position = "fixed";
            console.log(box1.querySelector("h1").innerText);

            moreInfo.querySelector(".moreInfo img").src=data.data[index].images.jpg.image_url;
            moreInfo.querySelector(".boxing h1").innerText=data.data[index].title_english;
            
            moreInfo.querySelector(".Type span").innerText=data.data[index].type;
            moreInfo.querySelector(".Sourse span").innerText=data.data[index].source;
            moreInfo.querySelector(".Episodes span").innerText=data.data[index].episodes;
            moreInfo.querySelector(".linkAdd").href=data.data[index].trailer.url;
            urlInfo=data.data[index].trailer.url;
            moreInfo.querySelector(".Aired span").innerText=data.data[index].aired.string;
            moreInfo.querySelector(".Duration span").innerText=data.data[index].duration;
            moreInfo.querySelector(".Rating span").innerText=data.data[index].rating;
            moreInfo.querySelector(".boxing3").innerText=data.data[index].synopsis;
            moreInfo.querySelector(".rank span").innerText=data.data[index].rank;
            moreInfo.querySelector(".Status span").innerText=data.data[index].status;
            moreInfo.querySelector(".Source span").innerText=data.data[index].source;
        });
    });
}
const getInfo=async()=>{
    try{
    const searchUrl = `https://api.jikan.moe/v4/anime?q=${NameofAnime}`;
    let respone= await fetch(searchUrl);
    data=await respone.json();
    d=data.data.length;
    dataInfo.innerText=NameofAnime+" Anime";
    }
    catch{
        alert("We don't have information about this Anime.");
    }
    wait.style.visibility = "hidden";
    info.style.visibility = "visible";
    createInfo();
}
getInfo();

document.querySelector(".search").addEventListener("click",()=>{
    NameofAnime=inputSearch.value;
    inputSearch.value="";
    info.innerHTML='';
    info.style.visibility = "hidden";
    wait.style.visibility = "visible";
    getInfo();
})
inputSearch.addEventListener("keyup",(e)=>{
    if(e.keyCode===13){
        NameofAnime=inputSearch.value;
        inputSearch.value="";
        info.innerHTML='';
        info.style.visibility = "hidden";
        wait.style.visibility = "visible";
        getInfo();
    }
})
moreInfo.querySelector(".close").addEventListener("click",()=>{
    infoBox.style.visibility = "visible";
    info.style.visibility = "visible";
    moreInfo.style.visibility = "hidden";
    infoBox.style.position = "static";
})

moreInfo.querySelector(".linkAdd").addEventListener("click",()=>{
    if(urlInfo==null){
        alert("There is No video.");
    }
})
