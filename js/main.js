

function fselection() {
    var selec =document.getElementById(document.getElementById("select").value);
    selec.scrollIntoView();             
}

function fsearchBar() {
    var contentInSearch = document.getElementById("search").value
    if (contentInSearch == "checkbox" || contentInSearch == "Checkbox" || contentInSearch == "CheckBox" || contentInSearch == "Check Box")
    {
        var search =document.getElementById("checkbox");
    }
    if (contentInSearch == "Radio" || contentInSearch == "radio" || contentInSearch == "RadioButton" || contentInSearch == "radiobutton" || contentInSearch == "Radio Button" || contentInSearch == "radio button")
    {
        var search =document.getElementById("radio");
    }
    if (contentInSearch == "table" || contentInSearch == "table example" || contentInSearch == "Table Example" || contentInSearch == "Table" || contentInSearch == "tableExample")
    {
        var search =document.getElementById("tableExample");
    }
    if (contentInSearch == "date" || contentInSearch == "Date" || contentInSearch == "show date" || contentInSearch == "Show Date" )
    {
        var search =document.getElementById("date");
    }
    search.scrollIntoView();             
}
function factorial(){
    var fac = (document.getElementById("factorialInput").value)*1;
    var ans = 1;
        for (var i = 1; i <= fac; i++)
        {   
            var ans = ans*i;
        }
    if(isNaN(fac)==true)
    {
        document.getElementById("factorialAns").innerHTML = "nope";
    }    
    else
        document.getElementById("factorialAns").innerHTML = "factorial of "+ fac+ "is "+ ans;

}
function fshowDate(){
    today = new Date();
    document.getElementById("showDate").innerHTML= ("todays date is :"+ today.toDateString());

}

function fshowPic(){

    /*var checked = document.getElementById("checkbox9")*/
    var counter =0
    for(var i = 1; i <=9; i++)
    {
        var checkbox = "checkbox"+i
        var check = document.getElementById(checkbox)
        console.log (checkbox)
        console.log(check)
        if(check.checked == true){
            counter++
        }
        console.log(counter)
    }


    if(/*checked.checked === true && */counter ==9)
    {
        document.getElementById("surpriseImage").style.display="block"
    }
    else
    {
        document.getElementById("surpriseImage").style.display="none"
    }
}
var moveCounter =1
function move(){
    var table = document.getElementById("table")

    console.log(moveCounter)
    if(moveCounter ==1)
    table.style.translate = "+20%"
    if(moveCounter ==2)
    table.style.translate = "+40%"
    if(moveCounter ==3)
    table.style.translate = "+60%"
    if(moveCounter ==4)
    table.style.translate = "+80%"
    if(moveCounter ==5)
    table.style.translate = "+100%"
    if(moveCounter ==6)
    table.style.translate = "+120%"
    if(moveCounter ==7)
    {
        table.style.display ="none"
        document.getElementById("stop").innerHTML="Stop!"
    }
    moveCounter++
}




