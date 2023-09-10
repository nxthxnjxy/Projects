var teacherGrade9 = []; //each variable will save the data I need for the teacher announcement page
var teacherGrade10 = [];
var teacherGrade11 = [];
var teacherGrade12 = [];
var teacherCategory = [];
var teacherClub = [];
var teacherDetails = [];


var counter = 0;

//this functions purpose is to save the data inputed by the teacher
function saveAnnouncement() { //this function will save the announcement
   
    /*getElementById gets the value inputed on the html website code.
    The value is stored in the global variable created in this code.
    EG. htmlTGrade11 is being stored in the variable teacherGrade11*/

    teacherGrade9[counter] = document.getElementById('htmlTGrade9').checked
    teacherGrade10[counter] = document.getElementById('htmlTGrade10').checked
    teacherGrade11[counter] = document.getElementById('htmlTGrade11').checked
    teacherGrade12[counter] = document.getElementById('htmlTGrade12').checked
    teacherCategory[counter] = document.getElementById('htmlTCategories').value
    teacherClub[counter] = document.getElementById('htmlTClubs').value
    teacherDetails[counter] = document.getElementById('htmlTTextArea').value


    counter++;  

    //Counts the number of announcements posted by the teacher


    localStorage.setItem('teacherGrade9key', JSON.stringify(teacherGrade9))
    localStorage.setItem('teacherGrade10key', JSON.stringify(teacherGrade10))
    localStorage.setItem('teacherGrade11key', JSON.stringify(teacherGrade11))
    localStorage.setItem('teacherGrade12key', JSON.stringify(teacherGrade12))
    localStorage.setItem('teacherCategorieskey', JSON.stringify(teacherCategory))
    localStorage.setItem('teacherClubskey', JSON.stringify(teacherClub))
    localStorage.setItem('teacherTextAreakey', JSON.stringify(teacherDetails))

}

function saveExistingAnnouncement() {

    /*
    This function’s purpose is to run when the teacher creator page is loaded.
    It checks if the array is empty. 
    If it isn’t,It will retrieve previous inputs saved at the time it loads and store it into the global variables declared.
    */

    if (JSON.parse(localStorage.getItem("teacherGrade9key")) != null) {
        teacherGrade9 = JSON.parse(localStorage.getItem("teacherGrade9key"));
        teacherGrade10 = JSON.parse(localStorage.getItem("teacherGrade10key"));
        teacherGrade11 = JSON.parse(localStorage.getItem("teacherGrade11key"));
        teacherGrade12 = JSON.parse(localStorage.getItem("teacherGrade12key"));
        teacherCategory = JSON.parse(localStorage.getItem("teacherCategorieskey"));
        teacherClub = JSON.parse(localStorage.getItem("teacherClubskey"));
        teacherDetails = JSON.parse(localStorage.getItem("teacherTextAreakey"));
        counter = teacherGrade9.length;
    }

}
