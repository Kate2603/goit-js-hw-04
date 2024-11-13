const profile = {
  username: 'Jacob',
  playTime: 300,

  changeUsername(newName) {
    this.username = newName;
  },

  updatePlayTime(hours) {
    this.playTime += hours;
  },

  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

// Отримуємо елементи для виводу результатів
const outputDiv = document.getElementById('output');
const executeBtn = document.getElementById('executeBtn');
const commandInput = document.getElementById('command');

// Функція для виконання команди
function executeCommand() {
  const command = commandInput.value;

  try {
    // Виконуємо команду
    if (command.startsWith('changeUsername(')) {
      const newName = command.slice(15, -1);
      profile.changeUsername(newName);
    } else if (command.startsWith('updatePlayTime(')) {
      const hours = parseInt(command.slice(16, -1));
      if (!isNaN(hours)) {
        profile.updatePlayTime(hours);
      } else {
        throw new Error('Invalid hours');
      }
    } else if (command === 'getInfo()') {
      const info = profile.getInfo();
      outputDiv.innerHTML = `<p>${info}</p>`;
      console.log(info);
      return; // Виходимо, щоб не повторювати вивід
    } else {
      throw new Error('Unknown command');
    }

    // Виводимо оновлену інформацію
    const info = profile.getInfo();
    outputDiv.innerHTML = `<p>${info}</p>`; // Виводимо на сторінку
  } catch (error) {
    console.error(error.message);
    outputDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }

  commandInput.value = ''; // Очищуємо поле вводу
}

// Додаємо обробник подій для кнопки виконання
executeBtn.addEventListener('click', executeCommand);

// Виводимо початкову інформацію
outputDiv.innerHTML = `<p>${profile.getInfo()}</p>`;

// Виводимо початкову інформацію
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
