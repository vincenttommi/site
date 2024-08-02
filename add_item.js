document.getElementById('auctionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const photo = document.getElementById('photo').files[0];
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const startingPrice = document.getElementById('startingPrice').value;

    
    console.log({
        photo,
        name,
        description,
        category,
        startingPrice
    });

    alert('Auction item added successfully!');
});
