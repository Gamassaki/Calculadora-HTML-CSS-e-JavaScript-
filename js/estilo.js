function calcular( tipo, valor){
    if(tipo == 'valor'){
        document.getElementById('cal').value += valor;
    }
    else if(tipo == 'acao'){
        if(valor == 'AC'){
            document.getElementById('cal').value = '';
            document.getElementById('resultado').value = '';
        }
        else if(valor == 'Del'){
            var comprimento = document.getElementById('cal').value.length;
            var novo = document.getElementById('cal').value.slice(0,(comprimento-1));
            document.getElementById('cal').value = novo;
        }
        else if(valor == '='){
            try{
                var resultadofinal = eval(document.getElementById('cal').value);
                document.getElementById('resultado').value = resultadofinal;
            }
            catch{
                document.getElementById('resultado').value = 'Erro do Sistema';
            }
        }
        else{
            document.getElementById('cal').value += valor;
        }
    }
}