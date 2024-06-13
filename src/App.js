import Welcome from './components/welcome/Welcome';
import { Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home_page from './components/home/Home_page';
import { SnackbarProvider } from 'notistack';
 

 
function App() {
  return (
    <Router>
      <SnackbarProvider maxSnack={3}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/calendar" element={<Home_page />} />
        </Routes>
      </SnackbarProvider>
    </Router>
  );
}
 
export default App;
