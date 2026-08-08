<script>
    let { item } = $props();
</script>

<div class="bg-white border-2 border-black rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
    <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        
        <!-- Left: Image / Logo Box -->
        <div class="w-32 h-32 sm:w-36 sm:h-36 bg-gray-100 rounded-lg border-2 border-black overflow-hidden shrink-0 flex items-center justify-center p-2">
            <img 
                src={item.image} 
                alt={item.organization} 
                class="w-full h-full object-contain"
            />
        </div>

        <!-- Right: Text Content -->
        <div class="flex-1 text-center sm:text-left">
            <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <h3 class="text-2xl font-bold text-gray-900">{item.role}</h3>
                {#if item.date}
                    <span class="text-xs font-mono text-gray-500">{item.date}</span>
                {/if}
            </div>

            <p class="text-lg font-medium text-gray-700 mb-3">{item.organization}</p>

            <p class="text-gray-700 leading-relaxed">
                {item.description}
            </p>
        </div>

    </div>
</div>