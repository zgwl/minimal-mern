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

### AWS Access Key Setup

- Signup for AWS if you don't have an account.

- Go to the IAM Dashboard.

- Navigate to the **Users** section.

- Click **Create User**

- In the **Permissions options** step, click the **Attach policies directly**, and grant this user the following permissions:

  - AWSLambda_FullAccess
  - AmazonS3FullAccess
  - AmazonEC2ContainerRegistryFullAccess
  - AmazonECS_FullAccess

- Click the user once it's created, then click the **Create access key** under the **Summary** section.

- Select **Application running outside AWS** as the user case.

- Save the **Access Key** and **Secret Access Key** for future reference.

### Github Repo Setup

- Go to Github Repository

- Click **Settings** -> **Secrets** -> **Actions**

- Add the following secrets under **Repository secrets**:

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

### AWS ECR (Elastic Container Registry) Setup

- Login the AWS and go to the **ECR**.

- Click on the **Create repository** to create a new container repository and add a **Repository name**.

### AWS ECS (Elastic Container Service) Setup

- Login the AWS and go to the **ECS**.

- Click **Create cluster**:

  - Pick the **Amazon EC2 instance** infrastructure.
  - Set the Operating system to **Amazon Linux 2**.
  - Pick a right instance type. E.g. **t2.micro**, the AWS free tier EC2 instance.
  - Set both the Minimum Desired capacity and Maximum Desired capacity to **1**.
  - Turn on the **Auto-assign public IP**.

- Once the cluster gets created, go to the **Task definitions** tab then create a new task definition.

  - Under the Infrastructure requirements:
    - Set the Launch type to **Amazon EC2 instances** only.
    - Set the Task size CPU to **0.25 vCPU**, Memory to **0.5 GB**.
  - Under the Container - 1
    - Copy the image URI from **ECR** page, then set it to the ECR image URI.
    - Add Port mappings rules to ensure it supports port number **80**.

- Navigate to the cluster and go to the **Services** table.

  - Create a new service.
  - Under the Deployment configuration, set the Family to the task definition from previous step.
  - Make sure the **Desired tasks** was set to **1**. It's the number of instances of the containers to run.

- Go to **EC2**, then go to **Security Groups**. Edit the inbound rules and add following rules:

  - Type: HTTP. Source: Custom, 0.0.0.0/0
  - Type: HTTPS. Source: Custom, 0.0.0.0/0
