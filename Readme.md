# Nestjs

## What is Nest js?
- A progressive nodejs framework for building efficient and scalable server-side applications.
- Typescript friendly - Build with typescript and heavily inspired by Angular.
- Scalable and maintainable
- Modular structure - Uses modular architecture for better organiation
- Solve architecture
- Uses dependency injection


## Why Use Nest js
- To simplify backend development using modern architechture.
- Structure - Provide a structure way to build scalable and testable applications.
- MircoServices
- Modularity
- Rest API
- Typescript - FUlly supports typescript
- Documentation
- Solved the limitaion of express app (unopinionated framework - means no proper stucture in express app )
- Build-in Dependency Injection system
- Easy integration with databases , websockets, GraphQL, and microservices.


## Installation 
- ` npm i -g @nestjs/cli `
  ` nest new project-name `

-- CLi (commond line interface) = provide commmand to create any folder, code,file without manually


## Folder structure 
`
 - dist - Automatically generate when run the app
 - node_modules -  All dependency modules
 - src - Source code
   - app.controller.spec.ts - for testing
   - app.controller.ts - controller file (request and response)
   - app.module.ts - module file (structure of app )
   - app.service.ts - service file (business logic, controller calls this services, calculations logic)
   - main.ts (entry point of app )
 - test - For perform testing and test cases
 - .gitignore - List files name which we want't to track files like .env , node_modules

 `

 ## Controllers 
 - Controllers handle incoming HTTP requests.
 - They define routes (e.g., GET,POST,PUT,DELETE)
 - Bridge between client and business logic(services).
 - Organie API endpoints clearly and modularity.
 - Help separate concerns: routing vs business logic.
 - Make code scalable and maintainable.
 - Improve code  readiability with clean structure.

 - create controller using CLI - ` nest g controller controller-name `

 ### Decorators : 
 - Special functions that add metadata to classes or methods.
 - Start with @ symbol (e.g, @Controller, @Get()).
 - Tell NestJS how to trat the classes or method.
 - Used for rounting,dependecny

## Services 
- A typescript class with logic like calculations, data access, etc.
- Used to write bussiness logic in a clean and reusable way.
- They are marked with @Injectable() so NestJs can use them.

 ### Why we use services
 - To separate logic form controllers.
 - Makes code modular , clearn, and testable.
 - Services can be reused in multiple places.
 - Helps keep our apps organised and scalable

- Always use @Injectable() decorator on services.
- Inject services into controllers using controller injection.
- Services are part of the Dependency Injection system.
- Logic like fetching data, calculations, or API calls goes inside services.
- Generate using CLI - ` nest g service service-name ` 

## Modules
- A container where we keep related controllers, services , and providers for our application.
- Core part of NestJs architecture.
- Every NestJs app has at least one module.
- Generate module using CLI - ` nest g module module-name `
- After creating module , then make sure that import in parent module that is ` app.module.ts `

## Architecture overview 
- Nestjs architecture is modular, scalable and maintainable.
- This pattern helps in writting reusable and well structured code.
- Client (User) :
  - The person or app that sends a request (eg. from browser or mobile)
  - Trigger the process by accessing an endpoint(like /product)
- Controller :
  - Acts like a receptionist
  - Receives the client's HTTP request.
  - Calls the right service method to handle logic.
  - Sends back a response to the client.
- Service :
  - Contains business logic
  - Does  not deal with HTTP directly - just logic.  
- Provider :
  -  Any class that can injected or reused  (like Service , custom, classes, etc)
  - Registered in Module to be used via Dependency Injection.
- Module :
  - The container that groups controller,services and providers.
  - Organised the app into features (e.g. ProductModule,UserModule)
  - Helps keep the app scalable and clean.
- Dependency Injection :
  - Nestjs automatically provides services where they are needed.
  - We don't create new instances manually.
  - Improves testability and maintainability.

## Dependency Injection (DI)
- It is a mechanism where the framework automatically provides the required dependency - without creating them manually .
- It makes code reusable and clean .
- It makes testing easier.
- It promotes loose coupling (classes don't tighly depend on each other)
- It improves readibility and maintainability.

## API - Application Programming Interface
- It allows two applications to talsk to each other.
- Acts as a bridge between frontend and backend.
**RestAPI** -Representational State transfer.
  - It is a type of API that follows certain rules.
  - Uses HTTP methods like GET,POST,DELETE,PUT
  


    

##     





