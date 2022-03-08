<script>
    import {createEventDispatcher} from 'svelte';
    import {tweened} from 'svelte/motion';
    import {cubicOut} from 'svelte/easing';
    import Icon from '@iconify/svelte';
    const dispatch = createEventDispatcher();

    export const scale = tweened(1, {
        duration: 200,
        easing: cubicOut
    });

    function trigger() {
        dispatch("click", {});
        let s = $scale == 1 ? 1.08 : 1;
        scale.set(s);
    }
</script>


<button on:click={trigger} style:scale={$scale} class=" bg-darkgray">
    <Icon icon="iconoir:menu-scale" color="white" width="35" rotate={2} />
</button>


<style>
    
    button {
        display: none;
    }
    @media only screen and (max-width: 600px) {
        button {
            display: grid;
            place-items: center;
            position: fixed;
            bottom: 7vh;
            right: 8vw;
            height: 4rem;
            width: 4rem;
            border: none;
            border-radius: 50%;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
            z-index: 10;
        }
        img {
            height: 2rem;
            width: 2rem;
            filter: invert(1);
        }
    }
</style>