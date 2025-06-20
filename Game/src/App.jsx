import Player from "./components/Player.jsx";
import TimerChange from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChange title="Easy" targetTime={1} />
        <TimerChange title="Not easy" targetTime={5} />
        <TimerChange title="Getting tough" targetTime={10} />
        <TimerChange title="Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
