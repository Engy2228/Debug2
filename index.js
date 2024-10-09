
const temperatureInCelsius = prompt('Введите температуру в градусах Цельсия');

if (Number(temperatureInCelsius) === 0) {
   alert('0 градусов по Цельсию - это температура замерзания воды')
   console.log(Number(temperatureInCelsius), typeof temperatureInCelsius)

} else if (Number(temperatureInCelsius) > 0) {
   alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');

   console.log(Number(temperatureInCelsius), typeof temperatureInCelsius)

} 

const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32 
console.log(temperatureInFahrenheit)

alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`)


