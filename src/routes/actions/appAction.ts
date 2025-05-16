/**
 * @copyright 2025 Neurobit
 * @license Apache-2.0
 * @description App action for the app
 */

// Custom modules
import { databases } from "@/lib/appwrite";
import { generateID } from "@/lib/utils";
import { getUserId } from "@/lib/utils";

// Types
import type { ActionFunction } from "react-router";
import type { Task } from "@/types/type.type";

// Environment variables
const APPWRITE_DATABASE_ID: any = import.meta.env.VITE_APPWRITE_DATABASE_ID;

const createTask = async (data: Task) => {
  try {
    return await databases.createDocument(
      APPWRITE_DATABASE_ID,
      "tasks-2212",
      generateID(),
      { ...data, userId: getUserId() },
    );
  } catch (error) {
    console.log(error);
  }
};

const appAction: ActionFunction = async ({ request }) => {
  const data = (await request.json()) as Task;
  if (request.method === "POST") {
    return await createTask(data);
  }
};

export default appAction;
