# RentBlee - E-commerce Rental Platform

RentBlee is an innovative e-commerce rental platform that enables users to rent items and vendors to list their products seamlessly. This platform ensures a secure and user-friendly experience with role-based authentication, efficient inventory management, and a responsive UI.

## Features
- **Role-Based Authentication**: Secure access for different users (renters, vendors, and admins) using JWT.
- **Inventory Management**: Vendors can add, remove, and modify rental items.
- **Responsive UI**: Ensures a smooth experience across devices.
- **Secure Transactions**: Protects user data and payments.
- **Real-time Notifications**: Alerts users about rental status and updates.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **API Testing**: Postman

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/sktigpta/rentblee.git
   ```
2. Navigate to the project directory:
   ```sh
   cd rentblee
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add necessary environment variables (e.g., database URI, JWT secret).
5. Start the development server:
   ```sh
   npm run dev
   ```

## API Endpoints
### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login

### Products
- `GET /api/products` - Fetch available rental products
- `POST /api/products` - Add a new product (vendor only)
- `PUT /api/products/:id` - Update product details (vendor only)
- `DELETE /api/products/:id` - Remove a product (vendor only)

### Rentals
- `POST /api/rentals` - Create a rental request
- `GET /api/rentals/:id` - Get rental details
- `PUT /api/rentals/:id` - Update rental status
- `DELETE /api/rentals/:id` - Cancel rental

## Security & Best Practices
- Uses **JWT authentication** for secure access control.
- Implements **input validation** to prevent SQL injection and XSS attacks.
- **Encrypts sensitive data** such as passwords before storing.

## Contribution Guidelines
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`
3. Make your changes and commit: `git commit -m 'Added new feature'`
4. Push the changes: `git push origin feature-branch`
5. Open a pull request.

## Contact
For queries or suggestions, reach out:
- **Email**: sktigpta@gmail.com
- **GitHub**: [RentBlee Repo](https://github.com/sktigpta/rentblee)
