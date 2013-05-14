// Houston Bennett
// ASD 1305
// JavaScript Template



$('#home').on('pageinit', function () {
    //code needed for home page goes here
    var CharForm = $('#addCharForm');
    CharForm.validate();


});

$('#addNew').on('pageinit', function () {
    console.log('Hello!')
    var myForm = $('#addCharForm');
    myForm.validate({
        invalidHandler: function (form, validator) {
            console.log('WRONG!');
        },
        submitHandler: function () {
            var data = myForm.serializeArray();
            console.log("Correct!");
            storeData(data);
        }
    });

    //any other code needed for addItem page goes here

});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

//Variables for use in functions below




var autofillData = function () {

};

//Find radio button value

function getRadio() {

    var rdoButtons = document.forms[0].RdoGender;
    for (var i = 0; i < rdoButtons.length; i++) {
        if (rdoButtons[i].checked) {
            genderVal = rdoButtons[i].value;
        }


    }

}

var getData = function () {

};

var storeData = function (x) {
    var formData = x,
        userID = Math.floor(Math.random() * 1000001);
    console.log(formData);
    localStorage.setItem(userID, JSON.stringify(formData));

};

var deleteItem = function () {

};

var clearLocal = function () {

};