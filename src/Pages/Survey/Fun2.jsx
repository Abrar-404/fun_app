import { useState } from 'react';
import Swal from 'sweetalert2';

const Fun2 = () => {
  const [position, setPosition] = useState({ x: 170, y: 100 });

  const no = () => {
    Swal.fire({
      imageUrl: 'https://i.ibb.co/b10f56Y/output-onlinegiftools-2.gif',
      title: 'HAHAHAHA',
      color: 'white',
      background: 'black',
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
    <div>
      <div>
        <div className="w-full border-red-600">
          <h1 className="font-bold text-3xl flex text-center border justify-center">
            Are You Gay?
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Fun2;
