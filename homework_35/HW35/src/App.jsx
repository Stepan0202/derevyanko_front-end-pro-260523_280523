/*Створити просту телефонну книгу.

Реалізувати перемикання між сторінками за допомогою react-router
Додати сторінку редагування запису
Додати підтвердження видалення запису (у вигляді модального вікна)


*/

import { useState} from 'react'
import './components/sass/app.scss'
import Root from './routes/root'
import UsersTable from './components/jsx/UsersTable'
import AddUser from './components/jsx/AddUser'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [currentPage, setCurrentPage] = useState("usersTable");
  const[users, setUsers] = useState([]);
  console.log(users)
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <Root />,
      children: [
        {
          path: "/",
          element: <UsersTable users={users} setUsers={setUsers}/>
        },
        {
          path: "/addingUser",
          element: <AddUser setPage={goTo} users={users} setUsers={setUsers}></AddUser>,
        }
      ]
    }
  ]);
  function goTo(e){
    setCurrentPage(e.target.dataset['goto']);
  }
  return (
    <>
      <RouterProvider router={router}/>
      {/* {currentPage == "usersTable" && <UsersTable users={users} setUsers={setUsers}/>}
      {currentPage == "addUser" && <AddUser setPage={goTo} users={users} setUsers={setUsers}></AddUser>} */}
    </>
  )
}

export default App;
