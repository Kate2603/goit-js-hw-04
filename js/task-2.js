function calcAverageCalories(days) {
  if (days.length === 0) {
    return 0;
  }

  let totalCalories = 0;

  for (let i = 0; i < days.length; i++) {
    totalCalories += days[i].calories;
  }

  return totalCalories / days.length;
}

console.log(
  calcAverageCalories([
    { day: 'monday', calories: 3010 },
    { day: 'tuesday', calories: 3200 },
    { day: 'wednesday', calories: 3120 },
    { day: 'thursday', calories: 2900 },
    { day: 'friday', calories: 3450 },
    { day: 'saturday', calories: 3280 },
    { day: 'sunday', calories: 3300 },
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: 'monday', calories: 2040 },
    { day: 'tuesday', calories: 2270 },
    { day: 'wednesday', calories: 2420 },
    { day: 'thursday', calories: 1900 },
    { day: 'friday', calories: 2370 },
    { day: 'saturday', calories: 2280 },
    { day: 'sunday', calories: 2610 },
  ])
); // 2270

console.log(calcAverageCalories([])); // 0

document.getElementById('calculate-btn').addEventListener('click', function () {
  const input = document.getElementById('inputData').value;

  try {
    const days = JSON.parse(input);

    if (
      !Array.isArray(days) ||
      !days.every(day => day.day && typeof day.calories === 'number')
    ) {
      throw new Error('Некоректний формат даних');
    }

    const averageCalories = calcAverageCalories(days);

    document.getElementById(
      'result2'
    ).innerText = `Середня калорійність: ${averageCalories.toFixed(2)}`;
  } catch (error) {
    document.getElementById('result2').innerText = 'Помилка: ' + error.message;
  }
});
