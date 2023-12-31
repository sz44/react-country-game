import {useState} from "react";

type GameData = {
    data: {[key:string] : string}
}

// restart button: create new array of JSX | strings in random order
function setup(dataObj: {[key:string] : string} ): Array<string> {
    const res:Array<string> = [];
    for (const [key, val] of Object.entries(dataObj)) {
        res.push(key, val);
    }
    shuffle(res);
    return res;
}

function shuffle(res:Array<string>) {
    for (let i=0; i<res.length - 2; i++) {
        const r = i + Math.floor(Math.random() * (res.length - i));
        [res[i], res[r]] = [res[r], res[i]];
    }
}
function shuffle2(res:Array<string>) {
    for (let i=res.length-1; i>0; i--) {
        const r = Math.floor(Math.random() * i);
        [res[i], res[r]] = [res[r], res[i]];
    }
}
function CountryCapitalGame3({data} : GameData) {
    const [cards, setCards] = useState<Array<string>>(setup(data));
    const [selected, setSelected] = useState<Array<string>>([]);
    const [wrong, setWrong] = useState<Array<string>>([]);
    
    // wrong maynot be need since it can be calculated just check selected aginst data
    function handleCardClick(text:string) {
        if (selected.length < 2) {
            setSelected(p => [...p, text]);
            setWrong([]);
        }
    }
    game();

    // "game engine"
    // start new game
    // track score
    // check game state
    // check if selected correct
    // remove cards
    function game() {
        // check selected cards
        if (selected.length == 2) {
            if (isCorrect()) {
                setTimeout(() => {
                    setCards(prev => prev.filter((card) => {
                        return !selected.includes(card)
                    }))
                    setSelected([]);

                }, 500);
            } else {
                setWrong(selected);
                setSelected([]);
            }
        }
    }

    function isCorrect() {
        if (data[selected[0]] === selected[1] || data[selected[1]] === selected[0]) {
            return true;
        }
        return false;
    }

    function chooseColor(text:string) {
        if (selected.includes(text)) {
            return "blue";
        }
        if (wrong.includes(text)) {
            return "red";
        }
        return "white";
    }

    return (
        <div>
            {cards.map((card, i) => (
                <button 
                    key={i} 
                    onClick={()=>handleCardClick(card)} 
                    style={{background:chooseColor(card)}}>{card}</button>
            ))}
            {cards.length === 0 ? <p>congradulation!</p> : <p></p>}
        </div>
    ) 
}

type CardType = {
    text: string
    state: string
    clickfn: (text:string)=>void
}

function Card({text, state, clickfn} : CardType) {
    let color = "white";
    if (state === "clicked") {
        color = "blue";
    }
    if (state === "wrong") {
        color = "red";
    }
    return (
        <button style={{background:color}} onClick={()=>clickfn(text)}>{text}</button>
    )
}

export default CountryCapitalGame3;