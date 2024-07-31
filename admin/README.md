# Admin Service

The Admin service is a core component of the microservices architecture application. It manages CRUD operations for products and synchronizes product data with the Client service using RabbitMQ events. This service uses a MySQL database with TypeORM for managing product data.

## Features

- Manage CRUD operations for products.
- Synchronizes product data with the Client service using RabbitMQ events.

## Architecture Overview

### Components

1. **MySQL**
   - Used to store and manage product data.
  
2. **TypeORM**
   - An ORM for managing MySQL database operations seamlessly.

3. **RabbitMQ**
   - Facilitates communication and synchronization of product data with the Client service.

## Communication Flow

- The Admin service manages product data and performs CRUD operations.
- When a product is created, updated, or deleted, an event is published to RabbitMQ.
- The Client service listens to these events and updates its local data store (MongoDB) accordingly.

## Technologies Used

- **MySQL**: For relational data management related to products.
- **TypeORM**: For seamless database operations in the Admin service.
- **RabbitMQ**: For event-driven communication between the Admin and Client services.

## Endpoints

- `POST /products`: Create a new product.
- `GET /products`: Get all products.
- `GET /products/:id`: Get a product by ID.
- `PUT /products/:id`: Update a product by ID.
- `DELETE /products/:id`: Delete a product by ID.
