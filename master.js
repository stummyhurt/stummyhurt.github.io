function styleStatus() {
    statusTxt = readTextFile('status.txt');
    statusTxt = statusTxt.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    console.log(status);

    statusEle = document.getElementsByClassName('status-text')[0];
    statusEle.textContent = statusTxt;

    if (statusTxt.toLowerCase().includes('up')){
        // server working
        statusEle.style.backgroundColor = 'green';
    }else{
        //server down
        statusEle.style.backgroundColor = 'red';
    }
}

function readTextFile(file){
    var out = "Something went wrong getting the status";
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function(){
        if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status == 0){
                var allText = rawFile.responseText;
                out = allText;
            }
        }
    }
    rawFile.send(null);
    return out;
}