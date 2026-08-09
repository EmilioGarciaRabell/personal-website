const allImages = import.meta.glob('$lib/images/projects/**/*.{png,jpg,jpeg,webp,svg}', {
    eager: true,
    import: 'default'
});

/**
 * @param {string} folderName
 * @returns {string[]}
 */
function getProjectImages(folderName) {
    return Object.entries(allImages)
        .filter(([path]) => path.includes(`/projects/${folderName}/`))
        .map(([_, url]) => /** @type {string} */ (url));
}

export const projects = [
    {
        id: 'openctf',
        title: 'OpenCTF Platform',
        date: 'May 2026',
        description: 'An open-source STEM education platform engineered with modern REST API architecture for capture-the-flag learning modules and real-time user scoring.',
        image: getProjectImages('openCtf')[0],
        images: getProjectImages('openCtf'),
        tags: ['FastAPI', 'Svelte', 'Docker', 'REST API'],
        link: 'https://github.com/0penCTF'
    },
    {
        id: 'spider-robot',
        title: 'SPIDER Quadruped',
        date: 'July 2026',
        description: 'Spatial Perception & Interactive Dynamic Exploration Robot designed for custom multi-sensor integration, digital control logic, and terrain traversal.',
        image: getProjectImages('spider'),
        tags: ['C++', 'Embedded Systems', 'ROS2', 'Hardware'],
        link: 'https://github.com/EmilioGarciaRabell/SHPE_Smart_Mirror'
    },
     {
        id: 'sleeper',
        title: 'Sleeper',
        date: 'August 2026',
        description: 'Designed and developed a journaling device using an ESP32 microcontroller, and a microphone to record audio and send to a transcribing server to ultimately display it in a comprehensive UI.',
        image: getProjectImages('sleeper')[0],
        images: getProjectImages('sleeper'),
        tags: ['Python', 'Docker', 'C++', 'ESP32', 'Svelte', 'Onshape', '3D Printing'],
        link: 'https://github.com/EmilioGarciaRabell/sleeper'
    },
    {
        id: 'informate.pe',
        title: 'Informate.pe',
        date: 'December 2026',
        description: 'Created an informational hub for the 2026 peruvian elections, automated the creation of 30+ candidate profiles including their political history, background summary, and social media sentiment analysis. Utilized LLMs to summarize and standardize the information across all candidates.',
        image: getProjectImages('informate')[0],
        images: getProjectImages('informate'),
        tags: ['Python', 'Flask', 'LLMs', 'React', 'Web Scraping', 'Data Analysis', 'PostgreSQL'],
        link: 'https://github.com/EmilioGarciaRabell/Candidate-Tracker-Peru.git'
    },
    {
        id: 'smartMirror',
        title: 'SHPE Smart Mirror',
        date: 'May 2025',
        description: 'Lead a team of 14 students to design and develop a smart mirror software from scratch, implemented in a raspberry Pi, including facial recognition and a touchscreen interface.',
        image: getProjectImages('mirror')[0],
        images: getProjectImages('mirror'),
        tags: ['Python', 'Flask', 'Raspberry Pi', 'Design'],
        link: 'https://github.com/EmilioGarciaRabell/SHPE_Smart_Mirror'
    },
    {
        id: 'nxp-cup',
        title: 'NXP Autonomous Car',
        date: 'April 2026',
        description: 'Autonomous racing platform utilizing line-scan camera sensors and low-level microcontroller feedback loops to achieve high-speed navigation.',
        image: getProjectImages('car')[0],
        images: getProjectImages('car'),
        tags: ['C', 'Microcontroller', 'Sensors', 'Control Systems'],
        link:'https://github.com/EmilioGarciaRabell/CMPE-460'
    },
    {
        id: 'mips',
        title: 'MIPS CPU Design',
        date: 'April 2024',
        description: 'Design, integration, and FPGA implementation of a 5-stage pipelined MIPS processor built in VHDL and successfully verified on a Basys3 board executing converted MIPS assembly code.',
        image: getProjectImages('mips')[0],
        images: getProjectImages('mips'),
        tags: ['VHDL', 'FPGA', 'Computer Architecture'],
        link: 'https://github.com/EmilioGarciaRabell/5_stage_pipelined_MIPS'
    }   

];