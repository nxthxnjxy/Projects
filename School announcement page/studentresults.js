var teacherGrade9 = [];
var teacherGrade10 = [];
var teacherGrade11 = [];
var teacherGrade12 = [];
var teacherCategory = [];
var teacherClub = [];
var teacherDetails = [];

var announcementKeeper = "";

var studentGrade9;
var studentGrade10;
var studentGrade11;
var studentGrade12;
var studentCategories;
var studentClubs;


function displayResults() { //This functions purpose is to display the search results from the student's input


    teacherGrade9 = JSON.parse(localStorage.getItem("teacherGrade9key"));
    teacherGrade10 = JSON.parse(localStorage.getItem("teacherGrade10key"));
    teacherGrade11 = JSON.parse(localStorage.getItem("teacherGrade11key"));
    teacherGrade12 = JSON.parse(localStorage.getItem("teacherGrade12key"));
    teacherCategory = JSON.parse(localStorage.getItem("teacherCategorieskey"));
    teacherClub = JSON.parse(localStorage.getItem("teacherClubskey"));
    teacherDetails = JSON.parse(localStorage.getItem("teacherTextAreakey"));

    /*The code above and below takes the item stored in the local storages
    and assigns it to those specific variables.  */

    studentGrade9 = JSON.parse(localStorage.getItem('studentGrade9key'));
    studentGrade10 = JSON.parse(localStorage.getItem('studentGrade10key'));
    studentGrade11 = JSON.parse(localStorage.getItem('studentGrade11key'));
    studentGrade12 = JSON.parse(localStorage.getItem('studentGrade12key'));
    studentCategories = localStorage.getItem('studentCategorieskey');
    studentClubs = localStorage.getItem('studentClubskey');


    for (let i = 0; i < teacherGrade9.length; i++) {

        var gradeChoice = "";

        if (teacherGrade9[i] === true) {
            gradeChoice += "Grade 9; ";
        }
        if (teacherGrade10[i] === true) {
            gradeChoice += "Grade 10; ";
        }
        if (teacherGrade11[i] === true) {
            gradeChoice += "Grade 11; ";
        }
        if (teacherGrade12[i] === true) {
            gradeChoice += "Grade 12; ";
        }

        if ((studentGrade9 == teacherGrade9[i] && studentGrade9 == true) &&
            (studentGrade10 == teacherGrade10[i]&& studentGrade10 == true) &&
            (studentGrade11 == teacherGrade11[i]&& studentGrade11 == true) &&
            (studentGrade11 == teacherGrade11[i]&& studentGrade12 == true) &&
            (studentCategories == teacherCategory[i]) &&
            (studentClubs == teacherClub[i])) {

            announcementKeeper += gradeChoice;
            announcementKeeper += '\n';
            announcementKeeper += teacherClub[i]
            announcementKeeper += '\n';
            announcementKeeper += teacherCategory[i]
            announcementKeeper += '\n';
            announcementKeeper += teacherDetails[i];
            announcementKeeper += '\n';
            announcementKeeper += '\n';

            document.getElementById('htmlSTextarea').innerHTML = announcementKeeper;

        } else if ((studentGrade9 == teacherGrade9[i] && studentGrade9 == true) ||
            (studentGrade10 == teacherGrade10[i] && studentGrade10 == true) ||
            (studentGrade11 == teacherGrade11[i] && studentGrade11 == true) ||
            (studentGrade12 == teacherGrade12[i] && studentGrade12 == true) ||
            (studentCategories == teacherCategory[i] && teacherCategory[i] != "None") ||
            (studentClubs == teacherClub[i] && teacherClub[i] != "None2")) {

            announcementKeeper += gradeChoice;
            announcementKeeper += '\n';
            announcementKeeper += teacherClub[i]
            announcementKeeper += '\n';
            announcementKeeper += teacherCategory[i]
            announcementKeeper += '\n';
            announcementKeeper += teacherDetails[i];
            announcementKeeper += '\n';
            announcementKeeper += '\n';

            document.getElementById('htmlSTextarea').innerHTML = announcementKeeper;

        }



    }

}
