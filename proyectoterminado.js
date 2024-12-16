const books = [
    {
      title: "100 años de soledad",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cienan-osdesoledad-1524221027.jpg",
    },
    {
      title: "Puño del emperador",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/91Mio7IhlzS.jpg",
    },
    {
      title: "Stephen King-El..",
      image:
        "https://www.rockandpop.cl/wp-content/uploads/2020/09/1ec25a598fd06fc67ca488b398e8b46d-673x1024.jpg",
    },
    {
      title: "Stephen King-Stand",
      image:
        "https://images.cdn3.buscalibre.com/fit-in/360x360/7e/27/7e2768b60dbd338f4363b8abed08f243.jpg",
    },
    {
      title: "Pedro Páramo",
      image:
        "https://tendenciamx.com/wp-content/uploads/2020/11/81UdPvR8cwL-664x1024.jpg",
    },
    {
      title: "El Principito",
      image:
        "https://cdn.culturagenial.com/es/imagenes/el-principito-portada-cke.jpg",
    },
    {
      title: "Stephen King-It",
      image:
        "https://es.naufragia.com/wp-content/uploads/2021/04/71z7OGtw8wL-674x1024.jpg",
    },
    {
      title: "The sisters and..",
      image:
        "https://www.recreoviral.com/wp-content/uploads/2015/06/30-asombrosas-portadas-de-libros-28.jpg",
    },
    {
      title: "The curiosity",
      image:
        "https://www.recreoviral.com/wp-content/uploads/2015/06/30-asombrosas-portadas-de-libros-14.jpg",
    },
    {
      title: "Mobydick",
      image:
        "https://book-assets.openroadmedia.com/9781504041195.jpg",
    },
    {
      title: "Harry Potter",
      image:
        "https://baproar.vtexassets.com/arquivos/ids/544829/image-127151d7c9ad4742a68f3fa086e08a4f.jpg?v=638334256701100000",
    },
    {
      title: "El teorema Kath..",
      image:
        "https://static.cegal.es/imagenes/marcadas/9788415/978841559431.gif",
    },
    {
      title: "A dos metros de ti",
      image:
        "https://i.pinimg.com/236x/22/fd/25/22fd25dddb9acdf6a828ee27f184f250.jpg",
    },
    {
      title: "El día que se..",
      image:
        "https://lh3.googleusercontent.com/proxy/feUJ2vd1sEiV-UzlWsCbx8VsFdnBGkGJcbcxhDZ2p8xklBrQ9SE7hJPb2JbiFUdrSHFCC2bcSr1sZll3b9_VtId0q2vtAXgY0_7aSTXryBjscn6oBKuL_fr9zG1fZSGHpJt1MC2ylPKvhNwsqdKOiH-xTpWoyC-bh610We_o-hs=w1200-h630-p-k-no-nu",
    },
    {
      title: "El poder confiar",
      image:
        "https://www.planetadelibros.com/usuaris/libros/fotos/291/m_libros/portada_el-poder-de-confiar-en-ti_curro-canete_201902151307.jpg",
    },
    {
      title: "Stephen King-Inst..",
      image:
        "https://th.bing.com/th/id/OIP.5oRFEVCcgJc-JgRlggel2QHaLW?w=668&h=1024&rs=1&pid=ImgDetMain",
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