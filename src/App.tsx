import { animated, useTransition } from "@react-spring/web";
import { useLocation, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { MouseEventHandler, useState } from "react";

const backward = {
  from: { opacity: 0, transform: "translate3d(100%,0,0)" },
  enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
  leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
};

const forward = {
  from: { opacity: 1, transform: "translate3d(-50%,0,0)" },
  enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
  leave: { opacity: 0, transform: "translate3d(100%,0,0)" },
};

function App() {
  const [reverse, setReverse] = useState(false);
  const location = useLocation();
  const transitions = useTransition(
    location.pathname,
    reverse ? backward : forward
  );

  return transitions((props, location) => (
    <animated.div style={props}>
      <Routes location={location}>
        <Route path="/" element={<A onClick={() => setReverse(true)} />} />
        <Route
          path="lesson/friday-night"
          element={<A onClick={() => setReverse(true)} />}
        />
        <Route
          path="lesson/friday-night/history"
          element={<B onClick={() => setReverse(false)} />}
        />
      </Routes>
    </animated.div>
  ));
}

export default App;

const A = ({ onClick }: { onClick: MouseEventHandler<HTMLAnchorElement> }) => (
  <div style={{ background: "lightpink" }}>
    <Link to="/lesson/friday-night/history" onClick={onClick}>
      A
    </Link>
  </div>
);

const B = ({ onClick }: { onClick: MouseEventHandler<HTMLAnchorElement> }) => (
  <div style={{ background: "lightblue" }}>
    <Link to="/lesson/friday-night/" onClick={onClick}>
      B
    </Link>
  </div>
);
