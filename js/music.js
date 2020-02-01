document.getElementById("youngDad").onclick = function(){
    document.getElementById("album-title").innerHTML = "Young <br /> Dad";
    document.getElementById("music-player").innerHTML = '<iframe src="https://open.spotify.com/embed/album/1XKYqX42urtlhtnLBEksD8?theme=white" width="200" height="280" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    document.getElementById("music-cover").innerHTML = '<img src="images/young-dad.jpg" alt="idkwtf" srcset="">'
    
}

document.getElementById("idk").onclick = function(){
    document.getElementById("album-title").innerHTML = "IDKWTF"
    document.getElementById("music-player").innerHTML = '<iframe src="https://open.spotify.com/embed/album/7wUqHW0DaifR526TqTUCU8?theme=white" width="200" height="280" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
                
    document.getElementById("music-cover").innerHTML = '<img src="images/idkwtf.jpg" alt="idkwtf" srcset="">'
}


document.getElementById("single").onclick = function(){
    document.getElementById("album-title").innerHTML = "Key Component"
    document.getElementById("music-player").innerHTML = '<iframe src="https://open.spotify.com/embed/album/1rIWMJecQPCY5TRUlkOvPn?theme=white" width="200" height="280" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
                
    document.getElementById("music-cover").innerHTML = '<img src="images/julry.jpg" alt="idkwtf" srcset="">'
}
