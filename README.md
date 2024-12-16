# Uprised-Quiz

Uprised-Quiz is a React-based web application for evaluating users on various skill sets through an engaging and interactive quiz. This project was developed as an assignment for the React Developer role at Uprised.

## Features

- **Home Screen**: Start the quiz with ease.
- **Question Screen**: Answer quiz questions dynamically fetched from the backend.
- **Report Screen**: View the final score and performance summary.
- **Mock API Integration**: Uses [mockapi.io](https://mockapi.io/) to simulate backend services.

## Tech Stack

- **Frontend**: React
- **Styling**: CSS
- **Backend**: Mock API for data
- **Deployment**: Hosted online for demonstration
- **Version Control**: Git/GitHub

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- A code editor (e.g., VS Code)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Manish50518/Uprised-Quiz.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Uprised-Quiz
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

   The application will run at [http://localhost:3000](http://localhost:3000).

### Mock API Configuration

This project uses [mockapi.io](https://mockapi.io/) to simulate API endpoints for quiz data. Ensure you create a project in mockapi.io and configure the endpoints for:

- **Quiz Questions**: `/questions`
- **Quiz Results**: `/results`

Replace the base URL in the code with your mockapi.io project URL in the respective service or API utility files.

Example:

```javascript
const BASE_URL = 'https://<your-mockapi-url>.mockapi.io';
```

## Folder Structure

```
Uprised-Quiz/
├── public/
├── src/
│   ├── components/   # Reusable React components
│   ├── pages/        # Page-level components (Home, Quiz, Report)
│   ├── services/     # API integration logic
│   ├── styles/       # Tailwind CSS setup
│   ├── App.js        # Main app entry point
│   ├── index.js      # React DOM rendering
├── package.json      # Project dependencies
└── README.md         # Project documentation
```

## Deployment

The project can be deployed using any static hosting service like Vercel, Netlify, or GitHub Pages. For deployment instructions:

1. Build the project:

   ```bash
   npm run build
   # or
   yarn build
   ```

2. Deploy the contents of the `build` folder to your chosen hosting service.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add some feature"
   ```

4. Push the branch:

   ```bash
   git push origin feature-name
   ```

5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any queries or feedback, please contact [Manish50518](https://github.com/Manish50518).
