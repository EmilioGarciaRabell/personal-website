<script lang="ts">
	// import Header from './Header.svelte';

	import "../app.css";
	let { children } = $props();
</script>

<div class="app">
	<nav class="bg-[#d9eafd] text-white p-3 flex justify-between items-center border-b-2 border-black">
		<h1 class="text-2xl text-black font-bold mb-4">Emilio Garcia</h1>
		<ul>
			
			<li class="flex space-x-6">
				
				<a href="https://svelte.dev/docs/kit" class="text-black text-lg transition-colors hover:text-[#ff5722]">Experience</a>
				<a href="https://svelte.dev/docs/kit" class="text-black text-lg transition-colors hover:text-[#ff5722]">Projects</a>
				<a href="https://svelte.dev/docs/kit" class="text-black text-lg transition-colors hover:text-[#ff5722]">Leadership</a>
				<a href="https://svelte.dev/docs/kit" class="text-black text-lg transition-colors hover:text-[#ff5722]">Skills</a>
				
			</li>
		</ul>
	</nav>

	<main>
		{@render children()}
	</main>

	<footer>

	</footer>

	<style>
		h1 {
			font-size: 2rem;
			margin-bottom: 1rem;

		}

	</style>
</div>
