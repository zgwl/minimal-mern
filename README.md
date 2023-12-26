# Minimal MERN project

## Backend

### Initialize Backend Project

```shell
npm init -y
```

### Build the Docker Image

```shell
docker build -t my-nodejs-app .
```

### Run the Docker Container

```shell
docker run -d -p 5050:5050 my-nodejs-app
```

## Frontend

### Initialize Frontend Project

```shell
npx create-react-app frontend --template typescript

```
