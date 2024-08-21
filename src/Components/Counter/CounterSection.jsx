import React, { useEffect, useRef } from 'react';
import './CounterSection.css';

const CounterSection = () => {
  const workSectionRef = useRef(null);
  const counterRefs = useRef([]);

  useEffect(() => {
    const workSection = workSectionRef.current;

    const workSectionObserve = (entries) => {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      const speed = 200;

      counterRefs.current.forEach((curNumber) => {
        const updateNumber = () => {
          const targetNumber = parseInt(curNumber.dataset.number);
          const initialNumber = parseInt(curNumber.innerText);
          const incrementNumber = Math.trunc(targetNumber / speed);

          if (initialNumber < targetNumber) {
            curNumber.innerText = `${initialNumber + incrementNumber}+`;
            setTimeout(updateNumber, 10);
          } else {
            curNumber.innerText = `${targetNumber}+`;
          }
        };
        updateNumber();
      });
    };

    const workSecObserver = new IntersectionObserver(workSectionObserve, {
      root: null,
      threshold: 0,
    });

    if (workSection) {
      workSecObserver.observe(workSection);
    }

    return () => {
      if (workSection) {
        workSecObserver.unobserve(workSection);
      }
    };
  }, []);

  return (
    <>
      {/* <div className='div1'></div>
    <div className='div2'></div> */}
      <div className='counter-section'>
        <div className="counter-section-main-container">
          <div className="section-work-data section" ref={workSectionRef}>
            <div className="container grid grid-four-col">
              <div>
                <h2 data-number="1000" className="counter-numbers" ref={(el) => (counterRefs.current[0] = el)}>
                  0
                </h2>
                <p className='counter-p'>project completed</p>
              </div>
              <div>
                <h2 data-number="2000" className="counter-numbers" ref={(el) => (counterRefs.current[1] = el)}>
                  0+
                </h2>
                <p className='counter-p'>Happy clients</p>
              </div>
              <div>
                <h2 data-number="500" className="counter-numbers" ref={(el) => (counterRefs.current[2] = el)}>
                  0+
                </h2>
                <p className='counter-p'>cups of coffee</p>
              </div>
              <div>
                <h2 data-number="1500" className="counter-numbers" ref={(el) => (counterRefs.current[3] = el)}>
                  0+
                </h2>
                <p className='counter-p'>real professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterSection;