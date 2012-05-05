    alert(localStorage["data"]);
$.get("http://localhost/gshare/index.php",
    function(data){
        localStorage["data"]=data;
    });