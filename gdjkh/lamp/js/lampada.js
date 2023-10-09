const turnOnOff = document.getElementById('turnOnOff');

const lamp = document.getElementById('lamp');

function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1
    console.log('turnOnOff');
}

function lampOn(){
    if(!isLampBroken()){
        lamp.src = 'img/lampadaligada.png'
        console.log('turnOnOff');
    }
}

function lampOff(){
    if(!isLampBroken()){
        lamp.src='img/lampadadesligada.png'
        turnOnOff.textContent = 'Ligar';
        console.log('turnOnOff');
    }
}

function lampBroken(){
    lamp.src='img/lampadaquebrada.png'
}

function lampOnOff(){
    if(turnOnOff.textContent == 'Ligar'){
        lampOn();
        turnOnOff.textContent = 'Desligar';
        console.log('turnOnOff');
    }else{
        lampOff();
        turnOnOff.textContent = 'Ligar';
        console.log('turnOnOff');
    }
}

turnOnOff.addEventListener('click',lampOnOff);

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick',lampBroken);