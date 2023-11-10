var data = 
{
    clicks: 0
}
function incClick()
{
    data.clicks += 1
    document.getElementById("clicks").innerHTML = data.clicks + " clicks"
}