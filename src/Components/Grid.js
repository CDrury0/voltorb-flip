import cardTorb from "../Images/voltorb-icon.svg";
import card1 from "../Images/one.svg";
import card2 from "../Images/two.svg";
import card3 from "../Images/three.svg";
import CardRow from "./CardRow";
import CounterRow from "./CounterRow";

const imgLookup = [cardTorb, card1, card2, card3];

const makeGridData = (size) => {
    const data = [];
    for(let i = 0; i < size; i++){
        let temp = [];
        for(let j = 0; j < size; j++){
            temp.push(Math.floor(Math.random() * 3.5)); //3.5 weights the result away from 0, resulting in fewer torbs
        }
        data.push(temp);
    }
    return data;
}

const getPointsAndTorbs = (setOfCards) => {
    const rowPoints = setOfCards.reduce((start, i) => start + i);
    const rowTorbs = setOfCards.reduce((start, i) => start + !i, 0);
    return [rowPoints, rowTorbs];
}

const Grid = () => {
    const gridSize = 5;
    const gridData = makeGridData(gridSize);
    const gridRows = gridData.map((val, index) => {
        const [rowPoints, rowTorbs] = getPointsAndTorbs(gridData[index]);
        return <CardRow key={index} value={val} rowData={gridData[index]} rowPoints={rowPoints} rowTorbs={rowTorbs} imgLookup={imgLookup}/>
    });
    return (
        <div className="Grid">
            {gridRows}
            <CounterRow gridData={gridData} getPointsAndTorbs={getPointsAndTorbs}/>
        </div>
    );
}

export default Grid;
