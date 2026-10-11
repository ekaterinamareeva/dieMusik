const change=document.getElementById('change')
change.addEventListener('click',my_fun)

function my_fun(){
    console.log('мой скрипт запущен')
    if (document.getElementsByTagName('div')[3].innerHTML==='Мареева'){

        document.getElementsByTagName('div')[3].innerHTML='Mareeva'
        document.getElementsByTagName('div')[4].innerHTML='Ekaterina'
        document.getElementsByTagName('div')[5].innerHTML='Alexandrovna'
        document.getElementsByTagName('div')[6].innerHTML='female &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 14/05/2007'
        document.getElementsByTagName('div')[1].innerHTML='Issued by Moscow MVD'
        document.getElementsByTagName('div')[7].innerHTML='Moscow'

    }
    else {
        if (document.getElementsByTagName('div')[3].innerHTML === 'Mareeva') {

            document.getElementsByTagName('div')[3].innerHTML = 'Мареева'
            document.getElementsByTagName('div')[4].innerHTML = 'Екатерина'
            document.getElementsByTagName('div')[5].innerHTML = 'Александровна'
            document.getElementsByTagName('div')[6].innerHTML = 'жен &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 14/05/2007'
            document.getElementsByTagName('div')[1].innerHTML = 'Выдан МВД Росии по г. Москве'
            document.getElementsByTagName('div')[7].innerHTML='Город Москва'

        }
    }
}
