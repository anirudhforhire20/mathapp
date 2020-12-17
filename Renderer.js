//React js is trash so here's everything react can do, better
var position = {
    x : 0,
    y : 0
};
var float_el = null;
var hover_el = null;
function Calculate()
{
    var elements = [];
    for(var ele of document.getElementsByClassName('numb'))
    {
        ele.onmousedown = function(event) {
            const el = this;
            //console.log('down');
            float_el = this;
            //console.log(float_el);
            var copy = this.cloneNode(true);
            for(var e of document.getElementsByClassName('numb'))
            {
                CalculateAnimations(e, float_el);
            }
            for(var e of document.getElementsByClassName('operator'))
            {
                CalculateAnimations(e, float_el);
            }
            copy.id = "floating"
            this.style.visibility = 'hidden';
            copy.style.backgroundColor = 'rgba(255, 255, 255, 0)';
            this.style.position = 'absolute';
            copy.style.position = 'absolute';
            copy.style.left = window.getComputedStyle(el).left;
            copy.style.top = window.getComputedStyle(el).top;
            //position.x = -parseFloat(copy.style.left.split('px')[0]) + parseFloat(event.clientX);
            //position.y = -parseFloat(copy.style.top.split('px')[0]) + parseFloat(event.clientY);
            position.x = -parseFloat(window.getComputedStyle(el).left.split('px')[0]) + parseFloat(event.clientX);
            position.y = -parseFloat(window.getComputedStyle(el).top.split('px')[0]) + parseFloat(event.clientY);
            //console.log(position)
            this.style.position = 'relative';
            document.body.append(copy);
            //event.preventDefault();
        }
        CalculateAnimations(ele, float_el);
    }
    for(var ele of document.getElementsByClassName('operator'))
    {
        ele.onmousedown = function(event) {
            const el = this;
            //console.log('down');
            float_el = this.parentElement;
            for(var e of document.getElementsByClassName('numb'))
            {
                CalculateAnimations(e, float_el);
            }
            for(var e of document.getElementsByClassName('operator'))
            {
                CalculateAnimations(e, float_el);
            }
            var copy = this.parentElement.cloneNode(true);
            copy.id = "floating"
            this.parentElement.style.visibility = 'hidden';
            copy.style.backgroundColor = 'rgba(255, 255, 255, 0)';
            this.parentElement.style.position = 'absolute';
            copy.style.position = 'absolute';
            copy.style.left = window.getComputedStyle(el.parentElement).left;
            copy.style.top = window.getComputedStyle(el.parentElement).top;
            position.x = -parseFloat(window.getComputedStyle(el.parentElement).left.split('px')[0]) + parseFloat(event.clientX);
            position.y = -parseFloat(window.getComputedStyle(el.parentElement).top.split('px')[0]) + parseFloat(event.clientY);
            //position.x = parseFloat(copy.style.width.split('px')[0])/2;
            //position.x = parseFloat(window.copy.style.height.split('px')[0])/2;
            //console.log(position)
            this.parentElement.style.position = 'relative';
            document.body.append(copy);
            //event.preventDefault();
        }
        CalculateAnimations(ele, float_el);
    }
}

document.body.onmousemove = function(event) {
    event.preventDefault();
    if(document.getElementById('floating'))
    {
        //console.log('moving');
        document.getElementById('floating').style.left = (event.clientX - position.x).toString() + 'px';
        document.getElementById('floating').style.top = (event.clientY - position.y).toString() + 'px';
        //document.getElementById('floating').blur();
    }
}
document.body.onmouseup = function(event) {
    event.preventDefault();
    //console.log('up');
    if(document.getElementById('floating'))
    {
        document.getElementById('floating').innerHTML = "";
        document.getElementById('floating').remove();
    } 
    float_el.style.visibility = 'visible';
    MathOperation(hover_el, float_el);
    float_el = null;
    Calculate();
}
Calculate();