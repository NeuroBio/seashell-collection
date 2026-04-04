// AI slop, but it works
function initMagnifier(img) {
    if (img.parentElement.querySelector('.magnifier-glass')) {
		return;
	}

    const zoom = 3;
    const glass = document.createElement('DIV');
    glass.setAttribute('class', 'magnifier-glass');
    
    // Ensure the container is ready for absolute positioning
    img.parentElement.style.position = 'relative';
    img.parentElement.insertBefore(glass, img);

    // Set the background using the newly loaded src
    glass.style.backgroundImage = `url('${img.src}')`;
    glass.style.backgroundSize = `${img.width * zoom}px ${img.height * zoom}px`;

    img.addEventListener('mousemove', (e) => {
        const rect = img.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        // Show glass
        glass.style.display = 'block';

        // Calculate positions
        const w = glass.offsetWidth / 2;
        const h = glass.offsetHeight / 2;

        glass.style.left = `${x - w}px`;
        glass.style.top = `${y - h}px`;
        glass.style.backgroundPosition = `-${(x * zoom) - w}px -${(y * zoom) - h}px`;
    });

    img.addEventListener('mouseleave', () => {
        glass.style.display = 'none';
    });
}