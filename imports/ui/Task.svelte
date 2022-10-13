<script>
    import { TasksCollection } from '../api/TasksCollections';
  
    export let task;
  
    // Toggling if a task is complete or not
    const toggleChecked = () => {
      TasksCollection.update(task._id, {
        $set: { isChecked: !task.isChecked }
      });
    };

    // Remove a task
    const deleteThisTask = () => {
      TasksCollection.remove(task._id);
    };
  </script>
  <li>
      <!-- Checkbox -->
      <input
             type="checkbox"
             readonly
             checked={!!task.isChecked}
             on:click={toggleChecked}
             
      />
      <span style={task.isChecked ? "text-decoration:line-through;":''}>{ task.text }</span>
      <!-- Delete button -->
      <button class="delete" on:click={deleteThisTask}>&times;</button>
  </li>