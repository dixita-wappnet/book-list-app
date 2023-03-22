import React, { useState, useEffect } from 'react'
import View from './View';

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
    

    // delete book from ls 
    const deleteBook = (page) => {
        const filteredBooks = books.filter((element,index) => {
            return element.page !== page
        })
        setBooks(filteredBooks);
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
                <div className='view-container'>
                     <View books={books} deleteBook={deleteBook} setBooks={setBooks}/>
                </div>
            </div>
        </>
    )
}








