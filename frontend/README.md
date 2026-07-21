# Frontend App for Gerenciamento Esportivo API

This is a simple frontend application built with React to interface with the Gerenciamento Esportivo API. The application allows users to view and manage sports data.

## Project Structure

```
frontend-app
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── App.js              # Main application component
│   ├── api.js              # API interaction functions
│   ├── components
│   │   └── EsportesList.js  # Component to display list of sports
│   └── styles
│       └── App.css         # CSS styles for the application
├── package.json             # NPM configuration file
└── README.md                # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd frontend-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

   This will start the development server and open the application in your default web browser.

## Usage

- The application fetches sports data from the Gerenciamento Esportivo API.
- The main component (`App.js`) sets up the routing and renders the `EsportesList` component, which displays the list of sports.

## API Endpoints

Ensure that the backend API is running and accessible. The frontend will make requests to the following endpoint to fetch sports data:

- `GET /api/esportes` - Retrieves a list of sports.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. 

## License

This project is licensed under the MIT License.