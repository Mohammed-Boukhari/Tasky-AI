/**
 * @copyright 2025 Neurobit
 * @license Apache-2.0
 * @description Appwrite client configuration for the app
 */

// node_modules

import { Client, Databases, ID, Query } from "appwrite";

const APPWRITE_PROJECT_ID: any = import.meta.env.VITE_APPWRITE_PROJECT_ID;

// client configuration
const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject(APPWRITE_PROJECT_ID);

const databases = new Databases(client);

export { databases, ID, Query };
