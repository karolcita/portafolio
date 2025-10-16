import { Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navigation from './components/Navigation';
import About from './sections/About';
import Projects from './sections/Projects';
import Resume from './sections/Resume';


const MainLayout = () => {
  return (
    <div className="container  min-h-full mx-auto  grid md:grid-cols-[1fr_3fr] gap-10">
     <aside className="md:sticky md:w-[350px] mr-20 md:mr-0 top-0 h-full
     ml-10 py-10">
        <Sidebar />
      </aside>

      <div className=" mt-10   border  rounded-xl  border-gray-600 bg-[#1c1c1d]  ">
        <Navigation />
        <main className="mt-6 ml-10  mr-10 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        
        <Route index element={<About />} />      
        <Route path="projects" element={<Projects />} /> 
      <Route path="resume" element={<Resume />} />
      </Route>
    </Routes>
  );
}

export default App;