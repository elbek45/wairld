# Wairld - Deployment Instructions

Этот документ содержит инструкции по деплою приложения Wairld в Firebase и загрузке кода на GitHub.

## ✅ Выполненные шаги

1. ✅ Firebase CLI установлен локально в проект
2. ✅ Создан файл конфигурации `.firebaserc` с проектом `wairld`
3. ✅ Создан файл конфигурации `firebase.json` для hosting
4. ✅ Production build успешно создан в папке `dist/`
5. ✅ `.gitignore` обновлен для Firebase и Git
6. ✅ Создан плагин Firebase с конфигурацией

## Firebase Configuration

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyCOCa6lCESVy-Oq3wxcqkWIy4hVX8zMHrA",
  authDomain: "wairld.firebaseapp.com",
  projectId: "wairld",
  storageBucket: "wairld.firebasestorage.app",
  messagingSenderId: "111984817805",
  appId: "1:111984817805:web:d764af69efc655e7e894c4",
  measurementId: "G-NJB4W9JMFK"
};
```

## 📋 Оставшиеся шаги (требуют ручного выполнения)

### 1. Установка Git (если не установлен)

```bash
sudo apt-get update
sudo apt-get install git
```

### 2. Инициализация Git репозитория

```bash
cd /home/elbek/SWLOCAL/www/frontend

# Инициализация
git init

# Настройка пользователя
git config user.name "elbek45"
git config user.email "your-email@example.com"

# Добавление всех файлов
git add .

# Первый коммит
git commit -m "Initial commit: Wairld application with modern design"
```

### 3. Создание GitHub репозитория

#### Вариант A: Через веб-интерфейс GitHub

1. Откройте https://github.com/new
2. Repository name: `wairld`
3. Description: "Wairld - World of AI: Живая лаборатория для симбиотической эволюции человеческого и искусственного интеллекта"
4. Выберите Public или Private
5. НЕ инициализируйте с README, .gitignore или license (у нас уже есть)
6. Нажмите "Create repository"

#### Вариант B: Через GitHub CLI

```bash
# Установка GitHub CLI (если не установлен)
sudo apt install gh

# Аутентификация
gh auth login

# Создание репозитория
gh repo create wairld --public --source=. --remote=origin --push
```

### 4. Загрузка кода на GitHub

```bash
cd /home/elbek/SWLOCAL/www/frontend

# Добавление remote репозитория
git remote add origin https://github.com/elbek45/wairld.git

# Загрузка кода
git branch -M main
git push -u origin main
```

### 5. Деплой в Firebase

```bash
cd /home/elbek/SWLOCAL/www/frontend

# Вход в Firebase (откроется браузер для аутентификации)
npx firebase login

# Деплой
npx firebase deploy

# Или если хотите только hosting
npx firebase deploy --only hosting
```

После успешного деплоя ваше приложение будет доступно по адресу:
- https://wairld.web.app
- https://wairld.firebaseapp.com

### 6. Настройка кастомного домена (опционально)

1. Откройте Firebase Console: https://console.firebase.google.com/project/wairld/hosting
2. Перейдите в раздел Hosting
3. Нажмите "Add custom domain"
4. Следуйте инструкциям для настройки DNS записей

## 🚀 Быстрые команды

### Пересборка и деплой

```bash
# Пересборка статических файлов
npm run generate

# Деплой в Firebase
npx firebase deploy --only hosting
```

### Обновление кода на GitHub

```bash
git add .
git commit -m "Update: описание изменений"
git push origin main
```

## 📁 Структура проекта

```
/home/elbek/SWLOCAL/www/frontend/
├── dist/                     # Production build (генерируется)
├── .firebase/                # Firebase cache (в .gitignore)
├── .firebaserc              # Firebase project configuration
├── firebase.json            # Firebase hosting configuration
├── .gitignore              # Git ignore rules
├── plugins/firebase.js     # Firebase config plugin
└── package.json            # Project dependencies
```

## 🔧 Troubleshooting

### Ошибка: "Firebase project not found"

```bash
# Убедитесь, что вы залогинены
npx firebase login

# Выберите правильный проект
npx firebase use wairld
```

### Ошибка при push в GitHub: "Authentication failed"

Вам нужно настроить Personal Access Token:

1. Откройте https://github.com/settings/tokens
2. Generate new token (classic)
3. Выберите scopes: repo, workflow
4. Скопируйте token
5. Используйте token вместо пароля при push

### Проблемы с правами доступа

```bash
# Если файлы не коммитятся, проверьте права
ls -la /home/elbek/SWLOCAL/www/frontend/

# При необходимости измените владельца
sudo chown -R elbek:elbek /home/elbek/SWLOCAL/www/frontend/
```

## 📝 Дополнительные настройки

### GitHub Actions для автоматического деплоя

Создайте файл `.github/workflows/firebase-deploy.yml`:

```yaml
name: Deploy to Firebase Hosting

on:
  push:
    branches:
      - main

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run generate

      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: wairld
```

## 🎯 Финальные ссылки

После завершения всех шагов:

- **GitHub Repository**: https://github.com/elbek45/wairld
- **Firebase Hosting**: https://wairld.web.app
- **Firebase Console**: https://console.firebase.google.com/project/wairld

## 📞 Поддержка

Если возникли вопросы:
- Firebase Documentation: https://firebase.google.com/docs/hosting
- GitHub Documentation: https://docs.github.com/
- Nuxt.js Deployment: https://nuxtjs.org/deployments/firebase-hosting

---

**Статус проекта**: Production build готов, требуется ручной деплой
**Последнее обновление**: 2025-11-10
