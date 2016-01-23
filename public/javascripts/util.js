/**
 * Created by sdiemert on 2016-01-23.
 */

function switchDisplay(target){

    $("#mycanvas").hide();
    $("#output").hide();

    $(target).show();

    $('#mycanvas-button').removeClass('active');
    $('#output-button').removeClass('active');

    $(target+'-button').addClass('active');
}

function resetCode(){

    if(confirm("This will delete any code you have written, are you sure you would like to reset?") == true){
        resetCodeHidden();
    }

}

function resetCodeHidden(){
    editor.setValue("import turtle\nt = turtle.Turtle()\n\nt.forward(100)\nprint 'hello!'");
}
function hideError(){
    $("#errorMessage").hide();
}

function showError(msg){
    $("#errorMessage").text("You have an error in your program:\n"+msg);
    $("#errorMessage").show();
}

function runit(){
    hideError();
    runitHidden();
}

// Call these when the file is loaded
hideError();
switchDisplay("#mycanvas");
resetCodeHidden();
