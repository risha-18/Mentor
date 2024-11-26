const books = {
    "Fiction": [
        "The Great Gatsby by F. Scott Fitzgerald",
        "To Kill a Mockingbird by Harper Lee",
        "1984 by George Orwell",
        "Pride and Prejudice by Jane Austen",
        "The Catcher in the Rye by J.D. Salinger"
    ],
    "Non-Fiction": [
        "Sapiens: A Brief History of Humankind by Yuval Noah Harari",
        "Educated by Tara Westover",
        "Becoming by Michelle Obama",
        "The Immortal Life of Henrietta Lacks by Rebecca Skloot",
        "The Wright Brothers by David McCullough"
    ],
    "Novels": [
        "The Alchemist by Paulo Coelho",
        "The Kite Runner by Khaled Hosseini",
        "Life of Pi by Yann Martel",
        "The Book Thief by Markus Zusak",
        "The Road by Cormac McCarthy"
    ],
    "Kids Education": [
        "The Very Hungry Caterpillar by Eric Carle",
        "Charlotte's Web by E.B. White",
        "Matilda by Roald Dahl",
        "Harry Potter and the Sorcerer's Stone by J.K. Rowling",
        "Where the Wild Things Are by Maurice Sendak"
    ],
    "Science": [
        "A Brief History of Time by Stephen Hawking",
        "The Selfish Gene by Richard Dawkins",
        "The Gene: An Intimate History by Siddhartha Mukherjee",
        "Cosmos by Carl Sagan",
        "The Body: A Guide for Occupants by Bill Bryson"
    ],
    "Technology": [
        "The Innovators by Walter Isaacson",
        "How We Got to Now by Steven Johnson",
        "The Second Machine Age by Erik Brynjolfsson and Andrew McAfee",
        "The Code Book by Simon Singh",
        "Clean Code by Robert C. Martin"
    ],
    "Magazines": [
        "National Geographic",
        "TIME",
        "The New Yorker",
        "Scientific American",
        "Wired"
    ]
};

document.getElementById('regForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const age = parseInt(document.getElementById('age').value);
    if (age < 10 || age > 80) {
        alert("Age must be between 10 and 80.");
        return;
    }
    document.getElementById('registration').style.display = 'none';
    document.getElementById('login').style.display = 'block';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedCategories = Array.from(document.getElementById('categories').selectedOptions).map(option => option.value);
    displayBooks(selectedCategories);
});

function displayBooks(categories) {
    document.getElementById('login').style.display = 'none';
    document.getElementById('bookDisplay').style.display = 'block';
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    categories.forEach(category => {
        books[category].forEach(book => {
            const col = document.createElement('div');
            col.className = 'col-md-4';
            col.innerHTML = `<div class="card mb-4">
                                <div class="card-body">
                                    <h5 class="card-title">${book}</h5>
                                    <img src="path/to/book-cover.jpg" class="card-img-top" alt="${book}">
                                </div>
                            </div>`;
            bookList.appendChild(col);
        });
    });
}