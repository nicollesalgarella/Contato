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
    if(ValidarEmail(document.getElementById("Email").value)== false)
    {
      erro += " *O e-mail digitado é inválido*.\n"
    }
}


if (document.getElementById("Cpf").value.trim() == ""){
    erro +=" *O campo CPF é obrigatório*\n";
}


else{
  if(ValidarCpf(document.getElementById("Cpf").value)==false)
        erro += " *O CPF digitado é inválido*.\n"
}

if (document.getElementsByName("Bairro").selectedIndex == 0){

  erro += "- O campo bairro é obrigatório\n";
}


let opcoes = document.getElementsByName("FormaContato");

let selecionados = 0;

for (let i=0; i<opcoes.length; i++){

  if (opcoes[i].checked){

    selecionados += 1;

    break;
  }
}

if (selecionados == 0){
  erro += "* O campo forma de contato é obrigatório*\n";
}

let opc = document.getElementsByName("Servico");
let select = 0;

for (let i=0; i<opc.length; i++){
  if (opc[i].checked){
    select += 2;
  }
}

if (select <= 2){
  erro += "* O campo serviço é obrigatório, selecione 2*\n";
}

  if (erro != "") {
  $('#erro').html("ATENÇÃO!<br><br>" + erro);

  $('#erro').modal({
    fadeDuration:100
  })
  return false;
  }

  else{
  document.getElementById('frmContato').submit();
  }
 
  function ValidarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
        
  }    


  function ValidarCpf(cpf){
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
  }}

  $(document).ready(function(){
    $('.date').mask('00/00/0000');

    $('.time').mask('00:00:00');
    $('.date_time').mask('00/00/0000 00:00:00');
    $('.cep').mask('00000-000');
    $('.phone').mask('0000-0000');
    $('.phone_with_ddd').mask('(00) 0000-0000');
    $('.phone_mobile_with_ddd').mask('(00) 00000-0000');
    $('.license_plate').mask('SSS-0A00'); 
    $('.phone_us').mask('(000) 000-0000');
    $('.mixed').mask('AAA 000-S0S');
    $('.cpf').mask('000.000.000-00', {reverse: true});
    $('.cnpj').mask('00.000.000/0000-00', {reverse: true});
    $('.money').mask('000.000.000.000.000,00', {reverse: true});
    $('.money2').mask("#.##0,00", {reverse: true});
    $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
      translation: {
        'Z': {
          pattern: /[0-9]/, optional: true
        }
      }
    });
    $('.ip_address').mask('099.099.099.099');
    $('.percent').mask('##0,00%', {reverse: true});
    $('.clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});
    $('.placeholder').mask("00/00/0000", {placeholder: "__/__/____"});
    $('.fallback').mask("00r00r0000", {
        translation: {
          'r': {
            pattern: /[\/]/,
            fallback: '/'
          },
          placeholder: "__/__/____"
        }
      });
    $('.selectonfocus').mask("00/00/0000", {selectOnFocus: true});
  });
  $('.datepicker').pickadate()
  