<script>
    import {pokemon} from "../stores/pokestore";
    console.log($pokemon);
</script>
<svelte:head>
    <title>Svelte Pokedex</title>
</svelte:head>
<h1>Svelte kit Pokedex</h1>

{#each $pokemon as pokeman}
<p>{pokeman.name}</p>
{/each}