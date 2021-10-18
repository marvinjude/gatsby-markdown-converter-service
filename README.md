# ✍️ Gatsby MarkDown Converter Service

This service converts texts to markdown using [marked](https://marked.js.org/)

## Endpoints

- [POST] /converter/md-to-html - Convert Markdown to HTML

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/088dfd5aaddb1459150d?action=collection%2Fimport)

## 💻 Installation

```
git clone https://github.com/marvinjude/gatsby-converter-service.git
```

```
cd gatsby-converter-service
```

### Install dependencies

```
npm i
```

## ☁️ Start Server

### Development

```
npm run dev
```

### Production

```
npm run start
```

## 🧪 Run Tests

```
npm run test
```

## ✅ Todo

- Allow clients to pass options to configure the markdown compiler see [marked advanced option](https://marked.js.org/)
- The marked library synchrously converts markdown to HTML, refactor conveterer to run in a [worker thread](https://nodejs.org/api/worker_threads.html) to prevent potential DDOS attack
- Add more tests for wrongs inputs
- Add TypeScript
