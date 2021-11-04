function work(x)
{
    var art_id = ['objetivo', 'material', 'resultado', 'referencia', 'gas']
    var obj_id = ['fir','sec','thi','fou','fiv']
    var c_color = 'rgba(255, 255, 255, 0)'

    function test(x)
    {
        for (var num = 0; num != 6; num++)
        {
            if (num == x)
            {
                document.getElementById(obj_id[num]).style.backgroundColor = 'black'
        
            }
            else
            {
                document.getElementById(obj_id[num]).style.backgroundColor = c_color
            }
            break
        }
        
        for (var nem = 0; nem != 6; nem++)
        {
            if (nem == x)
            {
                document.getElementById(art_id[nem]).style.display = 'block'
            }
            else
            {
                document.getElementById(art_id[nem]).style.display = 'none'
            }
            
        }
    }
    
    if (x == 0)
    {
        test(x)
    }
    else if (x == 1)
    {
        test(x)
    }
    else if (x == 2)
    {
        test(x)
    }
    else if (x == 3)
    {
        test(x)
    }
    else if (x == 4)
    {
        test(x)
    }
    
} 