//This script parses the equation
//Two entites can be added, subtracted, multiplied 
//or divided if they share the same parent in a given
//hierarchy level
//for example
//  6*(3 + 2)
//here, 6 and (3 + 2) share the same parent on the same level
//but 6 is a number and (3 + 2) is technically a term
// 3 and 2 are children of given term
//Condiiton 1 is similar types can only be operated(directly)
//6 is not similar to (3 + 2) but 5 and 6 are similar
//we need to parse the children of (3 + 2) in order to figure\
//out which operation or series of operations you should perform
//6*(((3/2) + 2^2)/(4 + 7)) can be considered to contain
//various nested children of multiple types

//Here are rules for relation between different types
// numb(a)*frac(num(numb(b))/den(numb(c))) = frac(num(numb(a*b))/den(numb(c)))    number*numerator/den

//numb(a)*frac(num(term(b))/den(numb(c))) = frac(num(term(a.b))/den(numb(c)))     distrubtive property

// frac(a)*frac(b) = frac(a1*b1/a2*b2) 
//frac(a)+frac(b) apply laws of addition of fractions

//fractions => numbers or terms by dividing denominator with each number in numerator term


function CalculateAnimations(ele, floating)
{
    if(floating != null)
    {
        //console.log(floating.parentElement, ele.parentElement);
        if(ele.classList.contains('operator'))
        {
            ele.onmouseenter = function() {
                this.parentElement.style.backgroundColor = 'grey';
                hover_el = this.parentElement;
                //console.log(hover_el, float_el)
                /*for(var ele of this.parentElement.children)
                {
                    ele.style.backgroundColor = 'grey';
                }*/
            }
            ele.onmouseleave = function() {
                this.parentElement.style.backgroundColor = 'rgba(255,255,255,0)';
                hover_el = null;
                /*for(var ele of this.parentElement.children)
                {
                    ele.style.backgroundColor = 'white';
                }*/
            }
        }
        /*else if((floating.parentElement.classList.contains('den') && (['num', 'term'] in ele.parentElement.classList || ele.classList.contains('numb'))) || ((['num', 'term'] in floating.parentElement.classList || floating.classList.contains('numb')) && ele.parentElement.classList.contains('den')))
        {

            var clone = ele.cloneNode(true);
            ele.parentElement.replaceChild(clone, ele);
        }*/
        else if(floating.parentElement === ele.parentElement)
        {
            ele.onmouseenter = function() {
                this.style.backgroundColor = 'grey';
                hover_el = this;
                //console.log(hover_el, float_el);
            }
            ele.onmouseleave = function() {
                this.style.backgroundColor = 'rgba(255,255,255,0)';
                hover_el = null;
            }
        }
        else if(ele.parentElement.parentElement === floating.parentElement.parentElement)
        {
            if(ele.classList.contains("num") || ele.classList.contains("den"))
            {
                ele.onmouseenter = function() {
                    this.style.backgroundColor = 'grey';
                    hover_el = this;
                    //console.log(hover_el, float_el);
                }
                ele.onmouseleave = function() {
                    this.style.backgroundColor = 'rgba(255,255,255,0)';
                    hover_el = null;
                }   
            }
            else
            {
                ele.onmouseenter = function() {
                    this.parentElement.style.backgroundColor = 'grey';
                    hover_el = this;
                }
                ele.onmouseleave = function() {
                    this.parentElement.style.backgroundColor = 'rgba(255,255,255,0)';
                    hover_el = null;
                }
            }
        }
        else if(ele.parentElement.parentElement == floating.parentElement)
        {
            ele.onmouseenter = function() {
                this.parentElement.style.backgroundColor = 'grey';
                hover_el = this;
                //console.log(hover_el, float_el);
            }
            ele.onmouseleave = function() {
                this.parentElement.style.backgroundColor = 'rgba(255,255,255,0)';
                hover_el = null;
            }
        }
    }
    else
    {
        if(ele.classList.contains('operator'))
        {
            ele.onmouseenter = function() {
                this.parentElement.style.backgroundColor = 'grey';
                /*for(var ele of this.parentElement.children)
                {
                    ele.style.backgroundColor = 'grey';
                }*/
            }
            ele.onmouseleave = function() {
                this.parentElement.style.backgroundColor = 'rgba(255,255,255,0)';
                /*for(var ele of this.parentElement.children)
                {
                    ele.style.backgroundColor = 'white';
                }*/
            }
        }
        else
        {
            ele.onmouseenter = function() {
                this.style.backgroundColor = 'grey';
            }
            ele.onmouseleave = function() {
                this.style.backgroundColor = 'rgba(255,255,255,0)';
            }
        }
    }
}