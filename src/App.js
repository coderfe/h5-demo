import React, { useState } from 'react';
import Ripples from 'react-ripples';
import { useTrail, animated } from 'react-spring';
import './App.css';
import { MovieSetItem } from './components/MovieSetItem';
import { Tag } from './libs/Tag';

const tags = ['plot', 'moonlight'];
const movies = [
  {
    time: '18:00',
    type: '3D',
    price: 9.9,
    key: 0,
  },
  {
    time: '20:00',
    type: '3D',
    price: 9.9,
    key: 1,
  },
  {
    time: '22:20',
    type: '3D',
    price: 9.9,
    key: 2,
  },
  {
    time: '23:50',
    type: '3D',
    price: 9.9,
    key: 3,
  },
];
const selected = [24, 25, 26, 62, 63, 38, 34];
const initialSeats = {};
for (let i = 0; i < 64; i++) {
  initialSeats[i] = {
    id: i,
    status: selected.includes(i) ? 'selected' : 'available',
  };
}
const config = { mass: 5, tension: 2000, friction: 200 };

function App() {
  const [isActive, setActive] = useState(false);
  const [toggle, set] = useState(false);
  const [seatTotal, setSeatTotal] = useState(0);
  const [priceTotal, setPriceTotal] = useState(0);
  const [seats, setSeats] = useState(initialSeats);

  const trail = useTrail(movies.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 30,
    from: { opacity: 0, x: 30, height: 0 },
  });

  const onClick = () => {
    setActive(!isActive);
    set((state) => !state);
  };

  const handleSelected = (key) => {
    const target = seats[key];
    if (target.status === 'selected') return;
    const status = target.status === 'your' ? 'available' : 'your';
    setSeats({
      ...seats,
      [key]: {
        target,
        status,
      },
    });
    if (target.status === 'available') {
      setSeatTotal(seatTotal + 1);
      setPriceTotal(priceTotal + 9.9);
    } else {
      setSeatTotal(seatTotal - 1);
      setPriceTotal(priceTotal - 9.9);
    }
  };

  const gotoDetail = () => {
    console.log(1);
  };

  return (
    <div className="App">
      <div className="Movie">
        <h1 className="MovieName">Moonlight</h1>
        <p className="MovieDuration">1hr 50min</p>
        <div>
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <h2 style={{ marginTop: '48px' }}>Sorylint</h2>
        <p style={{ textAlign: 'justify', lineHeight: 1.2 }}>
          The film was announced in October 2014 as Avengers: Infinity War –
          Part 2, but Marvel later removed this title. The Russo brothers joined
          as directors in April 2015, with Markus and McFeely signing on to
          write the script a month later....
        </p>
      </div>
      <div className={`MovieAction ${isActive ? 'active' : ''}`}>
        <div className="MovieActionBuyNow">
          <Ripples onClick={onClick}>buy now</Ripples>
        </div>
        <div className="MovieSet">
          {trail.map(({ x, height, ...rest }, index) => (
            <animated.div
              key={movies[index].key}
              style={{
                ...rest,
                transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
              }}
              onClick={gotoDetail}
            >
              <MovieSetItem movie={movies[index]} />
            </animated.div>
          ))}
        </div>
      </div>
      <div hidden className="MovieDetail">
        <div className="title">
          Moonlight
          <p className="subtitle">18:00 - 20:00</p>
        </div>
        <div className="line"></div>
        <div className="seats">
          {Object.keys(seats).map((key) => {
            const seat = seats[key];
            return (
              <div
                onClick={() => handleSelected(key)}
                className={`seat ${seat.status}`}
                key={key}
              />
            );
          })}
        </div>
        <div className="desc">
          <div>
            <div className="seat selected"></div>
            <p className="seat-desc">Selected</p>
          </div>
          <div>
            <div className="seat available"></div>
            <p className="seat-desc">Available</p>
          </div>
          <div>
            <div className="seat your"></div>
            <p className="seat-desc">Your seat</p>
          </div>
        </div>
        <div className="total">
          <span style={{ fontSize: '16px' }}>{seatTotal} seats</span>
          <span style={{ fontSize: '24px' }}>${priceTotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
