import HomePage from "./Views/Home"
import ErrorPage from "./Views/Notfounded"
import DetailPage from "./Views/Detail"
import AboutPage from "./Views/About"
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
    
    return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element= {<HomePage/>}>
    </Route>
    <Route path="/about" element= {<AboutPage/>}>
    </Route>
    <Route path="/detail/:id" element = {<DetailPage/>}>
    </Route>
    <Route path="*" element = {<ErrorPage/>}>
    </Route>
    </Routes>
    </BrowserRouter>
    );
}

 export default App