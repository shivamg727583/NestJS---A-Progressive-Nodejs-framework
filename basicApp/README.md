# 🧠 Learning Flow (NestJS Basics)

## 📘 Introduction

This project is a learning-based setup using **NestJS** to understand backend development, including services, controllers, modules, and DTOs. Each folder demonstrates a core concept of NestJS through a specific entity (user, product, employee, etc.).

---

## ⚙️ Installation

```bash
npm install
```

To start the development server:

```bash
npm run start:dev
```

---

## 📁 Project Structure & File Setup

### 🔹 `user/`

- Created **user service** to understand service layer logic.
- Implemented full **REST API**:
  - Create
  - Read
  - Update (PUT & PATCH)
  - Delete

### 🔹 `product/`

- Created **product service** and **controller**.
- Practiced splitting logic between service and routing layer.

### 🔹 `employee/`

- Setup complete **employee module**, **service**, and **controller**.
- Learned how to properly **organize NestJS modules** and establish clean separation of concerns.
- Understood the **relationship between module, service, and controller**.

### 🔹 `category/`

- Created **category REST APIs** using appropriate **HTTP routes**.
- Practiced building clean, RESTful endpoints.

---

## 🛡️ DTO - Data Transfer Object (Validation + Security)

### 🔸 `customer/`

- Implemented **DTOs and interfaces** to:
  - Define strong types
  - Add validation using decorators like `@IsString`, `@IsEmail`, etc.
  - Enhance input security and structure

** Install Package `class-transformer and class-validator` **

```bash
npm install class-transformer class-validator

```

### Make custom pipes

- Added a pipe as `nest g pipe common/pipes/uppercase`
- Here in uppercase pipe , the name will be transform into uppercase.

---

### Guards

- create a guards folder for auth to setup guard
- to use guard - use `UseGuard(GuardName)` in controller -**Role_Based_Authentication** : 0 created new guard in guards folder as role

---
### Exception Filters
- Handle errors and exceptions in a centralized way.
- Help in managing app-wide error handling logic cleanly and consistently.
- FIlters can be applied at method

#### Where we can use ?
- Filters can be applied at methof-level , controller-level, or globally (in main.ts)
- @Catch() decorator is used to define which exception the filter will handle.

- We can create filter as `` nest g filter fileName ``

---

## Middlewares
- Middleware runs before the request reaches the controller.
***Use Case**
- Logging incoming request
- Authentication token
- Request transformation
- Blocking or redirection requests
- Rate limiting
**Middleware vs Guard**
- Middlware used in all nodejs,express,nestjs but Guard only used in Nestjs.
- ***Guard***: runs Before route is accessed and Authorization (role check, access)
- ***Middleware***: runs Before controller , common tasks(logging,token decode)

