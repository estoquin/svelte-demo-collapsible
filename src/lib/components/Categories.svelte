<script>
    import { onMount } from 'svelte';
    import Collapsible from '$lib/components/Collapsible.svelte';


     /**
    * @type {any[]}
    */
    let data = []
     async function fetchData() {
         try {
             const res = await fetch('/api/mock');
             if (!res.ok) {
                 throw new Error('Failed to fetch data');
             } 
             data = await res.json();
             console.log('DATA: ', JSON.stringify(data));
        } catch (err) {
            console.error(err);
        }
    }

    onMount(fetchData);
</script>

<div>
    {#each data as item}
        <Collapsible tittle={item.tittle} items={item.items}/>
    {/each}
</div>