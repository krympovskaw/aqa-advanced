const { defineConfig, devices } = require('@playwright/test');
const fs = require('fs');
const path = require('path');


try {
  const envPath = path.resolve(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf-8');
    envConfig.split('\n').forEach(line => {
      const trimmedLine = line.trim();
      if (trimmedLine && !trimmedLine.startsWith('#')) {
        const [key, ...valueParts] = trimmedLine.split('=');
        const value = valueParts.join('=').trim();
        if (key && value) {
          process.env[key.trim()] = value;
        }
      }
    });
  }
} catch (e) {
  console.log('Файл .env не найден или не может быть прочитан, используются дефолтные значения');
}

module.exports = defineConfig({
  testDir: './homework',
  fullyParallel: true,
  reporter: 'html',
  
  use: {
   
    baseURL: process.env.BASE_URL || 'https://qauto.forstudy.space',
    
    
    httpCredentials: {
      username: process.env.HTTP_USER || 'guest',
      password: process.env.HTTP_PASS || 'welcome2qauto',
    },
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
