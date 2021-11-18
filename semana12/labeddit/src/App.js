import React from "react"
import FeedPage from "./pages/FeedPage/FeedPage"
import LoginPage from "./pages/LoginPage/loginPage"
import PostPage from "./pages/PostPage/PostPage"
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage"

const App = () => {
  return (
    <div>
      <FeedPage/>
      <LoginPage/>
      <PostPage/>
      <RegistrationPage/>
    </div>
  )
}

export default App
