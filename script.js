let arr = [
    {dp:"https://3.bp.blogspot.com/-TVkmwZx0oWI/UsYGyv4HzJI/AAAAAAAAHdQ/gKoK3zFWcPw/w1200-h630-p-k-no-nu/Dragon+Ball.+Vegeta.png",
    story:"https://2.bp.blogspot.com/-8SAKjAdeMgA/VAhp8QV2bNI/AAAAAAAALjE/UeSYCCrO2nc/s1600/Vegeta%2B13.gif",
    story:"http://25.media.tumblr.com/62fcf11d00efbd4de8e1b605881532f7/tumblr_mtcdd5OEhf1r8tyjfo1_500.gif"},
    {dp:"https://1.bp.blogspot.com/-iQV_poOyuIE/VeBuCZ0AUHI/AAAAAAAABaI/Fmd6XXuvrnA/s1600/goku.png",
    story:"http://2.bp.blogspot.com/-Bz7rwd8KV6Y/UaVeEepJwVI/AAAAAAAADG0/TLyEWGY1Rqo/s1600/Goku+gif+animado.gif"},
    {dp:"https://vignette.wikia.nocookie.net/dragonball/images/0/05/Kid-trunks-4.png/revision/latest?cb=20140702201311&path-prefix=nl",
    story:"https://64.media.tumblr.com/b9c08e04b4f287d0129d67d04fe8f9a7/tumblr_n5fs9mnb8G1r72ht7o1_500.gifv"},
    {dp:"https://dragonball.guru/wp-content/uploads/2021/03/Yajirobe-Profile-Pic.png",
    story:"http://38.media.tumblr.com/tumblr_m1sm35hO2N1ro1rkmo1_500.gif"},
    
]

let stories = document.querySelector("#stories");
let clutter = "";
arr.forEach((elem,idx)=>{
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`;
});

stories.innerHTML = clutter;

stories.addEventListener("click", (dets)=>{
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout(()=>{
    document.querySelector("#full-screen").style.display = "none";
        
    },3000);
});