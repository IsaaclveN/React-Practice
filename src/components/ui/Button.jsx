import { useState } from 'react';

function Button() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    alert('Button clicked!');
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Just Click Me
      </button>
      {clicked && <p>Button clicked!</p>}
    </div>
  );
}

export default Button;
