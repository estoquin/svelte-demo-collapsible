<script>
	import CollapsibleContent from './CollapsibleContent.svelte';
    import { slide } from 'svelte/transition';
	
	/**
   * @type {never[]}
   */
	 export let items = []
	 export let tittle = ''
	let isOpen = false;
</script>
  
<div class="collapsible">
    <div class="header d-flex justify-content-center p-1" on:click={() => isOpen = !isOpen}>
		<div class="header-content">
			<div class="header-tittle d-flex justify-content-center">
				{tittle} {isOpen ? '▼' : '▶'} 
			</div>
			<div class="header-subtitle d-flex justify-content-center">
				<p class="m-0">Subtitle</p>
			</div>
		</div>
    </div>
    {#if isOpen}
      	<div class="content d-flex justify-content-center" transition:slide>
			<CollapsibleContent items={items}/>
      	</div>
    {/if}
</div>
  
<style>
    .collapsible {
      	border: 1px solid #ccc;
      	overflow: hidden;
		margin: 0;
    }
    .header {
      	cursor: pointer;
    }
	.header-tittle {
		font-weight: bold;
	}

	.header:hover {
	  	background-color: rgb(255, 253, 107);
	}
    .content {
      	padding: 1rem;
		justify-content: center;
    }
</style>