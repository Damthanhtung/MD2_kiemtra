import {BookManagement} from "./BookManagement";
import {Library} from "./Library";
import {Book} from "./Book";
import {Magazine} from "./Magazine";
import {Newspaper} from "./Newspaper";
let book1 = new Book(1,'Thanh Tùng',2, 'Tình yêu', 'Tùng Họa Mi', 'Số 1');
let magazine1 = new Magazine(2, 'Thu Hà', 3, 'Sự Nghiệp', 10, 10);
let newspaper1 = new Newspaper(3, 'Thanh Hải', 4 , 'Cuộc sống', 10-10-2022);
BookManagement.add(book1);
BookManagement.add(magazine1);
BookManagement.add(newspaper1);
BookManagement.display();
BookManagement.deleteLibrary(1);
console.log('---Sau khi xoa---');
BookManagement.display();
// let book2 = new Book(2,'Thanh Tùng 1',3, 'Tình yêu 1', 'Tùng Họa Mi 1', 'Số 2');
// BookManagement.editLibrary(1, book2);
// console.log('---Sau khi thay---')
// BookManagement.display();
console.log(('---Sau khi tim kiem---'))
BookManagement.searchLibrary('Tình Yêu');


