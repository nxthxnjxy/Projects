var studentGrade9;
var studentGrade10;
var studentGrade11;
var studentGrade12;
var studentCategories;
var studentClubs;


//This function will save the inputs made by the student
function saveStudentData() {
    studentGrade9 = document.getElementById('htmlSGrade9').checked; 
    studentGrade10 = document.getElementById('htmlSGrade10').checked;
    studentGrade11 = document.getElementById('htmlSGrade11').checked;
    studentGrade12 = document.getElementById('htmlSGrade12').checked;
    studentCategories = document.getElementById('htmlSCategories').value;
    studentClubs = document.getElementById('htmlSClubs').value;
    

    localStorage.setItem('studentGrade9key', studentGrade9);
    localStorage.setItem('studentGrade10key', studentGrade10);
    localStorage.setItem('studentGrade11key', studentGrade11);
    localStorage.setItem('studentGrade12key', studentGrade12);
    localStorage.setItem('studentCategorieskey', studentCategories);
    localStorage.setItem('studentClubskey', studentClubs);


}