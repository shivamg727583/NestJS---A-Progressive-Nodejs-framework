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

** Install Package ``` class-transformer and class-validator ``` **

```bash
npm install class-transformer class-validator

 ```  
 ### Make custom pipes 
 - Added a pipe as `` nest g pipe common/pipes/uppercase ``
 - Here in uppercase pipe , the name will be transform into uppercase.
---

---

