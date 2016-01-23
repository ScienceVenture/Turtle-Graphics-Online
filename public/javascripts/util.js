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

switchDisplay("#mycanvas");
