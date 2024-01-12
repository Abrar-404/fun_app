import { useState } from 'react';
import Swal from 'sweetalert2';

const Fun = () => {
  const [position, setPosition] = useState({ x: 170, y: 100 });

  const no = () => {
    Swal.fire({
      title: 'Custom animation with Animate.css',
      showClass: {
        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
      },
      hideClass: {
        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
      },
    });
    ('I Knew It');
  };

  const motionMouse = () => {
    setPosition({
      x: Math.floor(Math.random() * 500),
      y: Math.floor(Math.random() * 500),
    });
  };

  return (
    <div className='items' style={{ width: '600px', height: '600px', backgroundColor: 'white' }}>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <label
          style={{ fontSize: '20px', fontFamily: 'Arial', fontWeight: 'bold' }}
        >
          Are you gay?
        </label>
      </div>
      <button
        style={{
          fontSize: '20px',
          fontFamily: 'Arial',
          fontWeight: 'bold',
          position: 'absolute',
          top: `${position.y}px`,
          left: `${position.x}px`,
        }}
        onMouseEnter={motionMouse}
      >
        no
      </button>
      <button
        style={{
          fontSize: '20px',
          fontFamily: 'Arial',
          fontWeight: 'bold',
          position: 'absolute',
          top: '100px',
          left: '350px',
        }}
        onClick={no}
      >
        yes
      </button>
    </div>
  );
};

export default Fun;
