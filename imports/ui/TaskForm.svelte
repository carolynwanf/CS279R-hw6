
<script>
    import { TasksCollection } from '../api/TasksCollections';
    
    // Initialize newTask to empty
    let newTask = '';
  
    // Add task to database on submit
    const handleSubmit = () => {
      TasksCollection.insert({
        text: newTask,
        createdAt: new Date(), 
      });
  
      newTask = '';
    }
  </script>

  <!-- Form for adding tasks -->
  <form class="task-form" on:submit|preventDefault={handleSubmit}>
    <input
            type="text"
            name="text"
            placeholder="Type to add new tasks"
            bind:value={newTask}
    />
    <button type="submit">Add Task</button>
  </form>