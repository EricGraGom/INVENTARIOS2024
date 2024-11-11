const inventoryContainer = document.getElementById('inventory');
const urlParams = new URLSearchParams(window.location.search);
const locationFilter = urlParams.get('location');

fetch('data.csv')
    .then(response => response.text())
    .then(data => {
        const rows = data.split('\n');
        const headers = rows[0].split(',');

        let table = '<table><tr>';
        headers.forEach(header => {
            table += `<th>${header}</th>`;
        });
        table += '</tr>';

        for (let i = 1; i < rows.length; i++) {
            const values = rows[i].split(',');

            // Filtrar por ubicación si locationFilter está presente
            if (locationFilter && values[4] !== locationFilter) {
                continue;
            }

            table += '<tr>';
            values.forEach(value => {
                table += `<td>${value}</td>`;
            });
            table += `<td><a href="product.html?id=${values[0]}">Detalles</a></td>`;
            table += '</tr>';
        }
        table += '</table>';
        inventoryContainer.innerHTML = table;
    });
