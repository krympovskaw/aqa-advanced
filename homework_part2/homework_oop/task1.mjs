import { Book } from './Book.js';
import { EBook } from './EBook.js';

const book1 = new Book("Kobzar", "Taras Shevchenko", 1840);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("The Witcher", "Andrzej Sapkowski", 1990);

console.log("--- Звичайні книги ---");
book1.printInfo();
book2.printInfo();
book3.printInfo();


const ebook1 = new EBook("Clean Code", "Robert Martin", 2008, "PDF");

console.log("\n--- Електрона книга ---");
ebook1.printInfo();


console.log("\n--- Зміна через сетер ---");
book1.title = "New Kobzar Edition"; 
console.log(`Оновлена назва: ${book1.title}`);


const allBooks = [book1, book2, book3, ebook1];
const oldest = Book.findOldestBook(allBooks);

console.log("\n--- Найдавніша книга в списку ---");
if (oldest) oldest.printInfo();


const ebookFromPaper = EBook.fromBook(book2, "EPUB");

console.log("\n--- Створення EBook зі звичайної книги ---");
ebookFromPaper.printInfo();

