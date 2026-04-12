import { Book } from './Book.js';

export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
       
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

   
    get fileFormat() {
        return this._fileFormat;
    }
    set fileFormat(value) {
        const validFormats = ['PDF', 'EPUB', 'MOBI', 'FB2'];
        if (typeof value !== 'string' || !validFormats.includes(value.toUpperCase())) {
            throw new Error(`Недопустимий формат. Дозволені: ${validFormats.join(', ')}`);
        }
        this._fileFormat = value.toUpperCase();
    }

    
    printInfo() {
        console.log(`Електронна книга: "${this.title}", Автор: ${this.author}, Рік: ${this.year}, Формат: ${this.fileFormat}`);
    }

    
    static fromBook(bookInstance, fileFormat) {
        if (!(bookInstance instanceof Book)) {
            throw new Error("Першим аргументом має бути екземпляр класу Book");
        }
        return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
    }
}
