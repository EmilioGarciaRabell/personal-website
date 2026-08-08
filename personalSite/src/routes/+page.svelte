<script>
    import Experience from "$lib/components/Experience.svelte";
    import Leadership from "$lib/components/Leadership.svelte";
    import Projects from "$lib/components/Projects.svelte";
    import Welcome from "$lib/components/Welcome.svelte";

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Welcome />
	<Experience />
	<Projects />
	<Leadership />
</section>
