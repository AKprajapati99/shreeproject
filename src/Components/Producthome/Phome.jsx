
import React, { useEffect } from 'react';
import './Phome.css'
import product01new from '../../assets/product01new.jpg'
import product02new from '../../assets/product02new.jpg'
import product03new from '../../assets/product03new.jpg'
import product04new from '../../assets/product04new.png'
import product05new from '../../assets/product05new.png'
const Phome = () => {
    useEffect(() => {
        const stack = document.querySelector(".stack");
        const cards = Array.from(stack.children)
          .reverse()
          .filter((child) => child.classList.contains("card"));
    
        cards.forEach((card) => stack.appendChild(card));
    
        function moveCard() {
          const lastCard = stack.lastElementChild;
          if (lastCard.classList.contains("card")) {
            lastCard.classList.add("swap");
    
            setTimeout(() => {
              lastCard.classList.remove("swap");
              stack.insertBefore(lastCard, stack.firstElementChild);
            }, 1200);
          }
        }
    
        let autoplayInterval = setInterval(moveCard, 4000);
    
        stack.addEventListener("click", function (e) {
          const card = e.target.closest(".card");
          if (card && card === stack.lastElementChild) {
            card.classList.add("swap");
    
            setTimeout(() => {
              card.classList.remove("swap");
              stack.insertBefore(card, stack.firstElementChild);
            }, 1200);
          }
        });
    
        return () => {
          clearInterval(autoplayInterval);
          stack.removeEventListener("click", moveCard);
        };
      }, []);
    return (
        <main>
          <div className="content">
            <h1>WELCOM TO SHREEINSUL</h1>
            <p>
              Welcome to La Pâtisserie Belle, where every bite is a journey into the
              exquisite world of finely crafted pastries. Our patisserie is
              dedicated to bringing you the most delicious and beautifully designed
              haven for those who appreciate the finer things in life.
            </p>
            <button className="btn">Explore More</button>
          </div>
    
          <div className="stack">
            <div className="card">
              <img
                src={product01new}
                alt="" />
            </div>
            <div className="card">
              <img
                src={product02new}
                alt="" />
            </div>
            <div className="card">
              <img
                src={product03new}
                alt="" />
            </div>
            <div className="card">
              <img
                src={product04new}
                alt="" />
            </div>
            <div className="card">
              <img
               src={product05new}
                alt="" />
            </div>
            {/* <div className="card">
              <img
                src={product01new}
                alt="" />
            </div> */}
          </div>
        </main>
      );
}

export default Phome
