
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite :: 
	Check Daten :: 
    Btn. Trigger :: 
    Business-Logic (Alter --> Getränk) :: 
    Bild austauschen :: 
*/

/***  Ablaufsteuerung | Control */  



/*** View-Schicht aktualisieren */ 
//1.Modul: Bild aktualisieren I Test:
output(updateImg("cola"));
// output(updateImg("milch"));
// output(updateImg("wein"));
function updateImg(imgName) {
    const img = document.getElementById("bevImg");
    img.src = "./bilder/cola.jpg";
    // output(img.src);
    return imgName;
}



//1. Modul: Konsolenausgabe --> Test:
function output(outputData) {
    console.log(outputData);
}