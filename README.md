
# Vercel API Hosting
Project to understand the Vercel hosting service.

### About the experience


### About the application
This is a simple Node.js API that returns a list of products, allowing filtering by price, category, and name. 
The API supports multi query parameters to perform the filtering.

### 

### Endpoints
**Root API Address:** 
https://poc-vercel-backend.vercel.app/products

**Query Params**

- `priceLower`: (Optional) Filters products with a price lower or equal to the specified value.
- `category`: (Optional) Filters products by category.
- `name`: (Optional) Filters products by name, allowing partial name matches (case-insensitive).


**Examples**<br>
- [GET /products](https://poc-vercel-backend.vercel.app/products)
- [GET /products?priceLower=100](https://poc-vercel-backend.vercel.app/products?priceLower=100)
- [GET /products?category=Electronics](https://poc-vercel-backend.vercel.app/products?category=Electronics)
- [GET /products?category=Electronics&priceLower=100](https://poc-vercel-backend.vercel.app/products?category=Electronics&priceLower=100)


## Running the Project
### Prerequisites
- [Node.js](https://nodejs.org) installed.
- A package manager like `npm` or `yarn` installed.

### Installation
1. Clone the repository or copy the source code.
2. Navigate to the project directory.
3. Run the following command to install the dependencies:

  ```
  $ yarn
  ```

### Starting the Server
To start the server, run:

  ```
  $ node index.js
  ```

The application is running on your http://localhost:3000
