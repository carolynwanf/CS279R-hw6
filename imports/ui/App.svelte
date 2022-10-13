<script>
  // Import task form stuff
  import { TasksCollection } from '../api/TasksCollections';
  import Task from './Task.svelte';
  import TaskForm from './TaskForm.svelte';

  // Variables for incomplete tasks
  let incompleteCount;
  let pendingTasks = '(0)';
  let tasks = [];

  // Var and setter for hiding completed tasks
  let hideCompleted = false;
  // variable to check if hide completed filter is true or false
  const hideCompletedFilter = { isChecked: { $ne: true } };

  const setHideCompleted = (value) => {
    hideCompleted = value;
  };

  $m: {
    // Get tasks from database
    tasks = TasksCollection.find(hideCompleted ? hideCompletedFilter : {}, {
      sort: { createdAt: -1 },
    }).fetch();

    // Recording incomplete tasks
    incompleteCount = TasksCollection.find(hideCompletedFilter).count();
    pendingTasks = `${incompleteCount ? ` (${incompleteCount})` : '(0)'}`;
  }

</script>

<div class="app">
  <header>
    <div class="app-bar">
      <div class="app-header">
        <!-- Header with incomplete tasks -->
        <h1>Todos {pendingTasks}</h1>
      </div>
    </div>
  </header>

  <div class="main">
    <TaskForm />
    <div class="filter">
      <!-- Show completed button -->
      <button on:click={() => setHideCompleted(!hideCompleted)}>
        {hideCompleted ? 'Show All' : 'Hide Completed'}
      </button>
    </div>
    <ul class="tasks" style="list-style:none;">
      <!-- Uses template laguage to render Task element for each task -->
      {#each tasks as task (task._id)}
        <Task task={task} />
      {/each}
    </ul>
  </div>
</div>