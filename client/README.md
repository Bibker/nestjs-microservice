# Client Service

The Client service is a crucial component of the microservices architecture application. It manages product likes and synchronizes like data with the Admin service using HTTP service calls. This service uses a MongoDB database to store the like data.

## Features

- Manage product likes.
- Synchronizes like data with the Admin service using HTTP service calls.

## Architecture Overview

### Components

1. **MongoDB**
   - Used to store data related to product likes.
  
2. **HTTP Service Calls**
   - Used to synchronize like data with the Admin service.

## Communication Flow

- Users can like products through the Client service.
- The Client service stores like data in MongoDB.
- When a product is liked, an HTTP service call is made to the Admin service to synchronize the like data.

## Technologies Used

- **MongoDB**: For managing non-relational data related to product likes.
- **HTTP Service Calls**: For synchronizing like data between the Client and Admin services.

## Endpoints

- `POST /api/products/{id}/like`: Like a product.
