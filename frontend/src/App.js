import { Route, BrowserRouter as Router } from 'react-router-dom';
import Article from './components/Article/Article';
import BlogBox from './components/BlogBox/BlogBox';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { Container, GlobalStyle } from './styled-components/';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Container>
          <Navbar />
          <BlogBox />
          {/* <Article /> */}
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
