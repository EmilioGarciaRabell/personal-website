<script>
    let { project } = $props();
</script>

<div class="bg-white border-2 border-black rounded-xl p-5 flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-shadow">
    <div>
        <!-- Top Image Container -->
        <div class="w-full h-48 bg-gray-100 rounded-lg border-2 border-black overflow-hidden mb-4">
            <img 
                src={project.image} 
                alt={project.title} 
                class="w-full h-full object-cover"
            />
        </div>

        <!-- Title & Date Row -->
        <div class="flex justify-between items-baseline gap-2 mb-3">
            <h3 class="text-xl font-bold text-gray-900">{project.title}</h3>
            <span class="text-xs font-mono text-gray-500 shrink-0">{project.date}</span>
        </div>

        <!-- Description Paragraph -->
        <p class="text-sm text-gray-700 leading-relaxed mb-6">
            {project.description}
        </p>
    </div>

    <!-- Skill / Tag Pills (Aligned at bottom) -->
    <div class="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
        {#each project.tags as tag}
            <span class="px-3 py-1 bg-[#8fa89b]/30 text-gray-800 text-xs font-semibold border border-black rounded-md">
                {tag}
            </span>
        {/each}
    </div>
</div>