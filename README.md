<h1 align="center">Welcome to hapi-demo 👋</h1>

![Prerequisite](https://img.shields.io/badge/node-%3E%3D18-blue.svg)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](http://next-swagger-doc.productsway.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)
[![Twitter: jellydn](https://img.shields.io/twitter/follow/jellydn.svg?style=social)](https://twitter.com/jellydn)

## Overview

> A simple Hapi server for demonstration purposes, designed to work with Hurl for testing HTTP requests.

[![IT Man - Building and Testing a #Hapi Server with #Hurl: A Step-By-Step Demo [Vietnamese]](https://i.ytimg.com/vi/LP_RXe8cM_s/hqdefault.jpg)](https://www.youtube.com/watch?v=LP_RXe8cM_s)

## Prerequisites

- [Bun](https://bun.sh/) installed on your system.
- [antfu/ni](https://github.com/antfu/ni) 💡 Use the right package manager.

## 🚀 Quick Start

### Installation

```sh
ni
```

### Usage

Start the development server:

```sh
nr dev
```

Or run with docker compose:

```sh
docker network create web
docker-compose up
```

Run tests using Hurl:

```sh
nr test
```

## 📸 Screenshots

### Swagger UI - http://localhost:3000/documentation

[![Demo](https://i.gyazo.com/bc045297c712ac770900b91acd314031.gif)](https://gyazo.com/bc045297c712ac770900b91acd314031)

### Testing with Hurl

[![Hurl Test](https://i.gyazo.com/5b2f7c30f5511f0575e7a992a0795402.gif)](https://gyazo.com/5b2f7c30f5511f0575e7a992a0795402)

## ✅ Testing

Run tests using Hurl:

```sh
hurl --test tests/todo.hurl
```

For verbose output:

```sh
hurl --verbose tests/todo.hurl
```

## 📚 Resources

- [Hapi - Official Documentation](https://hapi.dev/tutorials/?lang=en_US)
- [Hurl - Run and Test HTTP Requests](https://hurl.dev/)
- [jellydn/hurl.nvim: Hurl.nvim is a Neovim plugin that brings the power of the Hurl command line tool into your editor. Designed to run HTTP requests from `.hurl` files, this plugin simplifies the API development process, making it both efficient and versatile.](https://github.com/jellydn/hurl.nvim)
- [![IT Man - A Comprehensive Guide to Fastify, Bun, and CI with StepCI [Vietnamese]](https://i.ytimg.com/vi/pgofbfmxMto/mqdefault.jpg)](https://www.youtube.com/watch?v=pgofbfmxMto)


## 👤 Author

👤 **Huynh Duc Dung**

- Website: https://productsway.com/
- Twitter: [@jellydn](https://twitter.com/jellydn)
- Github: [@jellydn](https://github.com/jellydn)

## 🌟 Show Your Support

If this project has been helpful, please give it a ⭐️.

[![kofi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/dunghd)
[![paypal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/dunghd)
[![buymeacoffee](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/dunghd)
