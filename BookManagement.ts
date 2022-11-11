import {Library} from "./Library";
import {Book} from "./Book";
import {Magazine} from "./Magazine";
import {Newspaper} from "./Newspaper";
export class BookManagement {
    static listLibrary: Library[] = [];
    static add(library: Library) : void {
        BookManagement.listLibrary.push(library);
    }
    static display(): void{
        for (const library of BookManagement.listLibrary) {
            console.table(library);
        }
    }
    static deleteLibrary(document: number):void {
        for (let i=0; i<BookManagement.listLibrary.length; i++) {
            if (BookManagement.listLibrary[i]._documentCode=== document) {
                BookManagement.listLibrary.splice(i,1);
            }
        }
    }
    static editLibrary (document: number, libraryEdit: Library):void {
        for (let i=0; i<BookManagement.listLibrary.length; i++) {
            if (BookManagement.listLibrary[i]._documentCode === document) {
                BookManagement.listLibrary[i] = libraryEdit;
            }
        }
    }
    static searchLibrary (name: string): void {
       this.listLibrary.filter(library => library.name === name);
    }
}