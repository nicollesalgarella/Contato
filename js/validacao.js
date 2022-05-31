function ValidarFormunlario(){

    let erro = "";

    if (document.getElementById("Nome").value.trim() == ""){
        erro=" *O campo nome é obrigatório*\n";
    }

    if (document.getElementById("Telefone").value.trim() == ""){
        erro +=" *O campo telefone é obrigatório*\n";
    }

    if (document.getElementById("Email").value.trim() == ""){
        erro +=" *O campo email é obrigatório*\n";
    }
    
    else{
        if(validateEmail(document.getElementById("Email").value)==false)
        {
            erro += " *O e-mail digitado é inválido*.\n"
        }
    }


    if (document.getElementById("Cpf").value.trim() == ""){
        erro +=" *O campo CPF é obrigatório*\n";
    }

    else{
        if(ValidarCpf(document.getElementById("Cpf").value)==false)
        {
            erro += " *O CPF digitado é inválido*.\n"
        }
    }

    if(erro !=""){
        alert("ATENÇÃO!\n\n" + erro);
        return false
    }

    else {
        document.getElementById("frmContato").submit();
    }

}

function ValidarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
        
}

function ValidarCpf(cpf) {
    if((cpf = cpf.replace(/[^\d]/g,"")).length != 11)
      return false
    if (cpf == "00000000000")
      return false;
    var r;
    var s = 0;
    for (i=1; i<=9; i++)
      s = s + parseInt(cpf[i-1]) * (11 - i);
    r = (s * 10) % 11;
    if ((r == 10) || (r == 11))
      r = 0;
    if (r != parseInt(cpf[9]))
      return false;
    s = 0;
    for (i = 1; i <= 10; i++)
      s = s + parseInt(cpf[i-1]) * (12 - i);
    r = (s * 10) % 11;
    if ((r == 10) || (r == 11))
      r = 0;
    if (r != parseInt(cpf[10]))
      return false;
    return true;
}