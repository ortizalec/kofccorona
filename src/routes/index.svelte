<script context="module" lang="ts">
import type { Load } from "@sveltejs/kit";
        export const load: Load = async ({fetch}) => {
                const res = await fetch("/events.json");
                if (res.ok){
                        const events = await res.json();
                        return {
                                props: {
                                        events
                                }
                        }
                }
                const { message } = await res.json();
                return {
                        error: new Error(message)
                }
        }
</script>

<script>
        import EventCard from "$lib/components/eventCard.svelte";
        import buildImg from "../../static/build.jpg";
        export let events;
</script>

<svelte:head>
        <title>Knights Of Columbus, Corona</title>
</svelte:head>

<div class="flex flex-col gap-32 justify-center p-5 py-5 mx-auto w-full md:w-11/12 md:px-0">
        <section class="flex overflow-hidden flex-wrap rounded-xl">
                <div class="flex flex-col justify-center items-center w-full md:w-1/2 bg-darkgray h-[50vh] md:h-[80vh]">
                        <div class="flex flex-col p-5 md:p-0">
                                <h1 class="mb-4 text-4xl font-bold text-white">
                                        Knights of Columbus Corona 
                                </h1> 
                                <h2 class="mb-10 text-xl font-normal text-white">
                                        Upholding the principles of charity, unity, and faith.
                                </h2>
                                <button class="py-4 w-full text-2xl font-bold text-white rounded-lg bg-gold">
                                        Become a Knight
                                </button>                  
                        </div>

                </div>
                <div class="bg-cover h-[50vh] md:h-[80vh] w-full md:w-1/2">
                        <img src={buildImg} alt="building" class="h-full">
                </div>

        </section>
        
        <section class="flex justify-center w-full md:px-16">
                <div class="flex flex-wrap justify-between">
                        <div class="mb-5 w-full md:w-2/5 md:mb-0">
                                <h2 class="mb-4 text-2xl">Who we are</h2>
                                <h1 class="mb-8 text-4xl font-semibold">Building a bridge back to faith</h1>
                                <p class="font-sans text-xl">
                                        The Knights of Columbus is the world's largest Catholic 
                                        family fraternal service organization with 1.8 million members. 
                                        It provides members and their families with volunteer 
                                        opportunities in service to the Catholic Church, their 
                                        communities, families, and young people.
                                </p>
                        </div>
                        <div class="w-full md:w-2/5">
                                <img src="bridge.jpg" alt="" class="w-full h-full rounded-lg shadow">
                        </div>               
                </div>
        </section>
        
        <section class="flex">
                <div class="w-full bg-left rounded-lg">
                        <h1 class="mb-8 text-4xl font-semibold"> 
                                Impacting Corona
                        </h1>
                        <div>
                                <div class="flex overflow-scroll rounded-lg">
                                        {#each events as event}
                                                <EventCard /> 
                                        {/each}

                                </div>
                        </div>
                </div>
        </section>
</div>

<style>
</style>
