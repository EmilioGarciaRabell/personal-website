<script>
    import profilePic from "$lib/images/profilePicture.jpg";
    import Icon from '@iconify/svelte';
    import { base } from '$app/paths';
</script>

<section id="welcome" class="w-full bg-[#f8fafc] min-h-[80vh] flex flex-col justify-center py-12">   
    <!-- Inner flex container wrapping both left (image/icons) and right (text) columns -->
    <div class="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        <!-- Left: Image & Social Links -->
        <div class="flex flex-col items-center gap-4 shrink-0">
            <img 
                alt="Emilio Garcia" 
                src={profilePic} 
                class="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-2 border-black" 
            />

            <!-- Social Links -->
            <div class="flex items-center justify-center gap-3">
                <a 
                    href="https://github.com/EmilioGarciaRabell" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="GitHub"
                    class="p-2 text-gray-700 hover:text-[#ff5722] hover:bg-gray-200/60 rounded-full transition-colors inline-flex focus:outline-none"
                >
                    <Icon icon="simple-icons:github" class="w-8 h-8" />
                </a>

                <a 
                    href="https://www.linkedin.com/in/emilio-gr/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="LinkedIn"
                    class="p-2 text-gray-700 hover:text-[#ff5722] hover:bg-gray-200/60 rounded-full transition-colors inline-flex focus:outline-none"
                >
                    <Icon icon="simple-icons:linkedin" class="w-8 h-8" />
                </a>

                <a 
                    href="mailto:eg5760@rit.edu" 
                    aria-label="Email"
                    class="p-2 text-gray-700 hover:text-[#ff5722] hover:bg-gray-200/60 rounded-full transition-colors inline-flex focus:outline-none"
                >
                    <Icon icon="lucide:mail" class="w-8 h-8" />
                </a>

                <a 
                    href="{base}/EmilioGarciaResume.pdf" 
                    download="EmilioGarciaResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Resume"
                    class="p-2 text-gray-700 hover:text-[#ff5722] hover:bg-gray-200/60 rounded-full transition-colors inline-flex focus:outline-none"
                >
                    <Icon icon="mdi:resume" class="w-8 h-8" />
                </a>
            </div>
        </div>

        <!-- Right: Text Content -->
        <div class="flex flex-col justify-center text-center md:text-left">
            <h1 style="font-size: clamp(2.5rem, 5vw, 4.5rem); line-height: 1.1;" class="font-bold mb-4 text-gray-900 text-center md:text-left">
                Welcome!
            </h1>
            <p class="text-lg text-gray-700 leading-relaxed mb-4">
                I am Emilio Garcia. Senior Computer Engineering Student at RIT, 
                with more than a year of internship experience at WHOOP, SharkNinja, 
                RIT DIRS Lab, and Novatec Group. I am interested in software development, embedded systems,
                hardware design, and robotics.
            </p>
            
            <p class="text-lg text-gray-700 leading-relaxed">
                I am currently seeking a 2027 full-time role in any of the disciplines mentioned above. 
                Please feel free to reach out to me via email or LinkedIn if you would like to connect!
            </p>
        </div>

    </div>
</section>