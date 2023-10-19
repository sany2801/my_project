import TelegramBot from 'node-telegram-bot-api';

// Создайте экземпляр бота, используя ваш токен
const bot = new TelegramBot('YOUR_BOT_TOKEN', { polling: true });

// Обработчик команды /getchatid
bot.onText(/\/getchatid/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `Ваш USER_CHAT_ID: ${chatId}`);
});

// Запуск бота
bot.on('polling_error', (error) => {
    console.log(error);
});

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Привет! Я бот. Для получения вашего USER_CHAT_ID используйте команду /getchatid.');
});
