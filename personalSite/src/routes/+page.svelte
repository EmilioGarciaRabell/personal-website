<script>
    import Experience from "$lib/components/Experience.svelte";
    import Leadership from "$lib/components/Leadership.svelte";
    import Projects from "$lib/components/Projects.svelte";
    import Welcome from "$lib/components/Welcome.svelte";

</script>

<svelte:head>
	<title>Emilio Garcia | Computer Engineer</title>
<meta
    name="description"
    content="Portfolio of Emilio Garcia, a Computer Engineering student focused on embedded systems, software, hardware design, and robotics."
/>
</svelte:head>

<section>
	<Welcome />
	<Experience />
	<Projects />
	<Leadership />
</section>
