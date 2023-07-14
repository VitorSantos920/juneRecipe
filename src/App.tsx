import {
  Basket,
  CookingPot,
  MinusCircle,
  PlusCircle,
} from '@phosphor-icons/react';

import { useState } from 'react';
import { Hero } from './styles/Hero';
import { Content } from './styles/Content';
import { Portions } from './styles/Portions';
import { Prices } from './styles/Prices';
import { Preparation } from './styles/Preparation';

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

        <Preparation className="preparation flex">
          <div className="preparation__ingredient">
            <h2 className="ingredient__title">
              <Basket fill="#FEECE0" weight="bold" />
              Ingredientes
            </h2>
            <ul className="ingredient__ingredients-list">
              <li className="ingredient__ingredient-name">
                1 espiga de milho verde
              </li>

              <li className="ingredient__ingredient-name">
                1 colher de sopa de açúcar
              </li>

              <li className="ingredient__ingredient-name">
                1 colher de sopa de manteiga
              </li>

              <li className="ingredient__ingredient-name">Sal a gosto</li>

              <li className="ingredient__ingredient-name">
                Palha de milho (para embrulhar)
              </li>
            </ul>
          </div>

          <div className="preparation__mode">
            <h2 className="preparation__title">
              <CookingPot fill="#FEECE0" weight="bold" />
              Modo de prepararo
            </h2>
            <ol className="preparation__preparation-list">
              <li className="preparation__preparation-item">
                Descasque a espiga de milho e corte os grãos.
              </li>
              <li className="preparation__preparation-item">
                Bata o milho, açúcar, manteiga e sal no liquidificador.
              </li>
              <li className="preparation__preparation-item">
                Coloque a massa nas palhas de milho e feche bem.
              </li>
              <li className="preparation__preparation-item">
                Cozinhe em água fervente por cerca de 40 minutos.
              </li>
              <li className="preparation__preparation-item">
                Deixe esfriar e sirva.
              </li>
            </ol>
          </div>
        </Preparation>
      </main>
    </div>
  );
}
