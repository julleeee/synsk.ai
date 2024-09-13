import React, { useState, useEffect } from 'react';

type ProgressbarProps = {
  clicked: boolean;
	onComplete: () => void;
};

const Progressbar = ({ clicked, onComplete }: ProgressbarProps) => {
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (clicked) {
      setIsRunning(true);
    } else {
      setIsRunning(false);
      setFilled(0); // Optionally reset progress if needed
    }
  }, [clicked]);

  // Effect to increment the progress when running
  useEffect(() => {
    if (filled < 100 && isRunning) {
      const timer = setTimeout(() => setFilled(prev => prev + 2), 50);
      return () => clearTimeout(timer); // Clean up the timeout to prevent memory leaks
    }
	  else if (filled >= 100) {
    setIsRunning(false)
		onComplete(); // Notify when progress is complete
	}
  }, [filled, isRunning, onComplete]);


  return (
	  <div>
		  <div className="progressbar">
			  <div style={{
				  height: "100%",
				  width: `${filled}%`,
				  backgroundColor: "#a66cff",
				  transition:"width 0.5s"
			  }}></div>
			  <span className="progressPercent">{ filled }%</span>
		  </div>
	</div>
  )
}

export default Progressbar