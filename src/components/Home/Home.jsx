import Presentation from '../Presentation/Presentation';
import PresentationPhoto from '../Presentationphoto/PresentationPhoto';
import Smain from './Style';

function Home() {
  return (
    <>
      <Smain>
        <Presentation />

        <PresentationPhoto />
      </Smain>
    </>
  );
}
export default Home;
