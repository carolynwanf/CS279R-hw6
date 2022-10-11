import { Mongo } from "meteor/mongo";

// Creating a new Mongo collection
export const TasksCollection = new Mongo.Collection("tasks");
