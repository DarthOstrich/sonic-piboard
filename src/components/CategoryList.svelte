<script>
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

<h1>{abbrev[category]}</h1>
{#each files as sample }
  <h2>:{sample.name}</h2>
<!--  <audio controls>
    <source src="samples/{sample.name}.flac" type="audio/flac">
    Your browser does not support the audio element.
  </audio>
-->
{/each}
