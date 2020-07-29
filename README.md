This here is an example app of how to use dynamic routing.

We render a list of books. In the route "/books"
And then when we choose a book we dynamically change the route and render the information accordinly. Showing the details of the chosen book (by making a seperate API call) and the route will now depict the previous route combined with the book id (from the database) "book/:bookId".