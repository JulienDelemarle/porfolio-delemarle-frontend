import axios from 'axios';
import { useEffect, useState } from 'react';
import SPresentation from './Style';

function Presentation() {
  const [pitch, setPitch] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5050/api/home').then(({ data }) => {
      setPitch(data);
    });
  }, []);

  return (
    <SPresentation>
      {pitch.map((description) => {
        return <div className="presentation">{description.text}</div>;
      })}
    </SPresentation>
  );
}
export default Presentation;
