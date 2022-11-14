import {TestProgrammer} from "./TestProgrammer";
import {Programmer} from "./Programmer";
import {JavaProgrammer} from "./JavaProgrammer";
import {JsProgrammer} from "./JsProgrammer";
import {PhpProgrammer} from "./PhpProgrammer";
let jsProgrammer1 = new JsProgrammer (1, 1500);
let JavaProgrammer1 = new JavaProgrammer(2, 2000);
let PhpProgrammer1 = new PhpProgrammer(3, 1200);
let proList = new TestProgrammer();
proList.add(jsProgrammer1);
proList.add(JavaProgrammer1);
proList.add(PhpProgrammer1);
// let arr = proList.listProgrammer.map((element) => element.Salary)
// console.log(arr);
let arr1 = proList.listProgrammer.slice().sort((a, b) =>b.Salary-a.Salary);
console.log(arr1[0]);
// let maxSalary = Math.max.apply(Math,arr);
// console.log(maxSalary);
