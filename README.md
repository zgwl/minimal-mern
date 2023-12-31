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

## Setup CI/CD

### Docker Registry Setup

- Go to [Docker Hub](https://hub.docker.com/) to signup.

- Log in to Docker Hub.

- Go to [Security](https://hub.docker.com/settings/security) to create new Access Token.

- Copy the generated token for the next step.

### AWS Access Key Setup

- Signup for AWS if you don't have an account.

- Go to the IAM Dashboard.

- Navigate to the **Users** section.

- Click **Create User**

- In the **Permissions options** step, click the **Attach policies directly**, and grant this user the following permissions:

  - AWSLambda_FullAccess

- Click the user once it's created, then click the **Create access key** under the **Summary** section.

- Select **Application running outside AWS** as the user case.

- Save the **Access Key** and **Secret Access Key** for future reference.

### Github Repo Setup

- Go to Github Repository

- Click **Settings** -> **Secrets** -> **Actions**

- Add the following secrets under **Repository secrets**:

  - **DOCKERHUB_USERNAME**: The Docker Hub username

  - **DOCKERHUB_ACCESS_TOKEN**: The created access token from previous step

  - **AWS_ACCESS_KEY_ID**: from AWS setup

  - **AWS_SECRET_ACCESS_KEY**: from AWS setup

### AWS Lambda Setup

- Login the AWS and go to the **Lambda**.

- Click the **Create Function**.

- Chose **Author from scratch** and give the function a name.

- Choose Runtime as **Node.js 20.X**

- Once the function gets created, edit its **runtime settings** to update the Handler to **dist/src/server.handler** to match the codebase.

- Go to the **configuration** tab, then click the **Environment Variables** section.

- Add a new environment variable:

  - Key: **NODE_ENV**
  - Value: **production**

### AWS API Gateway Setup

- Login the AWS and go to the **API Gateway**.

- Click the **BUILD** button for the **HTTP API**.

- Click **Add integration** and add **Lambda** from the drop down then pick the right Lambda function to add.

- In the **Configure routes** page, set the following routing rules:

  - METHOD: ANY
  - Resource path: /
  - Integration target: Lambda function name

- After the API Gateway gets created, click the API name on the left sidebar to get the API URL.
