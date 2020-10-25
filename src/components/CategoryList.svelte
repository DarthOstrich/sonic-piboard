<script lang="ts">
  export let category
  export let files 

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
  section { margin-bottom: 40px; }
  h1 {
    margin-bottom: 0px;
  }
  ul {
    margin: 0px;
    padding: 0px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }
  li {
    margin-right: 10px;
  }
</style>

<section>
  <h1>{abbrev[category]}</h1>
  <ul>
  {#each files as sample }
    <li>
      <h2>:{sample.name}</h2>
      <audio controls preload="none">
        <source src="samples/{sample.name}.flac" type="audio/flac">
        Your browser does not support the audio element.
      </audio>
    </li>
  {/each}
  </ul>
</section>
