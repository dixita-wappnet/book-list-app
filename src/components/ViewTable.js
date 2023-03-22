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
