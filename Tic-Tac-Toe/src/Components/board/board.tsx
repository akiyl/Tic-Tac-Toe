
import './board.css'
type boardProps = {
    board:Array<Array<string|null>>,
    HandleClick:(row:number,col :number)=> void;


}
 export const Board = ({board,HandleClick } : boardProps)=>{
    return(<>
        <div className="board">
{board.map((row,rowIndex)=>(<div key={rowIndex} className='board-row'>
    {row.map((cell,cellIndex)=>(<button key={cellIndex} className='cell' onClick={()=>HandleClick(rowIndex,cellIndex)}>{cell}
    </button>))}
</div>))}
        </div></>
    )
}
