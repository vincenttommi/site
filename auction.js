document.addEventListener('DOMContentLoaded', function() {
    const auctionItems = [
        // Example data; replace with actual data from the server
        {
            photo: 'path/to/photo1.jpg',
            name: 'Item 1',
            description: 'Short description of item 1',
            category: 'Category 1',
            startingPrice: 100,
            whatsappMessage: 'I am interested in Item 1'
        },
        {
            photo: 'path/to/photo2.jpg',
            name: 'Item 2',
            description: 'Short description of item 2',
            category: 'Category 2',
            startingPrice: 200,
            whatsappMessage: 'I am interested in Item 2'
        }
    ];

    const auctionItemsContainer = document.getElementById('auctionItemsContainer');

    auctionItems.forEach(item => {
        const auctionItemDiv = document.createElement('div');
        auctionItemDiv.classList.add('auction-item');

        auctionItemDiv.innerHTML = `
            <img src="${item.photo}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <span>Starting Price: $${item.startingPrice}</span>
            <span>Category: ${item.category}</span>
            <button onclick="openWhatsApp('${item.whatsappMessage}')">Find More</button>
        `;

        auctionItemsContainer.appendChild(auctionItemDiv);
    });
});

function openWhatsApp(message) {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}
