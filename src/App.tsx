import { animated, config, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import "./App.css";
import { useWindowWidth } from "./hooks/useWindowWidth";
import { range } from "./utils";

function App() {
  const width = useWindowWidth();

  const [{ x }, api] = useSpring(() => ({ x: width }), [width]);

  const open = ({ canceled }: { canceled: boolean }) => {
    // when cancel is true, it means that the user passed the upwards threshold
    // so we change the spring config to create a nice wobbly effect
    api.start({
      x: 0,
      immediate: false,
      config: canceled ? config.wobbly : config.stiff,
    });
  };

  const close = (velocity = 0) => {
    api.start({
      x: width,
      immediate: false,
      config: { ...config.stiff, velocity },
    });
  };

  const bind = useDrag(
    ({ last, velocity: [vx], direction: [dx], movement: [mx], canceled }) => {
      // when the user releases the sheet, we check whether it passed
      // the threshold for it to close, or if we reset it to its open position
      if (last) {
        mx > width * 0.5 || (vx > 0.5 && dx > 0)
          ? close(vx)
          : open({ canceled });
      }
      // when the user keeps dragging, we just move the sheet according to
      // the cursor position
      else api.start({ x: mx, immediate: true });
    },
    {
      from: () => [0, x.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    }
  );

  const display = x.to((px) => (px < width ? "block" : "none"));

  return (
    <div>
      <animated.div
        style={{
          transform: x.to((px) => `translateX(${(px - width) / 2}px)`),
          background: "lightpink",
          filter: x.to((px) => `brightness(${range(0, width, 0.7, 1, px)})`),
        }}
        onClick={() => open({ canceled: false })}
      >
        A
      </animated.div>
      <animated.div
        {...bind()}
        style={{
          display,
          right: `calc(-100vw + ${width}px)`,
          x,
          background: "lightblue",
        }}
        onClick={() => close(0)}
      >
        B
      </animated.div>
    </div>
  );
}

export default App;
