var data = 
{
    nat_amt: 0,
    learn_nat: 1,
    learn_nat_cost: 10,
    auto_nat: false,
    fast_nat: 1000,
    fast_nat_cost: 100
}
/*
var saveGameLoop = window.setInterval(function() 
{
    localStorage.setItem("mathStudentSave", JSON.stringify(data))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("mathStudentSave"))
if (savegame !== null) {
  data = savegame
}
*/

var natLoop = window.setInterval(function() {
    if (data.auto_nat)
    {
        incNat()
    }
}, 1000)

function incNat()
{
    data.nat_amt += data.learn_nat
    natDisplay()
}

function natDisplay()
{
    if (data.nat_amt == 0)
    {
        document.getElementById("nat").innerHTML = "&#8469; = {0}"
    } else if (data.nat_amt == 1)
    {
        document.getElementById("nat").innerHTML = "&#8469; = {0, " + data.nat_amt + "}"
    } else if (data.nat_amt == 2)
    {
        document.getElementById("nat").innerHTML = "&#8469; = {0, 1, " + data.nat_amt + "}"
    } else
    {
        document.getElementById("nat").innerHTML = "&#8469; = {0, 1, ..., " + data.nat_amt + "}"
    }
}

function learnNat()
{
    if (data.nat_amt >= data.learn_nat_cost)
    {
        data.nat_amt -= data.learn_nat_cost
        natDisplay()
        data.learn_nat += 1
        data.learn_nat_cost *= 2
        document.getElementById("learn_nat").innerHTML = "Learn how to count better<br>(Cost: " + data.learn_nat_cost + ")"
    }
}

function autoNat()
{
    if (data.nat_amt >= 100)
    {
        data.nat_amt -= 100
        natDisplay()
        data.auto_nat = true

        document.getElementById("auto_nat").innerHTML = "Count automatically<br>Purchased"
    }
}

function fastNat()
{
    if (data.nat_amt >= data.fast_nat_cost)
    {
        data.nat_amt -= data.fast_nat_cost
        natDisplay()
        data.fast_nat *= 0.9
        data.fast_nat_cost *= 10
        clearInterval(natLoop)
        natLoop = window.setInterval(
            function() {
                if (data.auto_nat)
                {
                    incNat()
                }
            }, data.fast_nat)
        document.getElementById("fast_nat").innerHTML = "Count faster<br>(Cost: " + data.fast_nat_cost + ")"
    }
}

function openTab(evt, tabName)
{
    var i, tabcontent, tablinks

    tabcontent = document.getElementsByClassName("tabcontent")

    for (i = 0; i < tabcontent.length; i++)
    {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks")

    for(i = 0; i < tablinks.length; i++)
    {
        tablinks[i].className = tablinks[i].className.replace("active", "")
    }

    document.getElementById(tabName).style.display = "block"
    evt.currentTarget.className += "active"
}