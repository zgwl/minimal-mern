# Minimal MERN project

## Backend

### Initialize Backend Project

```shell
npm init -y
```

### Build the Backend Docker Image

```shell
docker build -t my-nodejs-app .
```

### Run the Backend Docker Container

```shell
docker run -d -p 5050:5050 my-nodejs-app
```

## Frontend

### Initialize Frontend Project

```shell
npx create-react-app frontend --template typescript

```

### Build the Frontend Docker Image

```shell
docker build -t my-react-app .
```

### Run the Frontend Docker Container

```shell
docker run -d -p 8080:80 my-react-app
```

## Docker Compose

```shell
docker-compose up --build
```

## Setup CI

### Docker Registry Setup

- Go to [Docker Hub](https://hub.docker.com/) to signup.
- Log in to Docker Hub.
- Go to [Security](https://hub.docker.com/settings/security) to create new Access Token.
- Copy the generated token for the next step.

### Github Repo Setup

- Go to Github Repository
- Click **Settings** -> **Secrets** -> **Actions**
- Add two secrets under **Repository secrets**:
  - DOCKERHUB_USERNAME: The Docker Hub username
  - DOCKERHUB_ACCESS_TOKEN: The created access token from previous step
