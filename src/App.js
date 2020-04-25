import React, { useState } from 'react';
import Ripples from 'react-ripples';
import { useTrail, animated } from 'react-spring';
import { Transition } from 'react-spring/renderprops';
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
const initialSeats = () => {
  const res = {};
  for (let i = 0; i < 64; i++) {
    res[i] = {
      id: i,
      status: selected.includes(i) ? 'selected' : 'available',
    };
  }
  return res;
};

const config = { mass: 6, tension: 2000, friction: 300 };

function App() {
  const [isActive, setActive] = useState(false);
  const [toggle, set] = useState(false);
  const [seatTotal, setSeatTotal] = useState(0);
  const [priceTotal, setPriceTotal] = useState(0);
  const [seats, setSeats] = useState(initialSeats());
  const [show, setShow] = useState(false);

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

  const gotoDetail = (e) => {
    setTimeout(() => {
      setShow(true);
    }, 300);
  };

  const onClose = () => {
    setShow(!show);
    setPriceTotal(0);
    setSeatTotal(0);
    setSeats(initialSeats());
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
            >
              <MovieSetItem onClick={gotoDetail} movie={movies[index]} />
            </animated.div>
          ))}
        </div>
      </div>
      <Transition
        items={show}
        from={{ opacity: 0, transform: 'translateY(100%)' }}
        enter={{ opacity: 1, transform: 'translateY(0)' }}
        leave={{ opacity: 1, transform: 'translateY(100%)' }}
      >
        {(show) =>
          show &&
          ((props) => (
            <div style={props} className="MovieDetail">
              <div
                style={{
                  position: 'absolute',
                  top: 34,
                  left: 24,
                  width: 20,
                  height: 20,
                  color: '#fff',
                  fontSize: 24,
                  cursor: 'pointer',
                }}
                onClick={onClose}
              >
                <svg
                  t="1587821013450"
                  className="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1895"
                  width="20"
                  height="20"
                >
                  <path
                    d="M395.21518 513.604544l323.135538-312.373427c19.052938-18.416442 19.052938-48.273447 0-66.660212-19.053961-18.416442-49.910737-18.416442-68.964698 0L291.75176 480.290811c-19.052938 18.416442-19.052938 48.273447 0 66.660212l357.633237 345.688183c9.525957 9.207709 22.01234 13.796214 34.497699 13.796214 12.485359 0 24.971741-4.588505 34.466999-13.82896 19.052938-18.416442 19.052938-48.242747 0-66.660212L395.21518 513.604544z"
                    p-id="1896"
                    fill="#ffffff"
                  ></path>
                </svg>
              </div>
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
                <span style={{ fontSize: '24px' }}>
                  ${priceTotal.toFixed(2)}
                </span>
              </div>
            </div>
          ))
        }
      </Transition>
    </div>
  );
}

export default App;
