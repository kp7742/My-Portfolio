import { ParticleJS } from '../particles';
import { IntroData } from '../containers';

function Home() {
  return (
    <section className="Home">
      <div className="flex flex-col">
        <ParticleJS />
        <IntroData />
      </div>
    </section>
  );
}
  
  export default Home;