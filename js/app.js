const btnClean=document.getElementById('btnClean');
const btnConvert=document.getElementById('btnConvert');
let valueUser=document.getElementById('valorEmReal');
let messageField=document.getElementById('aviso');
let options=document.getElementsByName('moedaEstrangeira');

//valores em 07/08/2022
let dolar=5.17;
let euro=5.26;
let libra=6.23;
let bitcoin=120.364;

let valorEmReal;
let moedaEstrangeira='';
let moedaConvertida;

btnConvert.addEventListener('click', ()=>{
	valorEmReal=parseFloat(valueUser.value);

	for(let i=0; i<options.length; i++){
		if(options[i].checked){
			moedaEstrangeira=options[i].value;
		}
	}
	
	switch(moedaEstrangeira){
		case 'dolar':
		moedaConvertida= valorEmReal / dolar;
		message(moedaConvertida.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
		break;
		case 'euro':
		moedaConvertida= valorEmReal / euro;
		message(moedaConvertida.toLocaleString('de-DE', { style: 'currency', currency: 'USD' }));
		break;
		case 'libra':
		moedaConvertida= valorEmReal / libra;
		message(moedaConvertida.toLocaleString('de-DE', { style: 'currency', currency: 'USD' }));
		break;
		case 'bitcoin':
		moedaConvertida= valorEmReal / bitcoin;
		message(parseFloat(moedaConvertida).toFixed(5));
		break;
		default:
		messageField.textContent='Selecione uma moeda';
	}
	isNaN(moedaConvertida) ? moedaConvertida=0 : '';
})

btnClean.addEventListener('click', ()=>{
	valueUser.focus();
	valueUser.value='';
	options[0].checked=false;
	options[1].checked=false;
	options[2].checked=false;
	options[3].checked=false;
})

function message(moedaConvertida){
	isNaN(valorEmReal) : valorEmReal=0 : '';
	messageField.textContent='O valor ' + valorEmReal + ' em ' + moedaEstrangeira + ' é ' + moedaConvertida;
}

function blockBtn(){
	if(valueUser.value == 0 || valueUser.value == '' | valueUser.value == null){
		btnConvert.setAttribute('disabled', 'disabled');
		btnConvert.style.background='grey';
		btnConvert.style.cursor='not-allowed';
	}
}

function activateBtn(){
	if(valueUser.value > 0){
		btnConvert.removeAttribute('disabled');
		btnConvert.style.background='black';
		btnConvert.style.cursor='pointer';
	}
}