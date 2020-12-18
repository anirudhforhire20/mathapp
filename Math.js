function MathOperation(div1, div2)
{
    console.log(div1, div2)
    if(div1.parentElement != div2.parentElement)
    {
        if(div1.parentElement.parentElement === div2.parentElement.parentElement)
        {
            if(div1.parentElement.parentElement.classList.contains('fraction'))
            {
                console.log('fraction');
                var sm = 1;
                var gt = 1;
                if(Math.abs(parseFloat(div1.innerHTML)) >= Math.abs(parseFloat(div2.innerHTML)))
                {
                    sm = Math.abs(parseFloat(div2.innerHTML));
                    gt = Math.abs(parseFloat(div1.innerHTML));
                }
                else
                {
                    sm = Math.abs(parseFloat(div1.innerHTML));
                    gt = Math.abs(parseFloat(div2.innerHTML));
                }
                console.log(sm,gt);
                for(var i = sm; i <= gt; i++)
                {
                    if(gt%sm == 0)
                    {
                        console.log(i);
                        div2.innerHTML = (parseFloat(div2.innerHTML)/i).toString();
                        div1.innerHTML = (parseFloat(div1.innerHTML)/i).toString();
                        if(div1.innerHTML == '1')
                        {
                            if(div1.parentElement.classList.contains('den'))
                            {
                                var numb = document.createElement('div');
                                numb.classList.add('numb');
                                numb.innerHTML = div2.innerHTML;
                                div1.parentElement.parentElement.replaceWith(numb);
                            }
                        }
                        else if(div2.innerHTML == '1')
                        {
                            if(div2.parentElement.classList.contains('den'))
                            {
                                var numb = document.createElement('div');
                                numb.classList.add('numb');
                                numb.innerHTML = div1.innerHTML;
                                div2.parentElement.parentElement.replaceWith(numb);
                            }
                        }
                        break;
                    }
                }
            }
            else if(div2.parentElement.children.length == 3 && div1.parentElement.children.length == 3)
            {
                if(div2.parentElement.previousElementSibling && div1.parentElement.nextElementSibling)
                {
                    if(div2.parentElement.previousElementSibling == div1.parentElement.nextElementSibling && div2.parentElement.previousElementSibling.classList.contains('multiply'))
                    {
                        if((div2.parentElement.children[1].classList.contains('plus') || div2.parentElement.children[1].classList.contains('minus')) && (div1.parentElement.children[1].classList.contains('plus') || div1.parentElement.children[1].classList.contains('minus')))
                        {
                            var op = div2.parentElement.previousElementSibling
                            var a = parseFloat(div2.parentElement.children[0].innerHTML);
                            var b = parseFloat(div1.parentElement.children[0].innerHTML);
                            var c = parseFloat(div2.parentElement.children[2].innerHTML);
                            var d = parseFloat(div1.parentElement.children[2].innerHTML);
                            if(div2.parentElement.children[1].classList.contains('minus'))
                            {
                                c = -parseFloat(div2.parentElement.children[2].innerHTML);
                            }
                            if(div1.parentElement.children[1].classList.contains('minus'))
                            {
                                d = -parseFloat(div1.parentElement.children[2].innerHTML);
                            }
                            var reshtml = document.createElement('div');
                            reshtml.classList.add('numb');
                            //console.log(a + c, b + d);
                            reshtml.innerHTML = (a*b + a*d + c*b + c*d).toString();
                            div1.parentElement.replaceWith(reshtml);
                            div2.parentElement.remove();
                            //console.log(div2.parentElement.previousElementSibling);
                            op.remove();
                            if(reshtml.parentElement.children.length == 1)
                            {
                                var ap = reshtml.parentElement;
                                ap.replaceWith(reshtml);
                                //ap.append(reshtml);
                            }
                            /*if(reshtml.innerHTML.toString()[0] == '-')
                                {
                                    if(reshtml.previousElementSibling && reshtml.previousElementSibling.classList.contains('operator'))
                                    {
                                        reshtml.previousElementSibling.innerHTML = '&minus;'
                                    }
                                    else
                                    {
                                        var neg = document.createElement('div');
                                        neg.classList.add('operator', 'minus');
                                        reshtml.insertAdjacentElement('beforebegin', neg);
                                    }
                                }*/
                        }
                    }
                }
                else if(div1.parentElement.previousElementSibling && div2.parentElement.nextElementSibling)
                {
                    if(div1.parentElement.previousElementSibling === div2.parentElement.nextElementSibling && div1.parentElement.previousElementSibling.classList.contains('multiply'))
                    {
                        if((div2.parentElement.children[1].classList.contains('plus') || div2.parentElement.children[1].classList.contains('minus')) && (div1.parentElement.children[1].classList.contains('plus') || div1.parentElement.children[1].classList.contains('minus')))
                        {
                            var op = div1.parentElement.previousElementSibling;
                            var a = parseFloat(div2.parentElement.children[0].innerHTML);
                            var b = parseFloat(div1.parentElement.children[0].innerHTML);
                            var c = parseFloat(div2.parentElement.children[2].innerHTML);
                            var d = parseFloat(div1.parentElement.children[2].innerHTML);
                            if(div2.parentElement.children[1].classList.contains('minus'))
                            {
                                c = -parseFloat(div2.parentElement.children[2].innerHTML);
                            }
                            if(div1.parentElement.children[1].classList.contains('minus'))
                            {
                                d = -parseFloat(div1.parentElement.children[2].innerHTML);
                            }
                            var reshtml = document.createElement('div');
                            reshtml.classList.add('numb');
                            //console.log(a + c, b + d);
                            reshtml.innerHTML = (a*b + a*d + c*b + c*d).toString();
                            div1.parentElement.replaceWith(reshtml);
                            div2.parentElement.remove();
                            //div1.parentElement.previousElementSibling.remove();
                            op.remove();
                            if(reshtml.parentElement.children.length == 1)
                            {
                                var ap = reshtml.parentElement;
                                ap.replaceWith(reshtml);
                                //ap.append(reshtml);
                            }
                            /*if(reshtml.innerHTML.toString()[0] == '-')
                                {
                                    if(reshtml.previousElementSibling && reshtml.previousElementSibling.classList.contains('operator'))
                                    {
                                        reshtml.previousElementSibling.innerHTML = '&minus;'
                                    }
                                    else
                                    {
                                        var neg = document.createElement('div');
                                        neg.classList.add('operator', 'minus');
                                        reshtml.insertAdjacentElement('beforebegin', neg);
                                    }
                                }*/
                        }
                    }
                }
            }
        }
        else if(div1.parentElement.classList.contains('term'))
        {
            if(div2.parentElement.classList.contains('term'))
            {
                if(div2.parentElement.children.length == 1 && div1.parentElement.children.length == 1)
                {
                    var a = parseFloat(div1.innerHTML);
                    var b = parseFLoat(div2.innerHTML);
                    div1 = div1.parentElement;
                    div2 = div2.parentElement;
                    if(div1.previousElementSibling && div2.nextElementSibling)
                    {
                        if(div1.previousElementSibling == div2.nextElementSibling && div1.previousElementSibling.classList.contains('operator'))
                        {
                            var op = div1.previousElementSibling;
                            var res = 0;
                            if(op.classList.contains('plus'))
                            {
                                var res =  parseFloat(div1.innerHTML) + parseFloat(div2.innerHTML);
                            }
                            else if(op.classList.contains('minus'))
                            {
                                var res =  parseFloat(div1.innerHTML) - parseFloat(div2.innerHTML);   
                            }
                            else if(op.classList.contains('multiply'))
                            {
                                var res =  parseFloat(div1.innerHTML) * parseFloat(div2.innerHTML);
                            }
                            var reshtml = document.createElement('div');
                            reshtml.classList.add('numb');
                            reshtml.innerHTML = res.toString();
                            div1.replaceWith(reshtml);
                            op.remove();
                            div2.remove();
                            /*if(reshtml.innerHTML.toString()[0] == '-')
                                {
                                    if(reshtml.previousElementSibling && reshtml.previousElementSibling.classList.contains('operator'))
                                    {
                                        reshtml.previousElementSibling.innerHTML = '&minus;'
                                    }
                                    else
                                    {
                                        var neg = document.createElement('div');
                                        neg.classList.add('operator', 'minus');
                                        reshtml.insertAdjacentElement('beforebegin', neg);
                                    }
                                }*/
                        }
                    }
                    else if(div2.previousElementSibling && div1.nextElementSibling)
                    {
                        if(div2.previousElementSibling == div1.nextElementSibling && div2.previousElementSibling.classList.contains('operator'))
                        {
                            var op = div2.previousElementSibling;
                            var res = 0;
                            if(op.classList.contains('plus'))
                            {
                                var res =  parseFloat(div1.innerHTML) + parseFloat(div2.innerHTML);
                            }
                            else if(op.classList.contains('minus'))
                            {
                                var res =  parseFloat(div1.innerHTML) - parseFloat(div2.innerHTML);   
                            }
                            else if(op.classList.contains('multiply'))
                            {
                                var res =  parseFloat(div1.innerHTML) * parseFloat(div2.innerHTML);
                            }
                            var reshtml = document.createElement('div');
                            reshtml.classList.add('numb');
                            reshtml.innerHTML = res.toString();
                            div1.replaceWith(reshtml);
                            op.remove();
                            div2.remove();
                            /*if(reshtml.innerHTML.toString()[0] == '-')
                                {
                                    if(reshtml.previousElementSibling && reshtml.previousElementSibling.classList.contains('operator'))
                                    {
                                        reshtml.previousElementSibling.innerHTML = '&minus;'
                                    }
                                    else
                                    {
                                        var neg = document.createElement('div');
                                        neg.classList.add('operator', 'minus');
                                        reshtml.insertAdjacentElement('beforebegin', neg);
                                    }
                                }*/
                        }
                    }
                }
                else if(div2.parentElement.children.length == 3 && div1.parentElement.children.length == 3)
                {
                    if(div2.parentElement.previousElementSibling && div1.parentElement.nextElementSibling)
                    {
                        if(div2.parentElement.previousElementSibling == div1.parentElement.nextElementSibling && div2.parentElement.previousElementSibling.classList.contains('multiply'))
                        {
                            if((div2.parentElement.children[1].classList.contains('plus') || div2.parentElement.children[1].contains('minus')) && (div1.parentElement.children[1].classList.contains('plus') || div1.parentElement.children[1].contains('minus')))
                            {
                                var op = div2.parentElement.previousElementSibling
                                var a = parseFloat(div2.parentElement.children[0].innerHTML);
                                var b = parseFloat(div1.parentElement.children[0].innerHTML);
                                var c = parseFloat(div2.parentElement.children[2].innerHTML);
                                var d = parseFloat(div1.parentElement.children[2].innerHTML);
                                if(div2.parentElement.children[1].classList.contains('minus'))
                                {
                                    c = -parseFloat(div2.parentElement.children[2].innerHTML);
                                }
                                if(div1.parentElement.children[1].classList.contains('minus'))
                                {
                                    d = -parseFloat(div1.parentElement.children[2].innerHTML);
                                }
                                var reshtml = document.createElement('div');
                                reshtml.classList.add('numb');
                                //console.log(a + c, b + d);
                                reshtml.innerHTML = (a*b + a*d + c*b + c*d).toString();
                                div1.parentElement.replaceWith(reshtml);
                                div2.parentElement.remove();
                                //console.log(div2.parentElement.previousElementSibling);
                                op.remove();
                                if(reshtml.parentElement.children.length == 1)
                                {
                                    var ap = reshtml.parentElement;
                                    ap.replaceWith(reshtml);
                                    //ap.append(reshtml);
                                }
                                /*if(reshtml.innerHTML.toString()[0] == '-')
                                {
                                    if(reshtml.previousElementSibling && reshtml.previousElementSibling.classList.contains('operator'))
                                    {
                                        reshtml.previousElementSibling.innerHTML = '&minus;'
                                    }
                                    else
                                    {
                                        var neg = document.createElement('div');
                                        neg.classList.add('operator', 'minus');
                                        reshtml.insertAdjacentElement('beforebegin', neg);
                                    }
                                }*/
                            }
                        }
                    }
                    else if(div1.parentElement.previousElementSibling && div2.parentElement.nextElementSibling)
                    {
                        if(div1.parentElement.previousElementSibling === div2.parentElement.nextElementSibling && div1.parentElement.previousElementSibling.classList.contains('multiply'))
                        {
                            if((div2.parentElement.children[1].classList.contains('plus') || div2.parentElement.children[1].contains('minus')) && (div1.parentElement.children[1].classList.contains('plus') || div1.parentElement.children[1].contains('minus')))
                            {
                                var op = div1.parentElement.previousElementSibling;
                                var a = parseFloat(div2.parentElement.children[0].innerHTML);
                                var b = parseFloat(div1.parentElement.children[0].innerHTML);
                                var c = parseFloat(div2.parentElement.children[2].innerHTML);
                                var d = parseFloat(div1.parentElement.children[2].innerHTML);
                                if(div2.parentElement.children[1].classList.contains('minus'))
                                {
                                    c = -parseFloat(div2.parentElement.children[2].innerHTML);
                                }
                                if(div1.parentElement.children[1].classList.contains('minus'))
                                {
                                    d = -parseFloat(div1.parentElement.children[2].innerHTML);
                                }
                                var reshtml = document.createElement('div');
                                reshtml.classList.add('numb');
                                //console.log(a + c, b + d);
                                reshtml.innerHTML = (a*b + a*d + c*b + c*d).toString();
                                div1.parentElement.replaceWith(reshtml);
                                div2.parentElement.remove();
                                //div1.parentElement.previousElementSibling.remove();
                                op.remove();
                                if(reshtml.parentElement.children.length == 1)
                                {
                                    var ap = reshtml.parentElement;
                                    ap.replaceWith(reshtml);
                                    //ap.append(reshtml);
                                }
                                /*if(reshtml.innerHTML.toString()[0] == '-')
                                {
                                    if(reshtml.previousElementSibling && reshtml.previousElementSibling.classList.contains('operator'))
                                    {
                                        reshtml.previousElementSibling.innerHTML = '&minus;'
                                    }
                                    else
                                    {
                                        var neg = document.createElement('div');
                                        neg.classList.add('operator', 'minus');
                                        reshtml.insertAdjacentElement('beforebegin', neg);
                                    }
                                }*/
                            }
                        }
                    }
                }
                /*else if(div2.classList.contains('numb'))
                {
                    if(div1.parentElement.children.length == 3)
                    {
                        if(div2.previousElementSibling && div1.parentElement.nextElementSibling)
                        {
                            if(div2.previousElementSibling == div1.parentElement.nextElementSibling && div2.previousElementSibling.classList.contains('multiply'))
                            {
                                var op = div2.previousElementSibling;
                                var a = parseFloat(div2.innerHTML);
                                var b = parseFloat(div1.parentElement.children[0]);
                                var c = parseFloat(div1.parentElement.children[2]);
                                var res = 0;
                                if(div1.parentElement.children[1].classList.contains('plus'))
                                {
                                    res = a*b + a*c;
                                }
                                else if(div1.parentElement.children[1].classList.contains('minus'))
                                {
                                    res = a*b - a*c;
                                }
                                var reshtml = document.createElement('div');
                                reshtml.classList.add('numb');
                                reshtml.innerHTML = res.toString();
                                div2.replaceWith(reshtml);
                                div1.parentElement.remove();
                                op.remove();
                            }
                        }
                        if(div2.nextElementSibling && div1.parentElement.previousElementSibling)
                        {
                            if(div2.nextElementSibling == div1.parentElement.previousElementSibling && div2.nextElementSibling.classList.contains('multiply'))
                            {
                                var op = div2.nextElementSibling;
                                var a = parseFloat(div2.innerHTML);
                                var b = parseFloat(div1.parentElement.children[0]);
                                var c = parseFloat(div1.parentElement.children[2]);
                                var res = 0;
                                if(div1.parentElement.children[1].classList.contains('plus'))
                                {
                                    res = a*b + a*c;
                                }
                                else if(div1.parentElement.children[1].classList.contains('minus'))
                                {
                                    res = a*b - a*c;
                                }
                                var reshtml = document.createElement('div');
                                reshtml.classList.add('numb');
                                reshtml.innerHTML = res.toString();
                                div2.replaceWith(reshtml);
                                div1.parentElement.remove();
                                op.remove();
                            }
                        }
                    }
                }*/
            }
            else if(div2.classList.contains('numb'))
            {
                if(div1.parentElement.children.length == 1)
                {
                    var a = parseFloat(div1.innerHTML);
                    var b = parseFLoat(div2.innerHTML);
                    div1 = div1.parentElement;
                    if(div1.previousElementSibling && div2.nextElementSibling)
                    {
                        if(div1.previousElementSibling == div2.nextElementSibling && div1.previousElementSibling.classList.contains('operator'))
                        {
                            var op = div1.previousElementSibling;
                            var res = 0;
                            if(op.classList.contains('plus'))
                            {
                                var res =  parseFloat(div1.innerHTML) + parseFloat(div2.innerHTML);
                            }
                            else if(op.classList.contains('minus'))
                            {
                                var res =  parseFloat(div1.innerHTML) - parseFloat(div2.innerHTML);   
                            }
                            else if(op.classList.contains('multiply'))
                            {
                                var res =  parseFloat(div1.innerHTML) * parseFloat(div2.innerHTML);
                            }
                            var reshtml = document.createElement('div');
                            reshtml.classList.add('numb');
                            reshtml.innerHTML = res.toString();
                            div1.replaceWith(reshtml);
                            op.remove();
                            div2.remove();
                            /*if(reshtml.innerHTML.toString()[0] == '-')
                                {
                                    if(reshtml.previousElementSibling && reshtml.previousElementSibling.classList.contains('operator'))
                                    {
                                        reshtml.previousElementSibling.innerHTML = '&minus;'
                                    }
                                    else
                                    {
                                        var neg = document.createElement('div');
                                        neg.classList.add('operator', 'minus');
                                        reshtml.insertAdjacentElement('beforebegin', neg);
                                    }
                                }*/
                        }
                    }
                    else if(div2.previousElementSibling && div1.nextElementSibling)
                    {
                        if(div2.previousElementSibling == div1.nextElementSibling && div2.previousElementSibling.classList.contains('operator'))
                        {
                            var op = div2.previousElementSibling;
                            var res = 0;
                            if(op.classList.contains('plus'))
                            {
                                var res =  parseFloat(div1.innerHTML) + parseFloat(div2.innerHTML);
                            }
                            else if(op.classList.contains('minus'))
                            {
                                var res =  parseFloat(div1.innerHTML) - parseFloat(div2.innerHTML);   
                            }
                            else if(op.classList.contains('multiply'))
                            {
                                var res =  parseFloat(div1.innerHTML) * parseFloat(div2.innerHTML);
                            }
                            var reshtml = document.createElement('div');
                            reshtml.classList.add('numb');
                            reshtml.innerHTML = res.toString();
                            div1.replaceWith(reshtml);
                            op.remove();
                            div2.remove();
                            /*if(reshtml.innerHTML.toString()[0] == '-')
                                {
                                    if(reshtml.previousElementSibling && reshtml.previousElementSibling.classList.contains('operator'))
                                    {
                                        reshtml.previousElementSibling.innerHTML = '&minus;'
                                    }
                                    else
                                    {
                                        var neg = document.createElement('div');
                                        neg.classList.add('operator', 'minus');
                                        reshtml.insertAdjacentElement('beforebegin', neg);
                                    }
                                }*/
                        }
                    }
                }
            }
        }
        else if(div2.parentElement.classList.contains('term'))
        {
            if(div1.parentElement.classList.contains('term'))
            {
                if(div2.parentElement.children.length == 1 && div2.parentElement.children.length == 1)
                {
                    var a = parseFloat(div1.innerHTML);
                    var b = parseFLoat(div2.innerHTML);
                    div1 = div1.parentElement;
                    div2 = div2.parentElement;
                    if(div1.previousElementSibling && div2.nextElementSibling)
                    {
                        if(div1.previousElementSibling == div2.nextElementSibling && div1.previousElementSibling.classList.contains('operator'))
                        {
                            var op = div1.previousElementSibling;
                            var res = 0;
                            if(op.classList.contains('plus'))
                            {
                                var res =  parseFloat(div1.innerHTML) + parseFloat(div2.innerHTML);
                            }
                            else if(op.classList.contains('minus'))
                            {
                                var res =  parseFloat(div1.innerHTML) - parseFloat(div2.innerHTML);   
                            }
                            else if(op.classList.contains('multiply'))
                            {
                                var res =  parseFloat(div1.innerHTML) * parseFloat(div2.innerHTML);
                            }
                            var reshtml = document.createElement('div');
                            reshtml.classList.add('numb');
                            reshtml.innerHTML = res.toString();
                            div1.replaceWith(reshtml);
                            op.remove();
                            div2.remove();
                            /*if(reshtml.innerHTML.toString()[0] == '-')
                                {
                                    if(reshtml.previousElementSibling && reshtml.previousElementSibling.classList.contains('operator'))
                                    {
                                        reshtml.previousElementSibling.innerHTML = '&minus;'
                                    }
                                    else
                                    {
                                        var neg = document.createElement('div');
                                        neg.classList.add('operator', 'minus');
                                        reshtml.insertAdjacentElement('beforebegin', neg);
                                    }
                                }*/
                        }
                    }
                    else if(div2.previousElementSibling && div1.nextElementSibling)
                    {
                        if(div2.previousElementSibling == div1.nextElementSibling && div2.previousElementSibling.classList.contains('operator'))
                        {
                            var op = div2.previousElementSibling;
                            var res = 0;
                            if(op.classList.contains('plus'))
                            {
                                var res =  parseFloat(div1.innerHTML) + parseFloat(div2.innerHTML);
                            }
                            else if(op.classList.contains('minus'))
                            {
                                var res =  parseFloat(div1.innerHTML) - parseFloat(div2.innerHTML);   
                            }
                            else if(op.classList.contains('multiply'))
                            {
                                var res =  parseFloat(div1.innerHTML) * parseFloat(div2.innerHTML);
                            }
                            var reshtml = document.createElement('div');
                            reshtml.classList.add('numb');
                            reshtml.innerHTML = res.toString();
                            div1.replaceWith(reshtml);
                            op.remove();
                            div2.remove();
                            /*if(reshtml.innerHTML.toString()[0] == '-')
                                {
                                    if(reshtml.previousElementSibling && reshtml.previousElementSibling.classList.contains('operator'))
                                    {
                                        reshtml.previousElementSibling.innerHTML = '&minus;'
                                    }
                                    else
                                    {
                                        var neg = document.createElement('div');
                                        neg.classList.add('operator', 'minus');
                                        reshtml.insertAdjacentElement('beforebegin', neg);
                                    }
                                }*/
                        }
                    }
                }
            }
            else if(div1.classList.contains('numb'))
            {
                if(div2.parentElement.children.length == 1)
                {
                    var a = parseFloat(div1.innerHTML);
                    var b = parseFLoat(div2.innerHTML);
                    div2 = div2.parentElement;
                    if(div1.previousElementSibling && div2.nextElementSibling)
                    {
                        if(div1.previousElementSibling == div2.nextElementSibling && div1.previousElementSibling.classList.contains('operator'))
                        {
                            var op = div1.previousElementSibling;
                            var res = 0;
                            if(op.classList.contains('plus'))
                            {
                                var res =  parseFloat(div1.innerHTML) + parseFloat(div2.innerHTML);
                            }
                            else if(op.classList.contains('minus'))
                            {
                                var res =  parseFloat(div1.innerHTML) - parseFloat(div2.innerHTML);   
                            }
                            else if(op.classList.contains('multiply'))
                            {
                                var res =  parseFloat(div1.innerHTML) * parseFloat(div2.innerHTML);
                            }
                            var reshtml = document.createElement('div');
                            reshtml.classList.add('numb');
                            reshtml.innerHTML = res.toString();
                            div1.replaceWith(reshtml);
                            op.remove();
                            div2.remove();
                            /*if(reshtml.innerHTML.toString()[0] == '-')
                                {
                                    if(reshtml.previousElementSibling && reshtml.previousElementSibling.classList.contains('operator'))
                                    {
                                        reshtml.previousElementSibling.innerHTML = '&minus;'
                                    }
                                    else
                                    {
                                        var neg = document.createElement('div');
                                        neg.classList.add('operator', 'minus');
                                        reshtml.insertAdjacentElement('beforebegin', neg);
                                    }
                                }*/
                        }
                    }
                    else if(div2.previousElementSibling && div1.nextElementSibling)
                    {
                        if(div2.previousElementSibling == div1.nextElementSibling && div2.previousElementSibling.classList.contains('operator'))
                        {
                            var op = div2.previousElementSibling;
                            var res = 0;
                            if(op.classList.contains('plus'))
                            {
                                var res =  parseFloat(div1.innerHTML) + parseFloat(div2.innerHTML);
                            }
                            else if(op.classList.contains('minus'))
                            {
                                var res =  parseFloat(div1.innerHTML) - parseFloat(div2.innerHTML);   
                            }
                            else if(op.classList.contains('multiply'))
                            {
                                var res =  parseFloat(div1.innerHTML) * parseFloat(div2.innerHTML);
                            }
                            var reshtml = document.createElement('div');
                            reshtml.classList.add('numb');
                            reshtml.innerHTML = res.toString();
                            div1.replaceWith(reshtml);
                            op.remove();
                            div2.remove();
                            /*if(reshtml.innerHTML.toString()[0] == '-')
                                {
                                    if(reshtml.previousElementSibling && reshtml.previousElementSibling.classList.contains('operator'))
                                    {
                                        reshtml.previousElementSibling.innerHTML = '&minus;'
                                    }
                                    else
                                    {
                                        var neg = document.createElement('div');
                                        neg.classList.add('operator', 'minus');
                                        reshtml.insertAdjacentElement('beforebegin', neg);
                                    }
                                }*/
                        }
                    }
                }
            }
            /*else if(div2.classList.contains('numb'))
            {
                if(div1.parentElement.children.length == 3)
                {
                    if(div2.previousElementSibling && div1.parentElement.nextElementSibling)
                    {
                        if(div2.previousElementSibling == div1.parentElement.nextElementSibling && div2.previousElementSibling.classList.contains('multiply'))
                        {
                            var op = div2.previousElementSibling;
                            var a = parseFloat(div2.innerHTML);
                            var b = parseFloat(div1.parentElement.children[0]);
                            var c = parseFloat(div1.parentElement.children[2]);
                            var res = 0;
                            if(div1.parentElement.children[1].classList.contains('plus'))
                            {
                                res = a*b + a*c;
                            }
                            else if(div1.parentElement.children[1].classList.contains('minus'))
                            {
                                res = a*b - a*c;
                            }
                            var reshtml = document.createElement('div');
                            reshtml.classList.add('numb');
                            reshtml.innerHTML = res.toString();
                            div2.replaceWith(reshtml);
                            div1.parentElement.remove();
                            op.remove();
                        }
                    }
                    if(div2.nextElementSibling && div1.parentElement.previousElementSibling)
                    {
                        if(div2.nextElementSibling == div1.parentElement.previousElementSibling && div2.nextElementSibling.classList.contains('multiply'))
                        {
                            var op = div2.nextElementSibling;
                            var a = parseFloat(div2.innerHTML);
                            var b = parseFloat(div1.parentElement.children[0]);
                            var c = parseFloat(div1.parentElement.children[2]);
                            var res = 0;
                            if(div1.parentElement.children[1].classList.contains('plus'))
                            {
                                res = a*b + a*c;
                            }
                            else if(div1.parentElement.children[1].classList.contains('minus'))
                            {
                                res = a*b - a*c;
                            }
                            var reshtml = document.createElement('div');
                            reshtml.classList.add('numb');
                            reshtml.innerHTML = res.toString();
                            div2.replaceWith(reshtml);
                            div1.parentElement.remove();
                            op.remove();
                        }
                    }
                }
            }*/
        }
    }
    else if(div1.parentElement == div2.parentElement)
    {
        if(div1.classList.contains('numb'))
        {
            if(div2.classList.contains('numb'))
            {
                if(div1.previousElementSibling != null && div2.nextElementSibling != null && div1.previousElementSibling == div2.nextElementSibling)
                {
                    var op = div1.previousElementSibling;
                    //console.log(div1.nextElementSibling);
                    if(op.classList.contains('operator'))
                    {
                        if(op.classList.contains('plus'))
                        {
                            var res =  parseFloat(div1.innerHTML) + parseFloat(div2.innerHTML);
                        }
                        else if(op.classList.contains('minus'))
                        {
                            var res =  parseFloat(op.previousElementSibling.innerHTML) - parseFloat(op.nextElementSibling.innerHTML);   
                        }
                        else if(op.classList.contains('multiply'))
                        {
                            var res =  parseFloat(div1.innerHTML) * parseFloat(div2.innerHTML);
                        }
                        var reshtml = document.createElement('div');
                        reshtml.classList.add('numb');
                        reshtml.innerHTML = res.toString();
                        //var ap = div2.parentElement;
                        //ap.innerHTML = "";
                        //ap.append(reshtml);
                        
                        div1.replaceWith(reshtml);
                        op.remove();
                        div2.remove();
                        //var cn = reshtml.previousElementSibling;
                        if(reshtml.parentElement.children.length == 1)
                        {
                            var d = document.createElement('div');
                            d.classList.add('numb');
                            d.innerHTML = reshtml.innerHTML;
                            reshtml.parentElement.replaceWith(d);
                            //cn = d.previousElementSibling;
                        }
                        /*if(res < 0)
                        {
                            if(cn && cn.classList.contains('operator'))
                            {
                                cn.previousElementSibling.innerHTML = '&minus;'
                            }
                            else
                            {
                                var neg = document.createElement('div');
                                neg.classList.add('operator', 'minus');
                                neg.innerHTML = '&minus;';
                                d? d.insertAdjacentElement('beforebegin', neg) : reshtml.insertAdjacentElement('beforebegin', neg);
                            }
                        }*/
                    }
                }
                else if(div2.previousElementSibling != null && div1.nextElementSibling != null && div2.previousElementSibling == div1.nextElementSibling)
                {
                    var op = div2.previousElementSibling;
                    //console.log(div1.nextElementSibling);
                    //console.log(op.innerHTML.toString());
                    if(op.classList.contains('operator'))
                    {
                        var res = 0;
                        if(op.classList.contains('plus'))
                        {
                            var res =  parseFloat(div1.innerHTML) + parseFloat(div2.innerHTML);
                        }
                        else if(op.classList.contains('minus'))
                        {
                            var res =  parseFloat(op.previousElementSibling.innerHTML) - parseFloat(op.nextElementSibling.innerHTML);   
                        }
                        else if(op.classList.contains('multiply'))
                        {
                            var res =  parseFloat(div1.innerHTML) * parseFloat(div2.innerHTML);
                        }
                        var reshtml = document.createElement('div');
                        reshtml.classList.add('numb');
                        reshtml.innerHTML = res.toString();
                        div1.replaceWith(reshtml);
                        op.remove();
                        div2.remove();
                        //var cn = reshtml.previousElementSibling;
                        if(reshtml.parentElement.children.length == 1)
                        {
                            var d = document.createElement('div');
                            d.classList.add('numb');
                            d.innerHTML = reshtml.innerHTML;
                            reshtml.parentElement.replaceWith(d);
                            //cn = d.previousElementSibling;
                        }
                        /*if(res < 0)
                        {
                            if(cn && cn.classList.contains('operator'))
                            {
                                cn.previousElementSibling.innerHTML = '&minus;'
                            }
                            else
                            {
                                var neg = document.createElement('div');
                                neg.classList.add('operator', 'minus');
                                neg.innerHTML = '&minus;';
                                d? d.insertAdjacentElement('beforebegin', neg) : reshtml.insertAdjacentElement('beforebegin', neg);
                            }
                        }*/
                    }
                }
            }

        }
        else if(div1.classList.contains('term'))
        {
            if(div2.classList.contains('term'))
            {
                if(div2.children.length == 3 && div1.children.length == 3)
                {
                    if(div2.previousElementSibling && div1.nextElementSibling)
                    {
                        if(div2.previousElementSibling == div1.nextElementSibling && div2.previousElementSibling.classList.contains('multiply'))
                        {
                            if((div2.children[1].classList.contains('plus') || div2.children[1].contains('minus')) && (div1.children[1].classList.contains('plus') || div1.children[1].classList.contains('minus')))
                            {
                                var op = div2.previousElementSibling
                                var a = parseFloat(div2.children[0].innerHTML);
                                var b = parseFloat(div1.children[0].innerHTML);
                                var c = parseFloat(div2.children[2].innerHTML);
                                var d = parseFloat(div1.children[2].innerHTML);
                                if(div2.children[1].classList.contains('minus'))
                                {
                                    c = -parseFloat(div2.children[2].innerHTML);
                                }
                                if(div1.children[1].classList.contains('minus'))
                                {
                                    d = -parseFloat(div1.children[2].innerHTML);
                                }
                                var reshtml = document.createElement('div');
                                reshtml.classList.add('numb');
                                //console.log(a + c, b + d);
                                reshtml.innerHTML = (a*b + a*d + c*b + c*d).toString();
                                div1.replaceWith(reshtml);
                                div2.remove();
                                //console.log(div2.parentElement.previousElementSibling);
                                op.remove();
                                console.log(reshtml.parentElement);
                                if(reshtml.parentElement.children.length == 1)
                                {
                                    var ap = reshtml.parentElement;
                                    ap.replaceWith(reshtml);
                                    //ap.append(reshtml);
                                }
                                /*if(reshtml.innerHTML.toString()[0] == '-')
                                {
                                    if(reshtml.previousElementSibling && reshtml.previousElementSibling.classList.contains('operator'))
                                    {
                                        reshtml.previousElementSibling.innerHTML = '&minus;'
                                    }
                                    else
                                    {
                                        var neg = document.createElement('div');
                                        neg.classList.add('operator', 'minus');
                                        reshtml.insertAdjacentElement('beforebegin', neg);
                                    }
                                }*/
                            }
                        }
                    }
                    else if(div1.previousElementSibling && div2.nextElementSibling)
                    {
                        if(div1.previousElementSibling === div2.nextElementSibling && div1.previousElementSibling.classList.contains('multiply'))
                        {
                            if((div2.children[1].classList.contains('plus') || div2.children[1].classList.contains('minus')) && (div1.children[1].classList.contains('plus') || div1.children[1].classList.contains('minus')))
                            {
                                var op = div1.previousElementSibling;
                                var a = parseFloat(div2.children[0].innerHTML);
                                var b = parseFloat(div1.children[0].innerHTML);
                                var c = parseFloat(div2.children[2].innerHTML);
                                var d = parseFloat(div1.children[2].innerHTML);
                                if(div2.children[1].classList.contains('minus'))
                                {
                                    c = -parseFloat(div2.children[2].innerHTML);
                                }
                                if(div1.children[1].classList.contains('minus'))
                                {
                                    d = -parseFloat(div1.children[2].innerHTML);
                                }
                                var reshtml = document.createElement('div');
                                reshtml.classList.add('numb');
                                //console.log(a + c, b + d);
                                reshtml.innerHTML = (a*b + a*d + c*b + c*d).toString();
                                div1.replaceWith(reshtml);
                                div2.remove();
                                //div1.parentElement.previousElementSibling.remove();
                                op.remove();
                                console.log(reshtml.parentElement);
                                if(reshtml.parentElement.children.length == 1 && !(reshtml.parentElement.classList.contains('stack')))
                                {
                                    var ap = reshtml.parentElement;
                                    ap.replaceWith(reshtml);
                                    //ap.append(reshtml);
                                }
                                /*if(reshtml.innerHTML.toString()[0] == '-')
                                {
                                    if(reshtml.previousElementSibling && reshtml.previousElementSibling.classList.contains('operator'))
                                    {
                                        reshtml.previousElementSibling.innerHTML = '&minus;'
                                    }
                                    else
                                    {
                                        var neg = document.createElement('div');
                                        neg.classList.add('operator', 'minus');
                                        reshtml.insertAdjacentElement('beforebegin', neg);
                                    }
                                }*/
                            }
                        }
                    }
                }
            }
        }
        else if(div2.classList.contains('term'))
        {
            if(div1.classList.contains('term'))
            {
                if(div2.children.length == 3 && div1.children.length == 3)
                {
                    if(div2.previousElementSibling && div1.nextElementSibling)
                    {
                        if(div2.previousElementSibling == div1.nextElementSibling && div2.previousElementSibling.classList.contains('multiply'))
                        {
                            if((div2.children[1].classList.contains('plus') || div2.children[1].contains('minus')) && (div1.children[1].classList.contains('plus') || div1.children[1].contains('minus')))
                            {
                                var op = div2.previousElementSibling
                                var a = parseFloat(div2.children[0].innerHTML);
                                var b = parseFloat(div1.children[0].innerHTML);
                                var c = parseFloat(div2.children[2].innerHTML);
                                var d = parseFloat(div1.children[2].innerHTML);
                                if(div2.children[1].classList.contains('minus'))
                                {
                                    c = -parseFloat(div2.children[2].innerHTML);
                                }
                                if(div1.children[1].classList.contains('minus'))
                                {
                                    d = -parseFloat(div1.children[2].innerHTML);
                                }
                                var reshtml = document.createElement('div');
                                reshtml.classList.add('numb');
                                //console.log(a + c, b + d);
                                reshtml.innerHTML = (a*b + a*d + c*b + c*d).toString();
                                div1.replaceWith(reshtml);
                                div2.remove();
                                //console.log(div2.parentElement.previousElementSibling);
                                op.remove();
                                console.log(reshtml.parentElement);
                                if(reshtml.parentElement.children.length == 1)
                                {
                                    var ap = reshtml.parentElement;
                                    ap.replaceWith(reshtml);
                                    //ap.append(reshtml);
                                }
                                /*if(reshtml.innerHTML.toString()[0] == '-')
                                {
                                    if(reshtml.previousElementSibling && reshtml.previousElementSibling.classList.contains('operator'))
                                    {
                                        reshtml.previousElementSibling.innerHTML = '&minus;'
                                    }
                                    else
                                    {
                                        var neg = document.createElement('div');
                                        neg.classList.add('operator', 'minus');
                                        reshtml.insertAdjacentElement('beforebegin', neg);
                                    }
                                }*/
                            }
                        }
                    }
                    else if(div1.previousElementSibling && div2.nextElementSibling)
                    {
                        if(div1.previousElementSibling === div2.nextElementSibling && div1.previousElementSibling.classList.contains('multiply'))
                        {
                            if((div2.children[1].classList.contains('plus') || div2.children[1].contains('minus')) && (div1.children[1].classList.contains('plus') || div1.children[1].contains('minus')))
                            {
                                var op = div1.previousElementSibling;
                                var a = parseFloat(div2.children[0].innerHTML);
                                var b = parseFloat(div1.children[0].innerHTML);
                                var c = parseFloat(div2.children[2].innerHTML);
                                var d = parseFloat(div1.children[2].innerHTML);
                                if(div2.children[1].classList.contains('minus'))
                                {
                                    c = -parseFloat(div2.children[2].innerHTML);
                                }
                                if(div1.children[1].classList.contains('minus'))
                                {
                                    d = -parseFloat(div1.children[2].innerHTML);
                                }
                                var reshtml = document.createElement('div');
                                reshtml.classList.add('numb');
                                //console.log(a + c, b + d);
                                reshtml.innerHTML = (a*b + a*d + c*b + c*d).toString();
                                div1.replaceWith(reshtml);
                                div2.remove();
                                //div1.parentElement.previousElementSibling.remove();
                                op.remove();
                                if(reshtml.parentElement.children.length == 1)
                                {
                                    console.log(reshtml.parentElement);
                                    var ap = reshtml.parentElement;
                                    ap.replaceWith(reshtml);
                                    //ap.append(reshtml);
                                }
                                /*if(reshtml.innerHTML.toString()[0] == '-')
                                {
                                    if(reshtml.previousElementSibling && reshtml.previousElementSibling.classList.contains('operator'))
                                    {
                                        reshtml.previousElementSibling.innerHTML = '&minus;'
                                    }
                                    else
                                    {
                                        var neg = document.createElement('div');
                                        neg.classList.add('operator', 'minus');
                                        reshtml.insertAdjacentElement('beforebegin', neg);
                                    }
                                }*/
                            }
                        }
                    }
                }
            }
        }
    }
    else if(div1.parentElement.parentElement === div2.parentElement.parentElement)
    {
        if(div1.parentElement.parentElement.classList.contains('fraction'))
        {
            var sm = 1;
            var gt = 1;
            if(parseFloat(div1.innerHTML) >= parseFloat(div2.innerHTML))
            {
                sm = parseFloat(div2.innerHTML);
                gt = parseFloat(div1.innerHTML);
            }
            else
            {
                sm = parseFloat(div1.innerHTML);
                gt = parseFloat(div2.innerHTML);
            }
            for(var i = sm; i <= gt; i++)
            {
                if(gt%sm == 0)
                {
                    div2.innerHTML = (parseFloat(div2.innerHTML)/i).toString();
                    div1.innerHTML = (parseFloat(div1.innerHTML)/i).toString();
                    if(div1.innerHTML == '1')
                    {
                        if(div1.parentElement.classList.contains('den'))
                        {
                            var numb = document.createElement('div');
                            numb.classList.add('numb');
                            numb.innerHTML = div2.innerHTML;
                            div1.parentElement.parentElement.replaceWith(numb);
                        }
                    }
                    else
                    {
                        if(div2.parentElement.classList.contains('den'))
                        {
                            var numb = document.createElement('div');
                            numb.classList.add('numb');
                            numb.innerHTML = div1.innerHTML;
                            div2.parentElement.parentElement.replaceWith(numb);
                        }
                    }
                    break;
                }
            }
        }
    }
}