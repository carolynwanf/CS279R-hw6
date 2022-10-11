<script>
  import Task from './Task.svelte';
  import { TasksCollection } from '../api/TasksCollections';
  import { useTracker } from 'meteor/rdb:svelte-meteor-data';
  import TaskForm from './TaskForm.svelte'

  // Reactive statement to get and maintain tasks
  $: tasks = useTracker(() => TasksCollection.find({}).fetch());
</script>


<div class="container">
  <header>
    <h1>Todo List</h1> 
  </header>

  <!-- Rendering task form element -->
  <TaskForm/>

  <ul>
    <!-- Using template language to render tasks -->
    {#each tasks as task (task._id)}
      <Task task={task}/>
    {/each}
  </ul>

</div>
