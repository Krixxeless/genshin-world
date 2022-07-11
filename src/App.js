import './App.css';
import {characters} from "./characters";
import {weapons} from "./weapons";
import {getCharacterBanner, getWeaponBanner, wish} from "./logic";

let three = 0;
let four = 0;
let five = 0;

function App() {
  return (
      <div>
          Stats: <br/>
          3 rare: {three}<br/>
          4 rare: {four}<br/>
          5 rare: {five}<br/>
          <button onClick={wish}>
                Помолиться 1 раз
          </button>
      </div>
  );
}
for (let i = 1; i <= 90; i++) {
    let test = wish(getCharacterBanner(characters,weapons,[16, 3, 7, 42]));
    console.log(test)
    if(test.rare === 3) {
        three += 1
    } else if (test.rare === 4) {
        four += 1
    } else  {five += 1}
}

//console.log(banner_drop_weapon(characters, weapons, [32, 38, 26, 24, 17, 53, 67]))
//console.log(wish(getCharacterBanner(characters,weapons,[16, 3, 7, 42])))

export default App;
