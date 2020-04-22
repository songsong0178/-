(function () {
    if(document.body.clientWidth>1366&&document.body.clientWidth<1920){
        document.getElementsByTagName("html")[0].style.fontSize =(document.body.clientWidth/1920)*100+"px"
    }
})()