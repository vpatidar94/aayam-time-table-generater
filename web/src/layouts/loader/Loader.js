import React, { useEffect, useRef, useState } from 'react';
import "./loader.scss";
import { Spinner } from "reactstrap";

const Loader = () => {

  /**************************************** Use Effect Section ************************************/
  useEffect(() => {
    subscribeToLoaderEvent();
  }, []);

  const [show, setShow] = useState(false);


  const subscribeToLoaderEvent = () => {
    window.addEventListener('spinner-load', (e) => {
      setShow(e.detail);
    });
  };
  return (<div>
    <div className="fallback-spinner" style={{ display: show ? 'flex' : 'none' }}>
      <div className="loading">
        <Spinner color="primary" style={{
          height: '3rem',
          width: '3rem'
        }}
 />
      </div>
    </div >
  </div>);
};
export default Loader;
