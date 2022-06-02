
import './App.css';
import tom1 from "./sounds/tom-1.mp3";
import tom2 from "./sounds/tom-2.mp3";
import tom3 from "./sounds/tom-3.mp3";
import tom4 from "./sounds/tom-4.mp3";
import crash from "./sounds/crash.mp3";
import kick from "./sounds/kick-bass.mp3";
import snare from "./sounds/snare.mp3";

function App() {
  var numberOfDrumButtons = document.querySelectorAll(".drum").length;

  console.log(numberOfDrumButtons);

  for (var i = 0; i < numberOfDrumButtons; i++) {
    document
      .querySelectorAll(".drum")
      [i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
      });
  }

  document.addEventListener("keypress", function (event) {
    makeSound(event.key);

    buttonAnimation(event.key);
  });

  const makeSound =(key)  =>{
    if(key ===  "w")
        {
          const tom = new Audio(tom1);
        tom.play();
  }

    else if(key ===  "a")
        {
        const tom = new Audio(tom2);
        tom.play();
          }

  else if(key ===  "s")
        {
        const tom = new Audio(tom3);
        tom.play();
        }

       else if(key ===  "d")
        {
        const tom = new Audio(tom4);
        tom.play();
        }

       else if(key ===  "j")
        {
        const s = new Audio(snare);
        s.play();
        }

       else if(key ===  "k")
        {
        const c = new Audio(crash);
        c.play();
             }

    else if(key ===  "l")
        {
        var k = new Audio(kick);
        k.play();
          }

      else
        console.log(key);
    }
  

  const buttonAnimation = (currentKey) =>  {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }



  return (
    <div className="App">
      <div>
        <h1 id="title">Drum 🥁 Kit</h1>
        <div className="set">
          <button
            className="w drum"
            onClick={() => {
              buttonAnimation();
              makeSound();
            }}
          >
            w
          </button>
          <button
            className="a drum"
            onClick={() => {
              buttonAnimation();
              makeSound();
            }}
          >
            a
          </button>
          <button
            className="s drum"
            onClick={() => {
              buttonAnimation();
              makeSound();
            }}
          >
            s
          </button>
          <button
            className="d drum"
            onClick={() => {
              buttonAnimation();
              makeSound();
            }}
          >
            d
          </button>
          <button
            className="j drum"
            onClick={() => {
              buttonAnimation();
              makeSound();
            }}
          >
            j
          </button>
          <button
            className="k drum"
            onClick={() => {
              buttonAnimation();
              makeSound();
            }}
          >
            k
          </button>
          <button
            className="l drum"
            onClick={() => {
              buttonAnimation();
              makeSound();
            }}
          >
            l
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
