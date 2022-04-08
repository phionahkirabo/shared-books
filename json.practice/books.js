// const books = require("./books.json");

// const book_arry= books.books

// book_arry.forEach((book)=>{
//     const title = document.getElementById('title')
//     title.insertAdjacentHTML('beforeend',`${book.title}`)
//     console.log(book.title)
// })
fetch("json.practice/books.json").then(response =>{
    return response.json();
}
)
.then((jsonData)=>{
    console.log(jsonData.books)

    const book_arry= jsonData.books

    book_arry.forEach(book => {
        const containercss = document.getElementById('containercss')
        // const snippet = book['desc']
        // const result = snippet.slice(2)
        // console.log(result)
        containercss.insertAdjacentHTML('beforeend',
        `<div class="cards" id="cards">
            <div class="image">
                <img src="${book.image}" style="height: 400px; width: 320px;">
            </div>
            <div class="title" >
                <h1 id="title"> ${book.title}</h1>

            </div>

            <div class="title" >
            <h1 id="title"> ${book.id}</h1>

        </div>
            
         <div class="des">
                
                <p>${book.desc}</p>
               
                <a
                                href="books/Boundaries_ When to Say Yes, How to Say No to Take Control of Your Life ( PDFDrive ).pdf">Read
                                more</a>
                            
                        </P>


            </div>

        </div>`
        )

        // title.innerHTML = `<div><p>${book.title}</p></div> <div><p>${book.email}</p></div> <div><p>${book.aothor}</p></div>`



        console.log(book.title) 
    });
})