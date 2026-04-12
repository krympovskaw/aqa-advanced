export class Book {
    constructor(title, author, year) {
        
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
    return this._title;
    }
    set title(value) {
        if (typeof value !== 'string' || value.trim().length === 0) {
            throw new Error("Назва книги має бути непустим рядком");
        }
        this._title = value;
    }

    get author() {
    return this._author;
    }
    set author(value) {
        if (typeof value !== 'string' || value.trim().length === 0) {
            throw new Error("Автор має бути вказаний рядком");
        }
        this._author = value;
    }

    get year() {
    return this._year;
    }
    set year(value) {
        const currentYear = new Date().getFullYear();
        if (typeof value !== 'number' || value > currentYear || value < 0) {
            throw new Error("Рік видання вказано некоректно");
        }
        this._year = value;
    }

    printInfo() {
    console.log(`Книга: "${this.title}", Автор: ${this.author}, Рік: ${this.year}`);
    }

        static findOldestBook(booksArray) {
        if (!Array.isArray(booksArray) || booksArray.length === 0) return null;
        
        return booksArray.reduce((oldest, current) => {
        return current.year < oldest.year ? current : oldest;
        });
    }
}
