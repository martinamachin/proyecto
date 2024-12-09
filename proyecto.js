const books = [
    {
      title: "Libro uno",
      image:
        "https://es.naufragia.com/wp-content/uploads/2021/04/71z7OGtw8wL-674x1024.jpg",
    },
    {
      title: "Libro dos",
      image:
        "https://es.naufragia.com/wp-content/uploads/2021/04/71z7OGtw8wL-674x1024.jpg",
    },
    {
      title: "Libro tres",
      image:
        "https://es.naufragia.com/wp-content/uploads/2021/04/71z7OGtw8wL-674x1024.jpg",
    },
    {
      title: "Libro cuatro",
      image:
        "https://es.naufragia.com/wp-content/uploads/2021/04/71z7OGtw8wL-674x1024.jpg",
    },
    {
      title: "Libro quinto",
      image:
        "https://es.naufragia.com/wp-content/uploads/2021/04/71z7OGtw8wL-674x1024.jpg",
    },
    {
      title: "Libro sexto",
      image:
        "https://es.naufragia.com/wp-content/uploads/2021/04/71z7OGtw8wL-674x1024.jpg",
    },
  ];
  
  const booksContainer = document.getElementById("books");
  
  const search = document.getElementById('search')
  let filterBooks = books
  search.addEventListener('input', (e) => {
    const inputValue = e.target.value
    const booksFiltered = books.filter((book) => book.title.toLowerCase().includes(inputValue.toLowerCase()))
    filterBooks = booksFiltered
    renderBooks()
  })
  
  const renderBooks = () => {
    booksContainer.innerHTML = ''
    filterBooks.forEach((book) => {
      const div = document.createElement('div')
      div.classList.add("item");
      const image = document.createElement('img')
      image.src = book.image
      image.classList.add('imagen')
      image.alt = book.title
      const p = document.createElement('p')
      p.textContent = book.title
    
      div.appendChild(image)
      div.appendChild(p)
    
      booksContainer.appendChild(div)
    })
  }
  
  document.addEventListener('DOMContentLoaded', renderBooks)