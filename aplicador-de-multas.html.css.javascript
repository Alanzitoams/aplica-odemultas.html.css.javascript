<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detran</title>
    <style>
        body {
            background-color: rgb(152, 235, 159);
        }
        
    </style>
</head>
<body>
   <center><img src="guarda.png"  alt="imagem do guardinha">
    <h1>Sistemas para aplicação de multas</h1>
    Digite a velocidade do veiculo : <input type="number" name="txtvel" id="txtvel"> km/h
    <input type="button" value="Verificar"onclick="calcular()"></center> 
    <div id = "res">
        
    </div>
    <script>
        function calcular(){
            var txtv = window.document.querySelector('input#txtvel')
            var res = window.document.querySelector('div#res')
            var vel = Number(txtv.value)
            res.innerHTML = `<center><p>Sua velocidade atual e de <strong>${vel} km/h </strong></p></center>`
            if(vel > 60){
                res.innerHTML += `<center><p>Voçe ultrapassou o limite de velocidade desta via e será <strong>MULTADO!</strong></p></center>`
            }else{
                res.innerHTML += `<center><p>Velocidade abaixo da permitida...<strong>DIRIJA SEMPRE COM CINTO DE SEGURANÇA!</strong></p></center>`
            }
            res.innerHTML += `<center><p><strong>BOA VIAGEM...</strong></p></center>`
        }
    </script>
</body>
</html>
