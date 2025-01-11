var age = +prompt('Введите свой возраст')
    if(age >= 0 && age <= 18){
        console.log('Вы еще молоды,Вам нужно учиться');
        alert ('Вы еще молоды,Вам нужно учиться')
    }else if(age >= 18 && age <= 50){
        console.log('Вам нужно работать');
        alert('Вам нужно работать')
    }else if(age >= 50 && age <= 59 ){
        console.log('Вам скоро на пенсию');
        alert('Вам скоро на пенсию')
    }else if(age >= 59 && age <= 100 ){
        console.log('Вы пенсионер');
        alert('Вы пенсионер')
    }else{
        alert('Что-то пошло не так')
    }


    var time = +prompt('Введите время')

    switch(time){
        case 1:
        alert(' час ночи')
        break
        case 2:
        alert(' два часа ночи')
        break
        case 3:
        alert(' три часа ночи')
        break
        case 4:
        alert(' четыре часа ночи')
        break
        case 5:
        alert(' пять часов ночи')
        break
        case 6:
        alert(' шесть часов ночи')
        break
        case 7:
        alert(' семь часов утра')
        break
        case 8:
        alert(' восемь часов утра')
        break
        case 9:
        alert(' девять часов утра')
        break
        case 10:
        alert(' десять часов утра')
        break
        case 11:
        alert(' одиннадцать часов дня')
        break
        case 12:
        alert(' двенадцать часов дня')
        break
        case 13:
        alert(' тринадцать часов дня')
        break
        case 14:
        alert(' четырнадцать часов дня')
        break
        case 15:
        alert(' пятнадцать часов дня')
        break
        case 16:
        alert(' шестнадцать часов дня')
        break
        case 17:
        alert(' семнадцать часов дня')
        break
        case 18:
        alert(' восемнадцать часов вечера')
        break
        case 19:
        alert(' девятьнадцать часов вечера')
        break
        case 20:
        alert(' двадцать часов вечера')
        break
        case 21:
        alert(' двадцать первый час вечера')
        break
        case 22:
        alert(' двадцать второй час вечера')
        break
        case 23:
        alert(' двадцать третий час вечера')
        break
        default:
        alert('Ошибка')
        break
    }


    var number1 = +prompt('Введите первое число')
    var number2 = +prompt('Введите второе число')
    var number3 = +prompt('Введите третье число')
    var average;
    if((number1 > number2 && number2 < number3) || (number2 < number1 && number2 > number3)){
        average = number2
    }else{
        average = number3
    }

    alert('Среднее число: ' + average)