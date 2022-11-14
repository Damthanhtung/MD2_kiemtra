import {Programmer} from "./Programmer";
import {JsProgrammer} from "./JsProgrammer";
import {JavaProgrammer} from "./JavaProgrammer";
import {PhpProgrammer} from "./PhpProgrammer";
export class TestProgrammer {
   listProgrammer: Programmer[] = [];

   add(programmer: Programmer): void {
      this.listProgrammer.push(programmer);
   }
    display(): void {
      for (const programmer of this.listProgrammer) {
         console.log(programmer);
      }
   }
}

