<script>
    let { job } = $props(); // Svelte 4 (If using Svelte 5, use: let { job } = $props();)
</script>

<div class="bg-white border-2 border-black p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
        <div>
            <h3 class="text-3xl font-bold text-gray-900">{job.title}</h3>
            <p class="text-xl  text-[#ff5722]">{job.company} - {job.location}</p>
        </div>
        <div class="inline-block bg-[#9aa6b2]/20 rounded-md px-2.5 py-1 text-xs font-mono text-gray-900 font-semibold mt-1 md:mt-0">
            <p>{job.date}</p>
        </div>
    </div>

    <ul class="list-disc list-inside mt-4 space-y-1 text-gray-700 leading-relaxed">
        {#each job.description as point}
            <li>{point}</li>
        {/each}
    </ul>
</div>