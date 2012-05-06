alert(localStorage["data"]);
$.post("http://localhost/GShare-server/user/signup.php",
    {
        "email" : "singhal.single.rj@gmail.com",
        "password" : "secret"
    },
    function(data){
        localStorage["data"]=data;
    });