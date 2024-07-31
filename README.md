# Microservices Application Project

I have completed a microservices architecture application project that demonstrates my skills in building scalable and efficient systems. This project consists of two main microservices: Admin and Client. These services interact with each other to perform various tasks. The Admin service uses a MySQL database with TypeORM for managing product data, and the Client service uses a MongoDB database for managing product likes. RabbitMQ is used for event-driven communication between the services.

## Architecture Overview

### Components

1. **Admin Service**
   - Manages CRUD operations for products.
   - Uses MySQL and TypeORM.
   - Synchronizes data to the Client service using RabbitMQ events.

2. **Client Service**
   - Manages product likes.
   - Uses MongoDB.
   - Synchronizes likes to the Admin service using HTTP service calls.

3. **RabbitMQ**
   - Facilitates communication between services for synchronization.

4. **Databases**
   - **MySQL**: Used by the Admin service for product data.
   - **MongoDB**: Used by the Client service for like data.

## Communication Flow

- The **Admin Service** manages product data and performs CRUD operations.
- When a product is created, updated, or deleted, an event is published to **RabbitMQ**.
- The **Client Service** listens to these events and updates its local data store (MongoDB) accordingly.
- Users can like products through the **Client Service**.
- The like data is synchronized back to the **Admin Service** using HTTP service calls.

## Technologies Used

- **Microservices Architecture**: To ensure each service operates independently.
- **Event-Driven Communication**: Using RabbitMQ to manage and synchronize events between services.
- **MySQL**: For relational data management in the Admin service.
- **TypeORM**: For seamless database operations in the Admin service.
- **MongoDB**: For managing non-relational data in the Client service.
- **HTTP Service Calls**: For synchronizing like data between the Client and Admin services.

## Lessons Learned

Through this project, I have learned and applied various concepts and technologies, including:
- **Microservices Architecture**: Designing and implementing services that operate independently yet communicate effectively.
- **Event-Driven Communication**: Using RabbitMQ to handle events and ensure synchronization between services.
- **Database Management**: Integrating and managing data using MySQL for relational data and MongoDB for non-relational data.
- **TypeORM**: Utilizing TypeORM for seamless database operations in the Admin service.
- **HTTP Service Calls**: Implementing HTTP calls for data synchronization between services.
- **Synchronization**: Ensuring data consistency across different services through effective communication mechanisms.

I have gained practical experience in building and managing a complex microservices architecture, utilizing modern technologies and best practices to create a scalable and efficient system.
