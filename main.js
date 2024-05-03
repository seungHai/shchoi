function fnDownload(type){
    const link = document.createElement('a');
    link.href = "images/"+type+".png";
    link.download = type; 
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
}