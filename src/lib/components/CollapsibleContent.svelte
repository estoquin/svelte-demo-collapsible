<script>
    /**
   * @type {any[]} 
   * */
    export let items =[]
    const  addOrder = ()=> {
        alert('Adding order mock...')
    }
</script>
<div>
    {#each items as item}
        <div class="card">
            <div class="row">
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <p class="card-text ne-card-tittle">{item.description}</p>
                        <button 
                            class="btn ne-btn py-0 shadow-lg"
                            on:click={()=>{addOrder()}}>
                            Pedir +
                        </button>
                    </div>
                </div>
                <div class="col-md-4">
                    <img src={item.image} class="" alt={item.image_alt}>
                </div>
            </div>
        </div>
    {/each}
</div>

<style>
    .ne-btn{
        background-color: rgb(255, 136, 0);
        color: rgb(88, 47, 0);
        font-weight: bold;
    }
    .ne-card-tittle {
        min-width: 700px
    }
</style>