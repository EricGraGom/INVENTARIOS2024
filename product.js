const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

fetch('data.csv')
    .then(response => response.text())
    .then(data => {
        const rows = data.split('\n');
        const headers = rows[0].split(';');

        let productDetails = '';
        let productLocation = '';

        for (let i = 1; i < rows.length; i++) {
            const values = rows[i].split(';');
            if (values[0] === productId) {
                const productName = values[1];
                const productMarca = values[2];
                const productModelo = values[3];
                const productSerie = values[4];
                const productProcedencia = values[5];
                const productUbicacion = values[6];
                const productEstado = values[7];
                const productCodigo = values[8];

                productDetails += `<h2>${productName}</h2>`;
                productDetails += `<p><strong>Marca:</strong> ${productMarca}</p>`;
                productDetails += `<p><strong>Modelo:</strong> ${productModelo}</p>`;
                productDetails += `<p><strong>Serie:</strong> ${productSerie}</p>`;
                productDetails += `<p><strong>Procedencia:</strong> ${productProcedencia}</p>`;
                productDetails += `<p><strong>Ubicacion:</strong> ${productUbicacion}</p>`;
                productDetails += `<p><strong>Estado:</strong> ${productEstado}</p>`;
                productDetails += `<p><strong>Código:</strong> ${productCodigo}</p>`;
                
                break;
            }
        }

        // Añadir botón para ver todos los artículos en la misma ubicación
        

        document.getElementById('productDetails').innerHTML = productDetails;
    });

