<script lang="ts">
  export let files 


  function getName(sample) {
    return sample.split(".")[0];
  }

  function getCat(sample) {
    return sample.split("_")[0];
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
    justify-content: center;
  }
  li {
    margin-right: 10px;
  }
</style>

<section>
  <ul>
  {#each files as sample }
    <li>
      <h2>:{getName(sample)}</h2>
      <audio controls preload="none">
        <source src="samples/{sample}" type="audio/flac">
        Your browser does not support the audio element.
      </audio>
    </li>
  {/each}
  </ul>
</section>
