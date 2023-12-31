import cors from "cors";
import express from "express";
import serverless from "serverless-http";

const env = process.env.NODE_ENV || "development";

const app = express();
app.use(cors());

app.get("/", (_req, res) => {
  res.send(`Hello, Wally! Current environment: ${env}`);
});

// Export the Express app for testing
export { app };

// Export the handler for the Serverless Lambda function
export const handler = serverless(app);

export const startServer = () => {
  if (!process.env.LAMBDA_TASK_ROOT) {
    const port = 5050;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
};

if (require.main === module) {
  startServer();
}
