# Nuxt.js Server Plugins Guide

## Серверные плагины (server/plugins)

### Доступные плагины

#### `disable-html-minify.ts`

- Отключает минификацию HTML на сервере
- Добавляет переносы строк между HTML тегами для лучшей читаемости
- Полезен при разработке и отладке
- Делает HTML код более структурированным и понятным

#### `format-html.ts`

- Форматирует HTML код с помощью Prettier
- Применяет стандартные правила форматирования
- Автоматически структурирует HTML ответы
- Улучшает читаемость кода

## Конфигурация SSR и Nitro

В файле `nuxt.config.ts` можно настроить серверный рендеринг и пресет Nitro:

```typescript
export default defineNuxtConfig({
  ssr: true,

  nitro: {
    preset: 'static',
  },
});
```

## Настройка Prettier

### Установка

```bash
npm install --save-dev prettier
# или
yarn add -D prettier
```

### Конфигурация

Создайте файл `.prettierrc` в корне проекта:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf",
  "htmlWhitespaceSensitivity": "css"
}
```

### Скрипты для форматирования

Добавьте в `package.json`:

```json
{
  "scripts": {
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,vue,html,css,scss,json,md}\"",
    "format:check": "prettier --check \"**/*.{js,jsx,ts,tsx,vue,html,css,scss,json,md}\""
  }
}
```

### Игнорирование файлов

Создайте файл `.prettierignore`:

```
node_modules
.nuxt
dist
```
