<script lang="ts">
  import CategoryList from './components/CategoryList.svelte'
  import { samples }from './data/data.js'
</script>

<style>
	main {
		/* text-align: center; */
		padding: 0px;
		max-width: 1200px;
		margin: 0 auto;
	}

	h1 {
    text-align: center;
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
    margin: 10px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<h1>Sonic Pi-Board</h1>
  {#each Object.entries(samples) as [category, files]}
    <CategoryList  category={category} files={files}/>
  {/each}
</main>

