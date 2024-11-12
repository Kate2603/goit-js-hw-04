function isEnoughCapacity(products, containerSize) {
  let total = 0;

  for (let key in products) {
    total += products[key];
  }

  return total <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

function isEnoughCapacity(products, containerSize) {
  let total = 0;

  // Обчислюємо загальну кількість товарів
  for (let key in products) {
    total += products[key];
  }

  // Повертаємо true, якщо загальна кількість товарів менша або дорівнює containerSize, і false в іншому випадку

  return total <= containerSize;
}

// Обробка події відправки форми
document
  .getElementById('capacityForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Запобігаємо перезавантаженню сторінки

    const input = document.getElementById('input').value;

    // Використовуємо регулярний вираз для вилучення об'єкта та контейнера
    const regex = /isEnoughCapacity\(\s*\{([^}]+)\}\s*,\s*(\d+)\s*\)/;
    const match = input.match(regex);

    if (match) {
      const productsString = match[1];
      const containerSize = parseInt(match[2], 10);

      // Перетворюємо рядок продуктів в об'єкт
      const products = {};
      productsString.split(',').forEach(item => {
        const [key, value] = item.split(':').map(str => str.trim());
        products[key] = parseInt(value, 10);
      });

      // Викликаємо функцію та виводимо результат
      const result = isEnoughCapacity(products, containerSize);
      document.getElementById('result').textContent = result
        ? 'Товари помістяться в контейнер.'
        : 'Товари не помістяться в контейнер.';
    } else {
      document.getElementById('result').textContent =
        'Помилка: введіть правильний формат.';
    }
  });
