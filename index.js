function changeImage(name)
{
    document.getElementById('images').src = 'images/' + name + '.jpg'
}

function changeWidth() 
{
    document.getElementById('images').width=document.getElementById('width').value;
}

function changeHeight()
{
    document.getElementById('images').height=document.getElementById('height').value;
}

function changeBorder()
{
    document.getElementById('images').border=document.getElementById('border').value;
}

function applied()
{
    document.getElementById('images').alt=document.getElementById('alt').value;
    document.getElementById('alt').value="";
}
