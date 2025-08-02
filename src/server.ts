import app from "./app";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const dbUrl = process.env.DB_URL;
const port = process.env.PORT || 5000;

if (!dbUrl) {
  console.error("❌ DB_URL not found in environment variables.");
  process.exit(1);
}

let isConnected = false;

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  if (!isConnected) {
    try {
      await mongoose.connect(dbUrl, {
        serverSelectionTimeoutMS: 10000,
        socketTimeoutMS: 45000,
      });
      isConnected = true;
      console.log("✅ Connected to MongoDB Atlas");
    } catch (error) {
      console.error("❌ Failed to connect to MongoDB:", error);
      throw error;
    }
  }
};

// Vercel Serverless Handler
export default async function handler(req: any, res: any) {
  try {
    await connectDB();

    // Wait until MongoDB is actually ready before handling request
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: "MongoDB connection not ready",
        statusCode: 503,
        errorType: "MongooseConnection",
      });
    }

    return app(req, res);
  } catch (error:any) {
    console.error("❌ Error in handler:", error);
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: error?.message || "Internal Server Error",
      errorType: error?.name || "UnknownError",
    });
  }
}

// Optional: Local development
if (require.main === module) {
  connectDB().then(() => {
    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });
  });
}
