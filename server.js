const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database')


// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});
// console.log(Youtube)

// config
dotenv.config({path:"backend/config/config.env"});

// connected to database
connectDatabase();

const server = app.listen(process.env.PORT,()=>{
    console.log(`server is working on htttp://localhost:${process.env.PORT}`)
})

// Undhandled Promise Rejection
process.on("unhandledRejection",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(()=>{
        process.exit(1);
    })
})