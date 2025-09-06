window.onload = function() {
    const images = [
        './assets/el.png',
        './assets/gblmini.png'
    ];

    images.forEach((src, idx) => {
        if (idx === 1) {
            // Para gblmini.png, crear un botón con la imagen
            const button = document.createElement('button');
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Image ${idx + 1}`;
            img.style.maxWidth = '100px'; // Tamaño pequeño para el botón
            img.style.margin = '10px';
            button.appendChild(img);
            button.onclick = function() {
                window.open('https://gaborlogistics.com/', '_blank');
            };
            document.getElementById('img3').appendChild(button);
        } else {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Image ${idx + 1}`;
            img.style.margin = '10px';
            img.style.maxWidth = '1000px'; // Más grande para el.png
            document.getElementById(`img${idx + 1}`).appendChild(img);
        }
    });

    // Agregar activating.png abajo a la izquierda
    const activatingImg = document.createElement('img');
    activatingImg.src = './assets/activating.png';
    activatingImg.alt = 'Activating';
    activatingImg.style.maxWidth = '200px';
    activatingImg.style.margin = '10px';
    activatingImg.style.position = 'fixed';
    activatingImg.style.bottom = '30px';
    activatingImg.style.left = '30px';
    document.body.appendChild(activatingImg);
};