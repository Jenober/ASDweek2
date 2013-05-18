// Houston Bennett
// ASD 1305
// JavaScript Template



$('#home').on('pageinit', function () {

});

$('#addNew').on('pageinit', function () {
    console.log('addNew Init ok');
    var myForm = $('#addCharForm');

    myForm.validate({
        invalidHandler: function (form, validator) {
            console.log('WRONG!');
        },
        submitHandler: function () {
            console.log('Validation OK. Begin Form Serialize.');
            var data = myForm.serializeArray();
            console.log("This is the serialized data: "+ data);
            console.log("Calling storeData!");

            storeData();
        }
    });

    //any other code needed for addItem page goes here

});

$('#newestPage').on('pageinit', function(){
    console.log("Newest Char page has loaded!!");

    console.log("CAlling getData!!");
    getData();



})



//The functions below can go inside or outside the pageinit function for the page in which it is needed.

//Variables for use in functions below




var autofillData = function () {

};


var getData = function () {

    console.log("getData has been called!")
    var charList = $('#contentDiv');
        charList.append("<ul>" );

for(var num = 0, len = localStorage.length; num<len; num++){

    var key = localStorage.key(num),
        localData = localStorage.getItem(key),
        parsedData = JSON.parse(localData);


    $.each(parsedData, function(z, value){


        var listItem = value[0]+ '  '+ value[1];
console.log(parsedData);
        charList.append("<li>" + listItem + "</li>");


    });
    charList.append("<a data-role='button' href='#' data-theme='a'>Edit Character</a>" )
    charList.append("<button type='button' data-inline='true' id='delBtn'>Delete Character</button>" )
        charList.append("<p></p>")

}


    $('#charList').html('</ul>');




};

$('#editBtn').on('click',function(){






})

var storeData = function () {
console.log('Creating randoms')
    var userID = Math.floor(Math.random() * 1000001);

    var inputData = {};

        inputData.date = ["Creation Date: ", $('#CharDate').val()];
        inputData.name = ["Character Name: ", $('#CharName').val()];
    inputData.race = ["Character Race: ", $('#CharRace').val()];
    inputData.class = ["Class: ", $('#CharClass').val()];
    inputData.str = ["Strength: ", $('#CharStr').val()];
    inputData.con = ["Constitution: ", $('#CharCon').val()];
    inputData.dex = ["Dexterity: ", $('#CharDex').val()];
    inputData.int = ["Intelligence: ", $('#CharInt').val()];
    inputData.wis = ["Wisdom: ", $('#CharWis').val()];
    inputData.cha = ["Charisma: ", $('#CharCha').val()];
   //This block above seems silly to me. There must be a way to loop through the DOM
   //and gather each input value. I think traversing could accomplish this
   // I don't know how to implement the idea just yet.
    console.log(inputData);
    localStorage.setItem(userID, JSON.stringify(inputData));
    console.log("Save Complete!")
};

var deleteItem = function () {

};

var clearLocal = function () {

};