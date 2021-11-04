function work(x)
    {
        var art_id = ['objetivo', 'material', 'resultado', 'referencia', 'gas']
        var obj_id = ['fir','sec','thi','fou','fiv']
        var c_color = 'rgba(255, 255, 255, 0)'
        
        if (x == 0)
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
            }
            
            for (var num = 0; num != 6; num++)
            {
                if (num == x)
                {
                    document.getElementById(art_id[num]).style.display = 'block'
                }
                else
                {
                    document.getElementById(art_id[num]).style.display = 'none'
                }
            }
        }
        else if (x == 1)
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
            }
            
            for (var num = 0; num != 6; num++)
            {
                if (num == x)
                {
                    document.getElementById(art_id[num]).style.display = 'block'
                }
                else
                {
                    document.getElementById(art_id[num]).style.display = 'none'
                }
            }

        }
        else if (x == 2)
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
            }
            
            for (var num = 0; num != 6; num++)
            {
                if (num == x)
                {
                    document.getElementById(art_id[num]).style.display = 'block'
                }
                else
                {
                    document.getElementById(art_id[num]).style.display = 'none'
                }
            }
        }
        else if (x == 3)
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
            }
            
            for (var num = 0; num != 6; num++)
            {
                if (num == x)
                {
                    document.getElementById(art_id[num]).style.display = 'block'
                }
                else
                {
                    document.getElementById(art_id[num]).style.display = 'none'
                }
            }

        }
        else if (x == 4)
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
            }
            for (var num = 0; num != 6; num++)
            {
                if (num == x)
                {
                    document.getElementById(art_id[num]).style.display = 'block'
                }
                else
                {
                    document.getElementById(art_id[num]).style.display = 'none'
                }
            }
        }
    }