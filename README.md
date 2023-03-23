# book-list-app

### To make a book list using localStorage in React, you can follow these steps :-

1. Create a new React component called "Form".
```
import React from 'react'

export default function Form() {
  return (
    <div>
      
    </div>
  )
}
```

2. In the "render" method of the component, create a form that allows the user to input the details of a new book, including the title, author, and pages. Add an "ADD" button that triggers the "handleChange" function when clicked.
```
import React from 'react'

export default function Form() {

    // input field states
    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [page, setPage] = useState();
    
    return (
        <>
           <div className='main'>
                <div className='form-container'>
                    <form className='form-group'>
                        <label>Title</label>
                        <input type="text" className='form-control' required onChange={(e) => setTitle(e.target.value)} value={title} />
                        <br /><br />
                        <label>Author</label>
                        <input type="text" className='form-control' required onChange={(e) => setAuthor(e.target.value)} value={author} />
                        <br /><br />
                        <label>Pages</label>
                        <input type="number" className='form-control' required onChange={(e) => setPage(e.target.value)} value={page} />
                        <br /><br />
                        <button className='btn btn-success btn-md'>ADD</button>
                    </form>
                </div>
            </div> 
        </>
  )
}
```
   
3. Inside the component's state, create an array called "books" to store the list of books.
```
import React from 'react'

export default function Form() {

    // main array of objects state || books state || books array of objects
    const [books, setBooks] = useState(getDatafromLS());


    // input field states
    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [page, setPage] = useState();

    // form submit event
    const handleSubmit = (e) => {
        e.preventDefault();

        //creating a object 
        let book = {
            title,
            author,
            page,
        }
        setBooks([...books, book]);
        setTitle('');
        setAuthor('');
        setPage('');
    }
    
    
  return (
        <>
           <div className='main'>
                <div className='form-container'>
                    <form className='form-group' onSubmit={handleSubmit} >
                        <label>Title</label>
                        <input type="text" className='form-control' required onChange={(e) => setTitle(e.target.value)} value={title} />
                        <br /><br />
                        <label>Author</label>
                        <input type="text" className='form-control' required onChange={(e) => setAuthor(e.target.value)} value={author} />
                        <br /><br />
                        <label>Pages</label>
                        <input type="number" className='form-control' required onChange={(e) => setPage(e.target.value)} value={page} />
                        <br /><br />
                        <button className='btn btn-success btn-md'>ADD</button>
                    </form>
                </div>
            </div> 
        </>
  )
}
```

    
4. Create a function called "handleChange" that will be triggered when the user adds a new book to the list. This function should update the "books" array in the state with the new book, and also save the updated list to localStorage using the "localStorage.setItem()" method.
```
import React from 'react'

export default function Form() {

    // main array of objects state || books state || books array of objects
    const [books, setBooks] = useState(getDatafromLS());


    // input field states
    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [page, setPage] = useState();

    // form submit event
    const handleSubmit = (e) => {
        e.preventDefault();

        //creating a object 
        let book = {
            title,
            author,
            page,
        }
        setBooks([...books, book]);
        setTitle('');
        setAuthor('');
        setPage('');
    }

    // saving data to local storage
      useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books])
    
    
  return (
        <>
           <div className='main'>
                <div className='form-container'>
                    <form className='form-group' onSubmit={handleSubmit} >
                        <label>Title</label>
                        <input type="text" className='form-control' required onChange={(e) => setTitle(e.target.value)} value={title} />
                        <br /><br />
                        <label>Author</label>
                        <input type="text" className='form-control' required onChange={(e) => setAuthor(e.target.value)} value={author} />
                        <br /><br />
                        <label>Pages</label>
                        <input type="number" className='form-control' required onChange={(e) => setPage(e.target.value)} value={page} />
                        <br /><br />
                        <button className='btn btn-success btn-md'>ADD</button>
                    </form>
                </div>
            </div> 
        </>
  )
}
```

5. Create a function is "getDatafromLS". This function should check if there is an existing list of books in localStorage using the "localStorage.getItem()" method. If there is a list, it should update the "books" array in the state with the stored list.
```
import React from 'react'

//getting the values of local storage
const getDatafromLS = () => {
    const data = localStorage.getItem("books");
    if(data){
        return JSON.parse(data);
    }
    else {
        return [];
    }
}

export default function Form() {

    // main array of objects state || books state || books array of objects
    const [books, setBooks] = useState(getDatafromLS());


    // input field states
    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [page, setPage] = useState();

    // form submit event
    const handleSubmit = (e) => {
        e.preventDefault();

        //creating a object 
        let book = {
            title,
            author,
            page,
        }
        setBooks([...books, book]);
        setTitle('');
        setAuthor('');
        setPage('');
    }

    // saving data to local storage
      useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books])
    
    
  return (
        <>
           <div className='main'>
                <div className='form-container'>
                    <form className='form-group' onSubmit={handleSubmit} >
                        <label>Title</label>
                        <input type="text" className='form-control' required onChange={(e) => setTitle(e.target.value)} value={title} />
                        <br /><br />
                        <label>Author</label>
                        <input type="text" className='form-control' required onChange={(e) => setAuthor(e.target.value)} value={author} />
                        <br /><br />
                        <label>Pages</label>
                        <input type="number" className='form-control' required onChange={(e) => setPage(e.target.value)} value={page} />
                        <br /><br />
                        <button className='btn btn-success btn-md'>ADD</button>
                    </form>
                </div>
            </div> 
        </>
  )
}
```

6. Create a View Component. This component is show the all books list in local Storage.
 
```
import React from 'react'
import ViewTable from './ViewTable'

export default function View({books, deleteBook, setBooks}) {
  return (
    <div>
        {books.length > 0 && 
           <>
           <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>Pages</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <hr/>
                <tbody>
                  <ViewTable books={books} deleteBook={deleteBook}/>
                </tbody>
            </table>
           </div>
           <button className='btn btn-danger btn-md' onClick={() => setBooks([])}>Remove All</button>
          </>
        }
      {books.length < 1 && <h2>No books are added yet</h2>}
        
    </div>
  )
}
```

7. Create a ViewTable Component. This component is show the all books list in table form local Storage.

```
import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export default function ViewTable({books,deleteBook}) {
  return books.map(book => (
       <tr key={book.page}>
          <td>{book.page}</td>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td className='delete-btn' onClick={() => deleteBook(book.page)}>
            <Icon icon={trash}/>
          </td>
       </tr>
  ))
}
```
## OutPut :- 

1. Without adding books list :-

![image](https://user-images.githubusercontent.com/123729120/226930405-fec978c9-5b02-45e9-8117-2db74e536468.png)

2. Adding books list :- 

![image](https://user-images.githubusercontent.com/123729120/226935429-3970a9ed-cf97-4cd5-bf19-4896acbe86ec.png)


