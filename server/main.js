import { Meteor } from "meteor/meteor";
import { TasksCollection } from "/imports/api/TasksCollections";

// Function to insert tasks into the collection
const insertTask = (taskText) => TasksCollection.insert({ text: taskText });

Meteor.startup(() => {
  // code to run on server at startup

  // If there are no tasks in my database, initiating some toy tasks
  if (TasksCollection.find().count() === 0) {
    [
      "First Task",
      "Second Task",
      "Third Task",
      "Fourth Task",
      "Fifth Task",
      "Sixth Task",
      "Seventh Task",
    ].forEach(insertTask);
  }
});
