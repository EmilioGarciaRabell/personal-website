<script lang="ts">
	// import Header from './Header.svelte';
	import Icon from '@iconify/svelte';

    const currentYear = new Date().getFullYear();
	import "../app.css";
	let { children } = $props();

	export const prerender = true;
</script>

<div class="app">
	<nav class="sticky top-0 z-50 bg-[#d9eafd]/90 backdrop-blur-md border-b-2 border-black">
		<div class="max-w-5xl mx-auto px-4 h-16 flex justify-between items-center">
	
			<a href="#welcome" class="text-2xl font-bold text-black hover:text-[#ff5722] transition-colors">
				Emilio Garcia
			</a>

			<!-- Nav Links -->
			<ul class="flex items-center gap-6">
				<li>
					<a href="#experience" class="text-black font-medium text-base hover:text-[#ff5722] transition-colors">
						Experience
					</a>
				</li>
				<li>
					<a href="#projects" class="text-black font-medium text-base hover:text-[#ff5722] transition-colors">
						Projects
					</a>
				</li>
				<li>
					<a href="#leadership" class="text-black font-medium text-base hover:text-[#ff5722] transition-colors">
						Leadership
					</a>
				</li>
				
			</ul>
		</div>
	</nav>

	<main>
		{@render children()}
	</main>

	<footer class="w-full bg-[#76abae] border-t-2 border-black py-8 text-black">
		<div class="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
			
			<!-- Left: Name & Copyright -->
			<div class="flex flex-col items-center md:items-start text-center md:text-left">
				<span class="text-xl font-bold">Emilio Garcia</span>
				<p class="text-sm font-medium text-gray-700">
					© {currentYear} • Computer Engineering @ RIT
				</p>
			</div>

			<!-- Center: Quick Nav Back to Top -->
			<a 
				href="#welcome" 
				class="inline-flex items-center gap-1 text-sm font-semibold hover:text-[#ff5722] transition-colors"
			>
				<span>Back to top</span>
				<Icon icon="lucide:arrow-up" class="w-4 h-4" />
			</a>

			<!-- Right: Social Links -->
			<div class="flex items-center gap-3">
				<a 
					href="https://github.com/EmilioGarciaRabell" 
					target="_blank" 
					rel="noopener noreferrer" 
					aria-label="GitHub"
					class="p-2 text-black hover:text-[#ff5722] transition-colors"
				>
					<Icon icon="simple-icons:github" class="w-5 h-5" />
				</a>

				<a 
					href="https://www.linkedin.com/in/emilio-gr/" 
					target="_blank" 
					rel="noopener noreferrer" 
					aria-label="LinkedIn"
					class="p-2 text-black hover:text-[#ff5722] transition-colors"
				>
					<Icon icon="simple-icons:linkedin" class="w-5 h-5" />
				</a>

				<a 
					href="mailto:eg5760@rit.edu" 
					aria-label="Email"
					class="p-2 text-black hover:text-[#ff5722] transition-colors"
				>
					<Icon icon="lucide:mail" class="w-5 h-5" />
				</a>
			</div>

		</div>
	</footer>

	
</div>
