function init() {
    styleStatusSect();
}

function styleStatusSect() {
    statusTxt = readTextFile('var/status.txt');
    // statusTxt = statusTxt.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    announceTxt = readTextFile('var/announcement.txt');
    // announceTxt = announceTxt.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    console.log(status);

    statusEle = document.getElementById('status-text');
    statusEle.textContent = statusTxt;

    announceEle = document.getElementById('announcement');
    announceEle.textContent = announceTxt;

    if (statusTxt.toLowerCase().includes('up')){
        // server working
        statusEle.style.backgroundColor = 'green';
    }else if(statusTxt.toLowerCase().includes('partial')){
        //partial
        statusEle.style.backgroundColor = 'orange';
    }else{
        //server down
        statusEle.style.backgroundColor = 'red';
    }
}

function readTextFile(file){
    var out = "Something went wrong reading " + file;
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function(){
        if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status == 0){
                var allText = rawFile.responseText;
                allText = allText.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                out = allText;
            }
        }
    }
    rawFile.send(null);
    return out;
}

// scroll to top button

window.onscroll = function() {onScroll();};

function onScroll() {
    topButton = document.getElementById('scrollToTopButton');
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20  ){
        topButton.style.display = "block";
    }else{
        topButton.style.display = "none";
    }
}

function scrollToTop() {
    $("html, body").animate({scrollTop: 0}, "slow", function() {
        // window.location.hash = "";
        history.pushState(null,null,' ')
    });

    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    // window.scrollTo({top: 0, behavior: 'smooth'});
}