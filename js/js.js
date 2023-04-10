function validarForm(){
    let campos_form = [0,1,2,3,4];

    campos_form[0] = document.getElementById('card_name_txt').value;
    let name_card = document.getElementById('name');
    if(campos_form[0] === ""){
        alert('Digite seu nome por favor')
        return false;
    }else{
        name_card.innerHTML = ""+campos_form[0]+""
        console.log("Nome: "+ campos_form[0]);
    }
    campos_form[1] = document.getElementById('card_number_txt').value;
    let num_card = document.getElementById('number_card');
    if(campos_form[1] === "" || isNaN(campos_form[1])){
        alert('Digite o número do cartão por favor');
        return false;
    }else{
        num_card.innerHTML = ""+campos_form[1]+""
        num_card.style =" letter-spacing: 0.2em"
        console.log("Numero: "+ campos_form[1])
    }
    campos_form[2] = document.getElementById('data_txt').value;
    if(campos_form[2] === "" || isNaN(campos_form[2])){
        alert('Digite o mês por favor');
        return false;
    }else{
        console.log("MM: "+ campos_form[2])
    }
    campos_form[3] = document.getElementById('data_txt_2').value;
    let dat_card = document.getElementById('date_valid')
    if(campos_form[3] === "" || isNaN(campos_form[3])){
        alert('Digite o ano por favor');
        return false;
    }else{
        dat_card.innerHTML=""+campos_form[2]+"/"+campos_form[3]+""
        console.log("YY: "+ campos_form[3])
    }
    campos_form[4] = document.getElementById('cvv_txt').value;
    let cvv_card = document.getElementById('cvv')
    if(campos_form[4] === ""|| isNaN(campos_form[4])){
        alert('Digite seu cvv por favor');
        return false;
    }else{
        cvv_card.innerHTML=""+campos_form[4]+""
        console.log("CVV: "+ campos_form[4])
    }

    $("#form").load("thank.html");
}