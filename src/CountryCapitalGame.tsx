import {useState, useEffect} from 'react'
import './style.css'

type GameData = {
    data : {[key: string] : string}
}


function CountryCapitalGame({data}: GameData) {
    const [cards, setCards] = useState<Array<JSX.Element>>([]);
    const [selected, setselected] = useState("");
    
    
    // dont need useState maybe ref?
    // just do loop over Object.entries(); key, value => country, capital
    // to draw the cards

    /// cards should be just an array of strings...

    function handleSelected(value:string) {
        if (selected.length === 0) {
            setselected(value);
            return;
        } 

        if (data[selected] === value || data[value] === selected ) {
            // match remove cards
            setCards(old => old.filter( v => v.key !== (selected || value)))
            return;
        }

        //incorrect make both cards red
            
    }

    useEffect(() => {
        const newCards:Array<JSX.Element> = [];
        
        for (const [country, capital] of Object.entries(data)) {
            const newCountry = <Card key={country} value={country} color='white' updateSelected={handleSelected}/>;
            newCards.push(newCountry);
            const newCapital = <Card key={capital} value={capital} color='white' updateSelected={handleSelected}/>;
            newCards.push(newCapital);
        }
        
        setCards( old => [...old, ...newCards]);
    }, [])
    
    
    return (
        <div className='main'>
            {cards}
        </div>
    )
}

type cardValue = {
    value : string
    color : string
    updateSelected: (val:string) => void
        
}
// style={cardStyles}
function Card({value , color, updateSelected}: cardValue) {
    return (
        <div className={`card ${color}`} onClick={() => updateSelected(value)}>
            {value}
        </div>
    )
}

export default CountryCapitalGame