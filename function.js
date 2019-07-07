$(function () {

    let Search = $('#input')
  
    $("#sub").click(function(){
        console.log("clicked")
        let link = "https://www.googleapis.com/youtube/v3/search?part=id&key="+ {Your_API_Key} +"&q=" + Search.val();
        $.get(link, function(data, status){
            let link2 = "https://www.youtube.com/embed/" +  data.items[0].id.videoId;
            console.log(link2)
          
            console.log(data.items[0].id.videoId)
            for(let i = 0 ; i < data.items.length ; i++){
                let embed_link = "https://www.youtube.com/embed/" +  data.items[i].id.videoId;
                console.log("embed link" ,embed_link);
                $('#result').append(`
                <li>
                <iframe width="420" height="315"
                src = ${embed_link}>
                </iframe>
                </li>`)
            }
        });
      });
})