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
