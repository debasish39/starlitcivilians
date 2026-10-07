import {BrowserRouter,Routes,Route,useLocation} from "react-router-dom";import{useEffect}from"react";import MainLayout from "./layouts/MainLayout";import Home from "./pages/Home";import About from "./pages/About";import Menu from "./pages/Menu";import Gallery from "./pages/Gallery";import Events from "./pages/Events";import Contact from "./pages/Contact";import NotFound from "./pages/NotFound";
function Top() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}
export default function App(){return <BrowserRouter><Top/><Routes><Route element={<MainLayout/>}><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/menu" element={<Menu/>}/><Route path="/gallery" element={<Gallery/>}/><Route path="/events" element={<Events/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Route></Routes></BrowserRouter>}