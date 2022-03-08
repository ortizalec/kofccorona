<script lang="ts">
    import { tweened } from "svelte/motion";
    import { cubicOut } from "svelte/easing";
    import Fabbutton from "./fabbutton.svelte";
    import {routes} from "../../routes/routes";
 
    let z = -1;
    let scale: any;
 
    const opacity = tweened(0, {
        duration: 500,
        easing: cubicOut,
    }); 
 
    function setOpacity(percent) {
        opacity.set(percent);
        z = z == 9 ? -1 : 9;
    }
 </script>
 
 <Fabbutton on:click={() => {
     let percent = $opacity == 1 ? 0 : 1;
     setOpacity(percent);
 }}
    bind:scale={scale}/>
 
 <div class="overlay" 
 style:z-index={z}
 style:opacity={$opacity}>
     {#if $opacity >= .5}
         <ul class="items">
             {#each routes as route}
                <a 
                class=" font-light text-m font-sans"
                style="font-size: 2rem;"
                href="/{route.r}" on:click={() => {setOpacity(0); scale.set(1)}}> {route.n}</a>
             {/each}
         </ul>
     {/if}
 </div>
 
 <style>
     .overlay {
         position: fixed;
         height: 100vh;
         width: 100vw;
         background: var(--brand-gray);
         background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8673844537815126) 23%, white 100%);
     }
 
     .items {
         position: fixed;
         display: flex;
         flex-direction: column;
         justify-content: flex-end;
         right: 10vw;
         bottom: 20vh;
         list-style-type: none;
         gap: 1rem;
     }
 
     a {
        /*font-family: 'Playfair Display', serif;*/
         text-decoration: none;
         text-align: right;
         font-size: large;
     }
     
 </style>