import Navbar from './components/Navbar/navbar';
import Mobile from './components/section-1/mobile';
import Logo from './components/section-2/logos';
import Cards from './components/section-3/cards';
import Download from './components/section-4/download';
import Forms from './components/section-5/forms';
import Data from './components/section-6/data';
import Container from './components/section-7/container';
import Menues from './components/section-8/menues';
import Charts from './components/section-9/charts';
import Pcard from './components/section-10/pcard';
import Theme from './components/theme/theme';
import Blocks from './components/blocks/blocks';
import Flex from './components/flex/flex';
import Supports from './components/supports/supports';
import Footer from './components/footer/footer';


function App() {
  return (
   <>
   <Navbar />
   <Mobile  />
   <Logo />
   <Cards />
   <Download />
    <Forms />
   <Data />
   <Container />
   <Menues />
   <Charts />
   <Pcard /> 
   <Theme />
   <Blocks />
   <Flex />
   <Supports />
   <Footer />
   </>
  );
}

export default App;
