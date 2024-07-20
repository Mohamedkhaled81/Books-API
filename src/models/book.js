exports.Book = class Book {
  constructor(bookId, title, description, publisher, author, pages) {
    this.bookId = bookId;
    this.title = title;
    this.description = description;
    this.publisher = publisher;
    this.author = author;
    this.pages = pages;
  }
};
