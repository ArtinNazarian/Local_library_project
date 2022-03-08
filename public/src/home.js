function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const result = books.reduce((count, book) => {
    const booksOut = book.borrows.filter(
      (borrow) => borrow.returned === false
    ).length;
    return count + booksOut;
  }, 0);
  return result;
}

function getMostCommonGenres(books) {
  const bookGenres = {};
  books.forEach((book) => {
    if (bookGenres[book.genre] == null) bookGenres[book.genre] = 1;
    else bookGenres[book.genre]++;
  });

  const result = Object.keys(bookGenres).map((items) => {
    return { name: items, count: bookGenres[items] };
  });
  return sortItems(result).slice(0, 5);
}

//sort books object based on count from largest to smallest
function sortItems(data) {
  const result = data.sort((itemA, itemB) =>
    itemA.count > itemB.count ? -1 : 1
  );
  return result;
}

function getMostPopularBooks(books) {
  const popularBooks = books.map((book) => ({
    name: book.title,
    count: book.borrows.length,
  }));
  return sortItems(popularBooks).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  const resultAuthors = [];
  let authorObject = {};

  authors.forEach((author) => {
    authorObject = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0,
    };
    books.forEach((book) => {
      if (author.id === book.authorId)
        authorObject.count += book.borrows.length;
    });
    resultAuthors.push(authorObject);
  });
  return sortItems(resultAuthors).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
  sortItems,
};
