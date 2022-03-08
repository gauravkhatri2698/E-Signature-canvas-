import './App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import SignaturePad from 'react-signature-canvas';
import './canvas.css';
import { useState, useRef } from 'react';

function App() {
  const [sign_image, setImage] = useState(null);

  const canvas = useRef({});

  const clear = () => canvas.current.clear();

  const save = () => setImage(canvas.current.getTrimmedCanvas().toDataURL('image/png'));

  return (
    <div className="App">
      <h1>Signature Pad Example</h1>
      <Popup modal trigger={<button>Open Signature Pad</button>} closeOnDocumentClick={false}>
        {
          (close) => (
            <>
              <SignaturePad
                ref={canvas}
                canvasProps={{
                  className: "signatureCanvas"
                }}
                clearOnResize={false}
              // backgroundColor='black'
              // penColor='white'
              />
              <button className='save_canvas' onClick={save}>Save</button>
              <button className='clear_canvas' onClick={clear}>Clear</button>
              <button className='close_canvas' onClick={close}>Close</button>
            </>
          )
        }
      </Popup>

      <br />
      <br />

      {
        (sign_image ? (
          <img
            src={sign_image}
            alt="my signature"
            style={{
              display: 'block',
              margin: '0 auto',
              border: '1px solid black',
              width: '150px'
            }}
          >
          </img>
        ) : null)
      }
    </div>
  );
}

export default App;
