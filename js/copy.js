document.addEventListener('DOMContentLoaded', function() {
    const copyLink = document.querySelector('.copy-link');
    const tooltip = document.querySelector('.tooltip');

    if (copyLink && tooltip) {
        copyLink.addEventListener('click', async function(e) {
            e.preventDefault();
            const code = 'BESTIE4LIFE';
            
            try {
                await navigator.clipboard.writeText(code);
                
                // Update tooltip text and show it
                tooltip.textContent = `'${code}' Copied!`;
                tooltip.style.display = 'block';
                
                // Force a reflow to ensure the transition works
                tooltip.offsetHeight;
                
                tooltip.style.opacity = '1';
                tooltip.style.transform = 'translateX(-50%) translateY(4px)';
                
                // Hide tooltip after 2 seconds
                setTimeout(() => {
                    tooltip.style.opacity = '0';
                    tooltip.style.transform = 'translateX(-50%) translateY(8px)';
                    
                    // Hide completely after transition
                    setTimeout(() => {
                        tooltip.style.display = 'none';
                    }, 300);
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        });
    }
});
