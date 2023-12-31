import {useState} from 'react';

type GameData = {
    data : { [key:string] : string }
}

function flatHashMap(hashMap: GameData):Array<string> {
    const res:Array<string> = [];
    for (const [ key, value ] of Object.entries(hashMap.data)) {
        res.push(key);
        res.push(value);
    }
    // shuffle
    for (const i in res) {
        const r = Math.floor(Math.random() * res.length);
        let tmp = res[i];
        res[i] = res[r];
        res[r] = tmp;
    }
    return res;
}

function CountryCapitalGame2({data}: GameData ) {
    const [cards, setCards] = useState<Array<string>>(flatHashMap({ data }));
    const [selected, setselected] = useState('');

    return (
        <div>
            {cards.map((v,i) => {
                return (
                    <div key={i}>{v}</div>
                )
            })}
        </div>
    )
}

export default CountryCapitalGame2