<script>
    let { job } = $props(); // Svelte 4 (If using Svelte 5, use: let { job } = $props();)
</script>

<div class="bg-white border-2 border-black p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
        <div>
            <h3 class="text-xl font-bold text-gray-900">{job.title}</h3>
            <p class="text-md font-semibold text-[#ff5722]">{job.company}</p>
        </div>
        <div class="text-left md:text-right mt-1 md:mt-0 text-sm text-gray-600">
            <p class="font-medium">{job.date}</p>
            <p>{job.location}</p>
        </div>
    </div>

    <ul class="list-disc list-inside mt-4 space-y-1 text-gray-700 leading-relaxed">
        {#each job.description as point}
            <li>{point}</li>
        {/each}
    </ul>
</div>