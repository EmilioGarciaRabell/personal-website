<script>
    import Icon from '@iconify/svelte';

    let { project } = $props();

    let dialogRef = $state();
    let currentIndex = $state(0);

    let images = $derived(project.images?.length ? project.images : [project.image]);

    function openModal() {
        currentIndex = 0;
        dialogRef?.showModal();
    }

    function closeModal() {
        dialogRef?.close();
    }
</script>

<div class="bg-white border-2 border-black rounded-xl p-5 flex flex-col justify-between h-full shadow-sm">
    <div>
        <!-- Semantic Button image trigger (eliminates a11y warnings) -->
        <button 
            type="button" 
            onclick={openModal} 
            class="w-full h-48 bg-gray-100 rounded-lg border-2 border-black overflow-hidden mb-4 block group cursor-pointer"
        >
            <img 
                src={project.image} 
                alt={project.title} 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
        </button>

        <!-- Title, Link & Date -->
        <div class="flex justify-between items-start gap-2 mb-3">
            <div class="flex items-center gap-2">
                <h3 class="text-xl font-bold text-gray-900">{project.title}</h3>
                {#if project.link}
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        class="text-gray-700 hover:text-[#ff5722] transition-colors"
                        aria-label="Visit project site"
                    >
                        <Icon icon="lucide:external-link" class="w-5 h-5" />
                    </a>
                {/if}
            </div>
            <span class="text-xs font-mono text-gray-500 shrink-0 mt-1">{project.date}</span>
        </div>

        <p class="text-sm text-gray-700 leading-relaxed mb-6">
            {project.description}
        </p>
    </div>

    <!-- Tags -->
    <div class="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
        {#each project.tags as tag}
            <span class="px-3 py-1 bg-[#76abae]/30 text-gray-800 text-xs font-semibold border border-black rounded-md">
                {tag}
            </span>
        {/each}
    </div>
</div>

<!-- Native HTML Dialog Modal -->
<dialog 
    bind:this={dialogRef} 
    onclick={(e) => e.target === dialogRef && closeModal()}
    class="p-0 bg-transparent backdrop:bg-black/70 rounded-xl border-none max-w-3xl w-11/12 m-auto"
>
    <div class="bg-white border-2 border-black rounded-xl p-4 flex flex-col gap-3">
        <!-- Modal Header -->
        <div class="flex justify-between items-center border-b pb-2">
            <h4 class="font-bold text-lg text-gray-900">{project.title}</h4>
            <button type="button" onclick={closeModal} class="p-1 hover:bg-gray-100 rounded-md">
                <Icon icon="lucide:x" class="w-6 h-6" />
            </button>
        </div>

        <!-- Main Image Box -->
        <div class="relative bg-black rounded-lg overflow-hidden flex items-center justify-center min-h-[250px] md:min-h-[380px]">
            <img src={images[currentIndex]} alt={project.title} class="max-h-[65vh] w-auto max-w-full object-contain" />

            {#if images.length > 1}
                <button 
                    type="button" 
                    onclick={() => currentIndex = (currentIndex - 1 + images.length) % images.length} 
                    class="absolute left-2 p-1.5 bg-white/90 hover:bg-white rounded-full border border-black"
                >
                    <Icon icon="lucide:chevron-left" class="w-5 h-5" />
                </button>
                <button 
                    type="button" 
                    onclick={() => currentIndex = (currentIndex + 1) % images.length} 
                    class="absolute right-2 p-1.5 bg-white/90 hover:bg-white rounded-full border border-black"
                >
                    <Icon icon="lucide:chevron-right" class="w-5 h-5" />
                </button>
            {/if}
        </div>

        <!-- Thumbnail Row (Only renders if > 1 image) -->
        {#if images.length > 1}
            <div class="flex justify-center gap-2 pt-1">
                {#each images as img, i}
                    <button 
                        type="button" 
                        onclick={() => currentIndex = i}
                        class="w-12 h-12 rounded border-2 overflow-hidden {i === currentIndex ? 'border-[#ff5722]' : 'border-black/30'}"
                    >
                        <img src={img} alt="" class="w-full h-full object-cover" />
                    </button>
                {/each}
            </div>
        {/if}
    </div>
</dialog>