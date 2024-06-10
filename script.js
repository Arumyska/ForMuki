document.getElementById('change-color').addEventListener('click', function() {
    const lines = document.querySelectorAll('.poem p');
    lines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = 1;
        }, index * 500); // 500ms delay for each line
    });
    this.style.display = 'none'; // Hide the button after revealing the poem
});
