<script>
    import {pokemon} from "../stores/pokestore";
    import PokemanCard from "../components/pokemanCard.svelte";

    let searchTerm = "";
    let filteredPokemon = [];

    $:{
        if (searchTerm){
            filteredPokemon = $pokemon.filter(pokeman => pokeman.name.includes(searchTerm));
        }else{
            filteredPokemon = [...$pokemon];
        }
    }
</script>
<svelte:head>
    <title>Svelte Pokedex</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">Svelte kit Pokedex</h1>

<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" type="text" bind:value={searchTerm} placeholder="Search Pokemon">

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each filteredPokemon as pokeman}
    <PokemanCard pokeman={pokeman}/>
    {/each}
</div>