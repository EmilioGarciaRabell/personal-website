<script>
    import { experiences } from '$lib/resumeData/experience';
    import ExperienceCard from '$lib/components/ExperienceCard.svelte';
</script>

<section id="experience" class="w-full bg-[#f5f5f5] py-16">
    <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-5xl text-center font-bold mb-8 text-gray-900 ">Experience</h2>

        <div class="space-y-6">
            {#each experiences as job (job.id)}
                <ExperienceCard {job} />
            {/each}
        </div>
    </div>
</section>