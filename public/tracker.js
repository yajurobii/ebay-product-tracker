function trackProduct(event) {
    event.preventDefault();

    const productName = document.getElementById("productName").value;
    const searchTerm = document.getElementById("searchTerm").value;
    const category = document.getElementById("category").value;
    const targetPrice = document.getElementById("targetPrice").value;

    const product = {
        productName: productName,
        searchTerm: searchTerm,
        category: category,
        targetPrice: Number(targetPrice)
    };

    console.log(product);
}

const trackerForm = document.getElementById("trackerForm");

if (trackerForm) {
    trackerForm.addEventListener("submit", trackProduct);
}