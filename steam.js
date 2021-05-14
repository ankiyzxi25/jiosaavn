const main=document.querySelector(".main");

async function generate(){
    const res=await fetch('https://saavn.me/search?song=new%20songs');
    const data= await res.json();
    for(let i=0;i<10;i++){
        const html=`<div class="thumb">
<img id="pp${i}" song="${data[i].song_name}" onclick="imageid(this)" dlink="${data[i].download_links[1]}" src="${data[i].song_image}" width="150px" height="150px" alt="">
<div class="title">
${data[i].song_name}
</div>
</div>`;
        main.insertAdjacentHTML('beforeend',html);

    }
}
async function generate2(){
    const res=await fetch('https://saavn.me/search?song=punjabi');
    const data= await res.json();
    for(let i=0;i<10;i++){
        const html=`<div class="thumb">
<img id="pp1${i}" song="${data[i].song_name}" onclick="imageid(this)" dlink="${data[i].download_links[1]}" src="${data[i].song_image}" width="150px" height="150px" alt="">
<div class="title">
${data[i].song_name}
</div>
</div>`;
        main.insertAdjacentHTML('beforeend',html);

    }
}
generate2();
generate();
let aud=document.querySelector("source");
let mainaud=document.querySelector("audio");
let ddlink=document.getElementById("ddlink");
let rdiv=document.querySelector(".thumbnail");
let rimg=document.querySelector("#rimg");
let btn=document.getElementById("btn");
let ply=document.querySelector('.plyr');
function imageid(sender){
//     const surl='https://www.google.com'
    let abc = new Blob([`${sender.getAttribute("dlink")}`],
                { type: 'audio/mp3' });
// //   URL=`${sender.getAttribute("dlink")}`
                ddlink.href = URL.createObjectURL(abc);
    ply.style.display="block";
    const songname=sender.getAttribute("song");
    ddlink.setAttribute("download", `${songname}.mp3`);
    const surl=`${sender.getAttribute("dlink")}`.replace('http://',"");
    ddlink.href=`/downloadapi/ankit/cloud/proxy/music/downloads/${surl}`;
    rdiv.style.display="flex";
    rimg.src=sender.src;
  btn.style.display="block";
  aud.src=sender.getAttribute("dlink");
   
   mainaud.load();
 
}



async function songs(){
const val=document.querySelector("input").value;
const res=await fetch(`https://saavn.me/search?song=${val}`);
    const data= await res.json();
    for(let i=9;i>=0;i--){
        const html=`<div class="thumb">
<img id="pp2${i}" onclick="imageid(this)" dlink="${data[i].download_links[1]}" src="${data[i].song_image}" width="150px" height="150px" alt="">
<div class="title">
${data[i].song_name}
</div>
</div>`;
        main.insertAdjacentHTML('afterbegin',html);


    }
    val='';
}
