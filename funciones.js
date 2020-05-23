function fun1 (x)
{
    var res;
    res=3*(Math.pow(x,2))-6;
    return res;
}

function fun2(x,y)
{
    var res2;
    res2= Math.pow(x,2)*y+3*x*y-Math.pow(y,2);
    return res2;
}

function fun3(x)
{
    if (x<0)
    {
        var res3;
        res3= Math.pow(x,2)-6;
        return res3;
    }
    else{
        var res4;
        res4= Math.pow(x,3)+3;
        return res4;
    }
}