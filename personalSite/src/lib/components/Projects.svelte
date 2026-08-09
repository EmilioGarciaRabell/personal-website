

<script>
    import { projects } from '$lib/resumeData/projects';
    import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<section id="projects" class="w-full bg-[#f8fafc] py-16">
    <div class="max-w-5xl mx-auto px-4">
        <h2 class="text-5xl text-center font-bold mb-8 text-gray-900">Projects</h2>

        <!-- 2-column grid forces narrower, taller cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {#each projects as project (project.id)}
                <ProjectCard {project} />
            {/each}
        </div>
    </div>
</section>