
$(document).ready(function () {
    $.ajax({
        //catche:false,
        url: "http://localhost/Scripts/vehicles.json",
        //file:///D:/Roja/Qualminds.JqueryApp/Qualminds.JqueryApp/Scripts/vehicles.json
        //url: "http://www.leaseasp.com/quote/SVCQuote_Offer.php?Source=10011&VIN=00000000000000000&CDSID=372797&Odometer=12000&Purchase=36000&MSRP=32660&DownPayment=0&sxml=3&Beacon=700",
        method: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        
        success: function (data) {
           // alert("success");
            //JSON.stringify(data)
            alert(JSON.stringify(data));
        },

        fail: function (jqXHR, textStatus) {
            alert("fa");
        },
        error: function (err) {
            alert(err);
            console.log(err);
        },
    });
    $(".hi").click(function () {
        $("#bar").text("ajax start handler");

    });
    $(document).ajaxComplete(function () {
        $("#bar").text("ajax complete function is completed");
    });
    //$.getJSON("/Style/vehicles.json", function (data) {
    //    alert("success");
    //});
    //message = "Spoon!";
    //$("#bar").dblclick(function () {
    //    alert(message);
    //});
    //message = "Not in the face!";
    //$("#foo").click(function () {
    //    message = "roja";
    //    alert(message);
    //});
    $(window).scroll();
    $("body").delegate(".r", "click", function () {
        $(this).after("another paragragh");
    });
    $("#bar").one("click", function () {
        alert("hello");
    });
    $(window).resize(function(){
        $("body").append("<div>" + $(window).width() +  + $(window).height()+ "</div>");
    });
    function notify() {
        alert("button clicked");
    }
    function names(event) {
        alert("hello" + event.data.name);
    }
    $("#btn").on("click", { name: "roja" },names);
    $("#btn").on("click", { name: "ooha" }, names);
    $("#btn").on("click", { name: "7S1R" }, names);
    $("span").blur(function () {
        alert("this is blur event");
    });
    $("#newbutton").click(function () {
        $("#firstname").on("focus",function() {
            alert("focus function is called");
        });
    });
    $("#lastname").blur(function () {
        alert("blur function ");
    });
    $(".p").mouseup(function () {
        $(this).append("<span style='color:#f00;'>Mouse up.</span>");
    });
    $(".p").mousedown(function () {
        $(this).append("<span style='color:#cccccc;'>Mouse Down.</span>");
    });
    $(document).on("mousemove", function () {
        $("#infodisaplay").text("pageX: " + event.pageX + ", pageY: " + event.pageY);
       
    });
    //$(document).ajaxStart(function () {
    //    $(".hi").text("ajax started");
    //});
    //$(document).ajaxstart(function () {
    //    $("#loading").show();
    //});
    //$("#bar").trigger("click", { name1: "sneha" });
});