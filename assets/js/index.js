const books = [
  {
    title: "The Most Human Human",
    author: "Christian, Brian",
    alreadyRead: true,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy",
  },
  {
    title: "Eloquent JavaScript",
    author: "Haverbeke, Marijn",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg",
  },
  {
    title: "Thinking with Type",
    author: "Lupton, Ellen",
    alreadyRead: true,
    img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg",
  },

  {
    title: "The Design of EveryDay Things",
    author: "Norman, Don",
    alreadyRead: false,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO",
  },
];



books.map((bookItem) => {
  console.log(bookItem.img);
  const img = bookItem.img;
  const title = bookItem.title;
  const author = bookItem.author;
  const read = bookItem.alreadyRead;
  book(img, title, "", author, read);
});

function book(src, title, text, authorName, read) {
  // Card Container
  const card = document.createElement("div");
  card.style.width = "18rem";
  card.classList.add("card");

  // 1. Child IMG
  const img = document.createElement("img");
  img.classList.add("card-img-top");
  img.src = src;

  // 2. Child Card Body
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // Grandchildren
  const h5 = document.createElement("h5");
  h5.classList.add("card-title");
  h5.innerText = title;
  const p = document.createElement("p");
  p.classList.add("card-text");
  p.innerText = text;
  const author = document.createElement("p");
  author.innerText = authorName;
  const a = document.createElement("a");
  a.classList.add("btn", "btn-secondary");
  if (read) {
    a.classList.remove("btn-secondary");
    a.classList.add("btn-success");
  }
  a.innerText = read ? "Read" : "To Read";

  cardBody.append(h5, p, author, a);
  card.append(img, cardBody);
  console.log(card);

  const bookList = document.querySelector(".book-list");
  bookList.append(card);

  // Styling
  const h1 = document.querySelector("h1");
  h1.style.fontSize = "4rem";

  card.style.marginTop = "30px";

  img.style.border = "4px solid black";
  img.style.height = "400px";

  cardBody.style.display = "flex";
  cardBody.style.alignItems = "left";
  cardBody.style.justifyContent = "center";
  cardBody.style.flexDirection = "column";

  h5.style.fontSize = "1.5rem";

  author.style.color = "grey";
  author.style.fontSize = "20px";
  author.style.marginBottom = "50px";

  a.style.borderRadius = "20px";
  a.style.fontStyle = "italic";
  a.style.width = "100px";
  a.style.height = "30px";
  a.style.marginLeft = "150px";
  a.style.fontSize = "1rem";
  a.style.display = "flex";
  a.style.alignItems = "center";
  a.style.justifyContent = "center";
}
