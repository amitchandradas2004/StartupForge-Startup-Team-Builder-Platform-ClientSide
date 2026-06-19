const dns = require("node:dns");
dns.setServers(["1.1.1.1", "1.0.0.1"]);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db(process.env.DB_NAME);

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),
  user: {
    additionalFields: {
      role: {
        default: "founder",
        input: true,
      },
    },
  },
});
// import { betterAuth } from 'better-auth';
// import { MongoClient } from 'mongodb';
// import { mongodbAdapter } from 'better-auth/adapters/mongodb';
// import { admin, jwt } from 'better-auth/plugins';

// const client = new MongoClient(process.env.MONGO_DB_URI!);
// const db = client.db('fitcore_Data');

// export const auth = betterAuth({
//   database: mongodbAdapter(db, {
//     client,
//   }),

//   emailAndPassword: {
//     enabled: true,
//   },

//   user: {
//     additionalFields: {
//       role: {
//         defaultValue: 'user',
//         input: true,
//       },
//     },
//   },

//   plugins: [jwt(), admin()],
// });
