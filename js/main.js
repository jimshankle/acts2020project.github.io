// Main JavaScript file for Acts 2020 Project

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Scripture Reference System
    initializeScriptureReferences();
    
    // Initialize Timeline if on Acts 1 page
    if (document.getElementById('timeline-visualization')) {
        initializeTimeline();
    }
});

// Scripture Reference System
function initializeScriptureReferences() {
    document.querySelectorAll('.scripture-ref').forEach(reference => {
        // Add hover effects
        reference.addEventListener('mouseenter', () => {
            reference.style.color = 'white';
            reference.style.filter = 'drop-shadow(0px 0px 6px rgba(255,255,255,0.8))';
        });

        reference.addEventListener('mouseleave', () => {
            reference.style.color = '#fbd38d';
            reference.style.filter = 'none';
        });

        // Add click handler for Bible Gateway
        reference.addEventListener('click', () => {
            const text = reference.textContent.trim();
            window.open(`https://www.biblegateway.com/passage/?search=${text}&version=NKJV`, '_blank');
        });
    });
}

// Timeline Visualization
function initializeTimeline() {
    const timeline = document.getElementById('timeline-visualization');
    if (!timeline) return;

    // Timeline SVG dimensions
    const width = timeline.clientWidth;
    const height = 320; // Fixed height for timeline

    // Create SVG element
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", height);

    // Add background
    const background = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    background.setAttribute("width", "100%");
    background.setAttribute("height", "100%");
    background.setAttribute("fill", "#3B5B8F");
    svg.appendChild(background);

    // Add timeline line
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", "50");
    line.setAttribute("y1", "150");
    line.setAttribute("x2", width - 50);
    line.setAttribute("y2", "150");
    line.setAttribute("stroke", "white");
    line.setAttribute("stroke-width", "2");
    svg.appendChild(line);

    // Add to DOM
    timeline.appendChild(svg);

    // Add event markers
    addTimelineEvents(svg, width);
}

// Timeline Events
function addTimelineEvents(svg, width) {
    const events = [
        { day: 1, title: "Resurrection", reference: "Acts 1:3" },
        { day: 40, title: "Ascension", reference: "Acts 1:9" },
        { day: 49, title: "Pentecost", reference: "Acts 2:1" }
    ];

    events.forEach((event, index) => {
        const x = 50 + (index * ((width - 100) / (events.length - 1)));
        
        // Add event marker
        const marker = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        marker.setAttribute("cx", x);
        marker.setAttribute("cy", "150");
        marker.setAttribute("r", "6");
        marker.setAttribute("fill", "#fbd38d");
        svg.appendChild(marker);

        // Add event title
        const title = document.createElementNS("http://www.w3.org/2000/svg", "text");
        title.setAttribute("x", x);
        title.setAttribute("y", "130");
        title.setAttribute("text-anchor", "middle");
        title.setAttribute("fill", "white");
        title.setAttribute("font-family", "Arial");
        title.setAttribute("font-size", "14");
        title.textContent = event.title;
        svg.appendChild(title);

        // Add reference
        const reference = document.createElementNS("http://www.w3.org/2000/svg", "text");
        reference.setAttribute("x", x);
        reference.setAttribute("y", "180");
        reference.setAttribute("text-anchor", "middle");
        reference.setAttribute("fill", "#fbd38d");
        reference.setAttribute("font-family", "Arial");
        reference.setAttribute("font-size", "12");
        reference.textContent = event.reference;
        reference.classList.add('scripture-ref');
        svg.appendChild(reference);
    });
}
