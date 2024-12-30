/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) return true;
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) return true;
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  const isTriangle = a + b > c && a + c > b && b + c > a;
  const isOsceles = a === b || a === c || b === c;
  return isTriangle && isOsceles;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romanNumerals = {
    1: 'I',
    5: 'V',
    10: 'X',
  };

  const decimal = 10;

  let origin = num;
  let result = '';

  for (let i = 0; origin > 0; i += 1) {
    const digit = origin % decimal;
    const digitPlace = decimal ** i;
    let roman = '';

    switch (digit) {
      case 1:
      case 2:
      case 3: {
        for (let j = 0; j < digit; j += 1) {
          roman += romanNumerals[digitPlace];
        }
        break;
      }
      case 4:
        roman = romanNumerals[digitPlace] + romanNumerals[digitPlace * 5];
        break;
      case 5:
        roman = romanNumerals[digitPlace * 5];
        break;
      case 6:
      case 7:
      case 8: {
        roman = romanNumerals[digitPlace * 5];
        for (let j = 0; j < digit - 5; j += 1) {
          roman += romanNumerals[digitPlace];
        }
        break;
      }
      case 9:
        roman = romanNumerals[digitPlace] + romanNumerals[digitPlace * 10];
        break;
      default:
        break;
    }

    result = roman + result;
    origin = Math.floor(origin / decimal);
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const chars = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    '.': 'point',
    ',': 'point',
    '-': 'minus',
  };
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    const char = numberStr[i];
    switch (char) {
      default:
        result += chars[char];
        break;
    }
    if (i < numberStr.length - 1) {
      result += ' ';
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let origin = num;

  while (origin) {
    const remainder = origin % 10;
    if (remainder === digit) return true;
    origin = Math.floor(origin / 10);
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length < 3) return -1;

  const lastIndex = arr.length - 1;

  let leftSum = arr[0];
  let rightSum = arr[lastIndex];

  for (let i = lastIndex - 1; i > 1; i -= 1) {
    rightSum += arr[i];
  }

  for (let balancer = 1; balancer < lastIndex; balancer += 1) {
    if (leftSum === rightSum) return balancer;
    leftSum += arr[balancer];
    rightSum -= arr[balancer + 1];
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
  }

  let counter = 1;

  for (let loop = 0; counter <= size ** 2; loop += 1) {
    let i = loop;
    let j = loop;

    switch (size - 2 * loop) {
      case 1: {
        matrix[i][j] = counter;
        return matrix;
      }
      default: {
        const start = loop;
        const end = size - loop - 1;

        const directions = [
          { increment: [0, 1], condition: () => j < end },
          { increment: [1, 0], condition: () => i < end },
          { increment: [0, -1], condition: () => j > start },
          { increment: [-1, 0], condition: () => i > start },
        ];

        for (let index = 0; index < directions.length; index += 1) {
          const { increment, condition } = directions[index];
          const [iInc, jInc] = increment;
          while (condition()) {
            matrix[i][j] = counter;
            counter += 1;
            i += iInc;
            j += jInc;
          }
        }
      }
    }
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const maxIndex = matrix.length - 1;
  const mx = matrix;
  for (let i = 0; i < maxIndex / 2; i += 1) {
    for (let j = i; j < maxIndex - i; j += 1) {
      [
        mx[j][maxIndex - i],
        mx[maxIndex - i][maxIndex - j],
        mx[maxIndex - j][i],
        mx[i][j],
      ] = [
        mx[i][j],
        mx[j][maxIndex - i],
        mx[maxIndex - i][maxIndex - j],
        mx[maxIndex - j][i],
      ];
    }
  }

  return mx;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const array = arr;
  function quickSort(left, right) {
    if (left >= right) return;

    const pivot = array[right];
    let i = left;

    for (let j = left; j < right; j += 1) {
      if (array[j] < pivot) {
        [array[i], array[j]] = [array[j], array[i]];
        i += 1;
      }
    }

    [array[i], array[right]] = [array[right], array[i]];

    quickSort(left, i - 1);
    quickSort(i + 1, right);
  }

  quickSort(0, array.length - 1);
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const results = [str];

  for (let iteration = 0; iteration < iterations; iteration += 1) {
    let result = results[iteration];

    let left = '';
    let right = '';

    for (let index = 0; index < result.length; index += 1) {
      if (index % 2) {
        right += result[index];
      } else {
        left += result[index];
      }
    }

    result = left + right;

    if (result === str) {
      return results[iterations % (iteration + 1)];
    }

    results[iteration + 1] = result;
  }

  return results[results.length - 1];
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let origin = number;
  const queue = [];

  while (origin > 0) {
    let digit = origin % 10;
    origin = Math.floor(origin / 10);
    const index = queue.findIndex((d) => d > digit);

    if (index + 1) {
      [queue[index], digit] = [digit, queue[index]];
      return [digit, ...queue].reduce((acc, d) => acc * 10 + d, origin);
    }

    queue.push(digit);
  }

  return number;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
