import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Папка, где Playwright будет искать ваши файлы с тестами
  testDir: './tests',
  
  // Максимальное время выполнения одного теста (30 секунд)
  timeout: 30000,

  // Настройки перезапусков для упавших тестов (0 — не перезапускать)
  retries: 0,

  // Репортер для вывода результатов в консоль и генерации HTML-отчета
  reporter: 'html',

  // Общие настройки для всех тестов
  use: {
    // Включаем видимый режим (браузер БУДЕТ открываться на экране)
    headless: false,

    // Сбор логов (trace) при первом падении теста для удобного дебага
    trace: 'on-first-retry',
    
    // Если у вас есть конкретный сайт для тестов, раскомментируйте строку ниже и укажите его URL
    // baseURL: 'https://example.com',
  },

  // Настройка браузеров. Оставляем только Chromium (Chrome), чтобы тесты шли быстрее
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
