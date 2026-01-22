import {
  Header,
  Hero,
  Vision,
  Projects,
  Stats,
  Culture,
  Recruitment,
  CompanyInfo,
  Footer,
} from './components';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Vision />
        <Projects />
        <Stats />
        <Culture />
        <Recruitment />
        <CompanyInfo />
      </main>
      <Footer />
    </>
  );
}

export default App;
