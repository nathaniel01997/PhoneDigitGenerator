import { Component } from '@angular/core';

interface LogicTestCombinations {
  letterCombinations: string[];
  combination: string;
}

@Component({
  selector: 'app-logic-test',
  templateUrl: './logic-test.component.html',
  styleUrl: './logic-test.component.css'
})


export class LogicTestComponent {
  private digitToLetters: {[key: string]: string[]} = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  };

  phoneNumber = '';
  combinations: string[] = [];

  addToInput(digit: string): void {
    this.phoneNumber += digit;
  }

  generateCombinations(): void {
    if(this.phoneNumber.includes('1')){
      console.log('No possible combinations for 1');
    }else{
      console.log('Generating combinations for', this.phoneNumber);
      this.combinations = this.letterCombinations(this.phoneNumber);
      console.log('Generated combinations:', this.combinations);
    }
  }

  letterCombinations(digits: string): string[] {
    if (digits.length === 0) {
      return [];
    }

    const combinations: string[] = [];

    const generateCombination = (currentIndex: number, currentString: string): void => {
      if (currentIndex === digits.length) {
        combinations.push(currentString.toUpperCase());
        return;
      }

      const currentDigit = digits[currentIndex];
      const letters = this.digitToLetters[currentDigit];
      if (letters) {
        for (const letter of letters) {
          generateCombination(currentIndex + 1, currentString + letter);
        }
      }
    };

    generateCombination(0, '');
    return combinations;
  }
}

// Example usage
const logicTest = new LogicTestComponent();
const phoneNumber = '23';
const combinations = logicTest.letterCombinations(phoneNumber);
//console.log(combinations);
