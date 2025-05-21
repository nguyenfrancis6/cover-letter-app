import './App.css'
import JobForm from './components/JobForm'
import AboutSection from './components/AboutSection'
import Navbar from './components/Navbar'
import Intro from './components/Intro'

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <JobForm />
      <AboutSection />
    </div>
  )
}
export default App
