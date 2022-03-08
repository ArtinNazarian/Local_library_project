function findAccountById(accounts, id) {
  const accountID = accounts.find((search) => search.id == id);
  return accountID;
}

function sortAccountsByLastName(accounts) {
  const sorted = accounts.sort((lastNameOne, lastNameTwo) =>
    lastNameOne.name.last.toLowerCase() > lastNameTwo.name.last.toLowerCase()
      ? 1
      : -1
  );
  return sorted;
}

function getTotalNumberOfBorrows(account, books) {
  let counter = 0;
  const accountID = account.id;
  for (let i in books) {
    for (let j in books[i].borrows) {
      if (books[i].borrows[j].id == accountID) {
        counter++;
      }
    }
  }
  return counter;
}

function getBooksPossessedByAccount(account, books, authors) {
  let newBooksArray = [];

  for (book in books) {
    for (author in authors) {
      if (
        books[book].authorId === authors[author].id &&
        account.id === books[book].borrows[0].id
      ) {
        newBooksArray.push({ ...books[book], author: authors[author] });
      }
    }
  }
  return newBooksArray;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
