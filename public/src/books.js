function findAuthorById(authors, id) {
  return (resultAuthor = authors.find((author) => author.id == id));
}

function findBookById(books, id) {
  const resultBooks = books.find((book) => book.id === id);
  return resultBooks;
}

function partitionBooksByBorrowedStatus(books) {
  const booksBorrowed = books.filter(
    (book) => book.borrows[0].returned === false
  );
  const booksReturned = books.filter(
    (book) => book.borrows[0].returned === true
  );

  const result = [booksBorrowed, booksReturned];
  return result;
}

function getBorrowersForBook(book, accounts) {
  const borrowerIds = book.borrows;
  let accountObject = {};
  const borrowerInfo = [];

  borrowerIds.forEach((borrower) => {
    accounts.find((account) => {
      if (borrower.id === account.id) {
        accountObject = { ...borrower, ...account };
      }
    });
    borrowerInfo.push(accountObject);
  });

  return sortResult(borrowerInfo);
}

function sortResult(data) {
  let result = data
    .sort((itemA, itemB) => (itemA.count > itemB.count ? -1 : 1))
    .slice(0, 10);
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
  sortResult,
};
