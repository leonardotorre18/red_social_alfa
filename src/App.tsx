import './App.css'
import Navbar from './components/Navbar'
import Post from './components/Post'

function App() {
  return (
    <>
      <Navbar />

      <div className='flex flex-col gap-8 mx-auto max-w-4xl'>

        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />

      </div>
    </>
  )
}

export default App
