<script>
    import profilePic from "$lib/images/profilePicture.jpeg";
    import Icon from '@iconify/svelte';
</script>

<section id="welcome" class="w-full bg-[#f8fafc] min-h-[80vh] flex flex-col justify-center py-12">   
    <div class="flex flex-col md:flex-row items-center gap-8 text-left max-w-4xl mx-auto px-4">
        
        <!-- Left: Profile Image -->
        <img 
            alt="Emilio Garcia" 
            src={profilePic} 
            class="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shrink-0 border-2 border-black"
        />
        
        <!-- Right: Text Content & Social Links -->
        <div class="flex flex-col justify-center">
                    <h1 class="text-4xl font-bold mb-3 text-gray-900">Welcome!</h1>
                    <p class="text-lg text-gray-700 leading-relaxed mb-4">
                        I am Emilio Garcia. Senior Computer Engineering Student at RIT, with engineering experience at WHOOP, SharkNinja, RIT DIRS Lab, and Novatec Group.
                    </p>

                    <!-- Social Links -->
                    <div class="flex items-center gap-2">
            <a href="https://github.com/EmilioGarciaRabell" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Icon icon="simple-icons:github" class="w-6 h-6 text-gray-700 hover:text-[#ff5722] transition-colors" />
            </a>

            <a href="https://www.linkedin.com/in/emilio-gr/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Icon icon="simple-icons:linkedin" class="w-6 h-6 text-gray-700 hover:text-[#ff5722] transition-colors" />
            </a>

            <a href="mailto:eg5760@rit.edu" aria-label="Email">
                <Icon icon="lucide:mail" class="w-6 h-6 text-gray-700 hover:text-[#ff5722] transition-colors" />
            </a>
        </div>
        </div>

    </div>
</section>