function display(value)
{
     document.getElementById("result").value += value;
}


function clearScreen(value)
{
     document.getElementById("result").value = "";
}


function calculate()
{
     var a = document.getElementById("result").value;
     var b = eval(a);
     document.getElementById("result").value= b;
}

function del(value)
{
     result.value = result.value.slice(0 , -1);

}

