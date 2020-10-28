<script lang="ts">
  import CategoryList from './components/CategoryList.svelte'
  import { samples }from './data/data.js'

  function filterSamples(e) {
    const filtered = {

    }
    
    for (let property in samples) {
      const filteredFiles = samples[property].filter((sample)=> sample.includes(searchTerm.toLowerCase()))
      console.log(filtered)
      filtered[property] = filteredFiles
    }
    /* const filtered = samples.filter((category) => category.includes(searchTerm)) */
    filteredSamples = Object.entries(filtered) 
  }


  $: filteredSamples = Object.entries(samples);
  $: searchTerm = ""


  const abbrev = {
    ambi: "Ambient",
    bass: "Bass",
    bd: "Bass Drums",
    drum: "Drums",
    elec: "Electric Sounds",
    glitch: "Glitchy sounds",
    guit: "Guitar",
    loop: "Loops",
    mehackit: "Mehackit Sounds",
    misc: "Miscellaneous",
    perc: "percussion",
    sn: "Snares",
    tabla: "Tabla",
    vinyl: "Vinyl"
  }
</script>

<style>
	main {
		/* text-align: center; */
		padding: 0px;
		max-width: 1200px;
		margin: 0 auto;
    font-size: 1.6rem;
	}

	h1 {
    text-align: center;
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 100;
    margin: 10px;
	}
  h2 {
    text-transform: uppercase;
    text-align: center;
    font-size: 3rem;
		font-weight: 200;
  }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
  .search {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  label {
    font-size: 18px;
    margin-right: 10px;
  }
  input {
    font-size: 16px;
    padding: 10px;
    margin: 0px;
  }
</style>

<main>
	<h1>Sonic Pi-Board</h1>
  <!-- <p><a href="https://sonic-pi.net/">Sonic Pi</a> is a code-based music creation and performance tool. There are 166 samples within the program itself. You can browse through all of them 
  easily below.</p> -->
  <section class="search">
    <label for="search">Search</label>
    <input name="search" type="text" placeholder="bass" bind:value={searchTerm} on:input="{(e) => filterSamples(e)}" />
  </section>
  {#each filteredSamples as [category, files] }
    {#if files.length > 0}
      <h2>{abbrev[category]}</h2>
      <CategoryList files={files} />
    {/if}
  {/each}
</main>

