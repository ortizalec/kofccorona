<script lang="ts">
	import '../app.css';
    import Icon from '@iconify/svelte';
	import {routes} from "./routes"
	import Fabmenu from '$lib/components/fabmenu.svelte';

</script>

<Fabmenu />
<!-- Header -->
<div class=" shadow-md backdrop-blur-sm flex items-center px-4 justify-center lg:sticky lg:top-0" style="height: 8vh;">
	<div class=" ml-10">
		<img src="https://nebula.wsimg.com/86d66f4678813362b9fa57636736313d?AccessKeyId=0C5EA33AD39F1008AC61&disposition=0&alloworigin=1" alt="KofC Corona" style="height: 5vh;">
	</div>
	<div class=" hidden lg:flex mr-4 ml-auto">
		<ul class="flex gap-8 text-lg font-serif xl:text-xl 2xl:text-3xl">
			{#each routes as route}
				<a  class="hover:underline text-md font-sans text-2xl font-light" href="/{route.r}">{route.n}</a>
			{/each}
		</ul>
	</div>
</div>
<main class=" min-h-screen">
	<slot />
</main>

<!-- Footer -->
<div class="flex flex-col py-8 px-4 shadow items-center h-60 md:h-full justify-start">
	<div class="flex flex-row w-full">
		<p class=" text-brand-gray text-lg tracking-wide mr-auto ml-4">
			© 2022 Corona Council - All Rights Reserved.
		</p>
		<ul class="flex gap-2 mr-4 items-center">
			<a href=""><Icon icon="et:facebook" width="32" /></a>
			<a href=""><Icon icon="ph:instagram-logo-thin" width="40" /></a>
		</ul>
	</div>
</div>

<style>
	:global(:root){
        /* Brand colors */
    }

	.play {
		font-family: sans-serif;
	}
</style>
