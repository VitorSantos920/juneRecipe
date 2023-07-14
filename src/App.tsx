import {
  // Basket,
  // CookingPot,
  MinusCircle,
  PlusCircle,
} from '@phosphor-icons/react';

import { useState } from 'react';
import { Hero } from './styles/Hero';
import { Content } from './styles/Content';
import { Portions } from './styles/Portions';
import { Prices } from './styles/Prices';

export default function App() {
  const [quantity, setquantity] = useState(0);

  return (
    <div>
      <main className="main">
        <Hero className="hero flex">
          <img
            src="/pamonha.png"
            className="hero__img"
            alt="Pamonha desenhada a mão."
          />

          <Content className="hero__content">
            <h1 className="hero__title">Pamonha</h1>
            <p>Prato típico com milho verde ralado</p>

            <Portions className="hero__portions-container flex">
              <small>Porções</small>
              <button
                onClick={() =>
                  setquantity((quantity) =>
                    quantity <= 0 ? quantity : quantity - 1
                  )
                }
              >
                <MinusCircle fill="#9B6647" size={25} />
              </button>
              <span className="hero__portions-quantity">
                {quantity < 10 ? '0' + quantity : quantity}
              </span>

              <button>
                <PlusCircle
                  fill="#9B6647"
                  size={25}
                  onClick={() =>
                    setquantity(quantity >= 20 ? quantity : quantity + 1)
                  }
                />
              </button>
            </Portions>

            <Prices className="hero__prices flex">
              <div className="hero__unit-price-container">
                <h2>Preço unitário</h2>
                <p className="hero__unit-price">
                  <span>R$ </span>4,50
                </p>
              </div>
              <div className="hero__total-price-container">
                <h2>Preço total</h2>
                <p className="hero__total-price-value">
                  <span>R$ </span>
                  {(quantity * 4.5).toPrecision(3)}
                </p>
              </div>
            </Prices>
          </Content>
        </Hero>
        <section className="preparation"></section>
      </main>
    </div>
  );
}
