var data = 
{
    nat_amt: 0,
    learn_nat: 1,
    learn_nat_cost: 10
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
        document.getElementById("learn_nat").innerHTML = "Learn how to count better (Cost: " + data.learn_nat_cost + ")"
    }
}