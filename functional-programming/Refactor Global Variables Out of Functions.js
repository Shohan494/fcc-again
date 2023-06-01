// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {
  let newArr = [...bookList];
  newArr.push(bookName);
  return newArr;
  
  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  let newArr = [...bookList];
  const book_index = newArr.indexOf(bookName);
  if (book_index >= 0) {

    newArr.splice(book_index, 1);
    return newArr;

    // Change code above this line
    }
}
