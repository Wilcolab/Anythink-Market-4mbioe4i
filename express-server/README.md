# Express Server Project

This project is a simple Express server that listens on port 8001. It is set up to use nodemon for automatic code reloading during development.

## Project Structure

```
express-server
├── src
│   └── server.js        # Entry point of the application
├── Dockerfile           # Dockerfile to build the server image
├── package.json         # npm configuration file
├── .gitignore           # Files and directories to ignore by Git
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Yarn package manager installed.

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Wilcolab/Anythink-Market-4mbioe4i.git
   cd Anythink-Market-4mbioe4i/express-server
   ```

2. Install dependencies:
   ```
   yarn install
   ```

### Running the Server

To start the server with automatic reloading, use the following command:

```
yarn start
```

The server will be running at `http://localhost:8001`.

### Docker

To build and run the Docker container, use the following commands:

1. Build the Docker image:
   ```
   docker build -t express-server .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 express-server
   ```

### License

This project is licensed under the MIT License.