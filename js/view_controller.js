
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite :: 
	Check Daten :: 
    Btn. Trigger :: 
    Business-Logic (Alter --> Getränk) :: Check!
    Bild austauschen :: Check!
*/

/***  Ablaufsteuerung | Control */  
//5.Modul Ablaufsteuerung 
controller()
function controller() {
    output(updateImg(checkAge(10)))
}

//4.Modul Eingabe
function getInput() {
    return parseInt("18");
}


/**Business-Logic */
//3.Modul: Buisness-Logic (Mapping)
// output(checkAge(2));
// output(checkAge(7));
// output(checkAge(13));
// output(checkAge(18));
// output(checkAge(99));
// output(checkAge(135));
function checkAge(age) {
    switch (true) {
        case (age >= data.milk.lower) && (age <= data.milk.upper) :
            return data.milch.bev;           
        case (age >= data.juice.lower) && (age <= data.juice.upper):
            return data.juice.bev;
        case (age >= data.cola.lower) && (age <= data.cola.upper):
            return data.cola.bev;
        case (age >= data.wine.lower) && (age <= data.wine.upper):
            return data.wine.bev;
        default:
            return data.default.bev;
    }
}

/*** View-Schicht aktualisieren */ 
//2.Modul: Bild aktualisieren I Test:
//output(updateImg("cola"));
//output(updateImg("milch"));
// output(updateImg("wein"));
function updateImg(imgName) {
    const img = document.getElementById("bevImg");
    img.src = gui.img.path + imgName + gui.img.ext;
    return imgName;
}



//1. Modul: Konsolenausgabe --> Test:
function output(outputData) {
    console.log(outputData);
}