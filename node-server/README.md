# Anythink Market Server

This project is an Express server that listens on port 8001. It is set up for automatic code reloading using Nodemon and can be run in a Docker container.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- Yarn (version 1.22 or higher)
- Docker (version 20.10 or higher)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/Wilcolab/Anythink-Market-4mbioe4i.git
   cd anythink-market-server
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

### Building the Docker Image

To build the Docker image, run:

```
docker build -t anythink-market-server .
```

### Running the Docker Container

To run the Docker container, use the following command:

```
docker run -p 8001:8001 anythink-market-server
```

The server will be accessible at `http://localhost:8001`.

### License

This project is licensed under the MIT License.