function work(x)
    {
        if (x == 1)
        {
            document.getElementById('objetivo').style.display = 'block'
            document.getElementById('material').style.display = 'none'
            document.getElementById('resultado').style.display = 'none'
            document.getElementById('referencia').style.display = 'none'
            document.getElementById('gas').style.display = 'none'
            
            document.getElementById('selected').style.backgroundColor = 'black'
            document.getElementById('2').style.backgroundColor = 'rgba(255, 255, 255, 0)'
            document.getElementById('3').style.backgroundColor = 'rgba(255, 255, 255, 0)'
            document.getElementById('4').style.backgroundColor = 'rgba(255, 255, 255, 0)'
            document.getElementById('5').style.backgroundColor = 'rgba(255, 255, 255, 0)'

        }
        else if (x == 2)
        {
            document.getElementById('objetivo').style.display = 'none'
            document.getElementById('material').style.display = 'block'
            document.getElementById('resultado').style.display = 'none'
            document.getElementById('referencia').style.display = 'none'
            document.getElementById('gas').style.display = 'none'

            document.getElementById('selected').style.backgroundColor = 'rgba(255, 255, 255, 0)'
            document.getElementById('2').style.backgroundColor = 'black'
            document.getElementById('3').style.backgroundColor = 'rgba(255, 255, 255, 0)'
            document.getElementById('4').style.backgroundColor = 'rgba(255, 255, 255, 0)'
            document.getElementById('5').style.backgroundColor = 'rgba(255, 255, 255, 0)'
        }
        else if (x == 3)
        {
            document.getElementById('objetivo').style.display = 'none'
            document.getElementById('material').style.display = 'none'
            document.getElementById('resultado').style.display = 'block'
            document.getElementById('referencia').style.display = 'none'
            document.getElementById('gas').style.display = 'none'

            document.getElementById('selected').style.backgroundColor = 'rgba(255, 255, 255, 0)'
            document.getElementById('2').style.backgroundColor = 'rgba(255, 255, 255, 0)'
            document.getElementById('3').style.backgroundColor = 'black'
            document.getElementById('4').style.backgroundColor = 'rgba(255, 255, 255, 0)'
            document.getElementById('5').style.backgroundColor = 'rgba(255, 255, 255, 0)'
        }
        else if (x == 4)
        {
            document.getElementById('objetivo').style.display = 'none'
            document.getElementById('material').style.display = 'none'
            document.getElementById('resultado').style.display = 'none'
            document.getElementById('referencia').style.display = 'block'
            document.getElementById('gas').style.display = 'none'

            document.getElementById('selected').style.backgroundColor = 'rgba(255, 255, 255, 0)'
            document.getElementById('2').style.backgroundColor = 'rgba(255, 255, 255, 0)'
            document.getElementById('3').style.backgroundColor = 'rgba(255, 255, 255, 0)'
            document.getElementById('4').style.backgroundColor = 'black'
            document.getElementById('5').style.backgroundColor = 'rgba(255, 255, 255, 0)'
        }
        else if (x == 5)
        {
            document.getElementById('objetivo').style.display = 'none'
            document.getElementById('material').style.display = 'none'
            document.getElementById('resultado').style.display = 'none'
            document.getElementById('referencia').style.display = 'none'
            document.getElementById('gas').style.display = 'block'

            document.getElementById('selected').style.backgroundColor = 'rgba(255, 255, 255, 0)'
            document.getElementById('2').style.backgroundColor = 'rgba(255, 255, 255, 0)'
            document.getElementById('3').style.backgroundColor = 'rgba(255, 255, 255, 0)'
            document.getElementById('4').style.backgroundColor = 'rgba(255, 255, 255, 0)'
            document.getElementById('5').style.backgroundColor = 'black'
        }
    }
    function fix()
    {
        document.getElementById('selected').style.display = 'block'
    }