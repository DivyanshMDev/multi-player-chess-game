// const socket = io();
// // socket.emit("churan")
// const chess=new Chess();  
// const boardElement=document.querySelector(".chessboard")

// let draggedpiece=null;
// let sourcesquare=null;
// let playerrole=null;

// const renderboard=()=>{
// const board=chess.board();
// boardElement.innerHTML="";
// board.forEach((row,rowindex) =>{
// // console.log(row);
// row.forEach((square,sqaureindex)=>{
//     const squareelement=document.createElement("div");
//     squareelement.classList.add
//     ("square",
//         (rowindex+sqaureindex)%2===0?"light":"dark"
//     );

//     if(square){
//         const pieceElement=document.createElement("div");
//         pieceElement.classList.add(
//             "piece",
//             square.color ==="w"?"white":"black"
//         )

    

//     pieceElement.innerText="";
//     pieceElement.draggable=playerrole===square.color;


//     pieceElement.addEventListener("dragstart",(e)=>{
//         if(pieceElement.draggable){
//         draggedpiece=pieceElement;
//         sourcesquare={row:rowindex,col:sqaureindex};
//             e.dataTransfer.setData("text/plain","");
//     }
//     });

//     pieceElement.addEventListener("dragend",(e)=>{
//         draggedpiece=null;
//         sourcesquare=null;
//     });
//      squareelement.appendChild(pieceElement); 
// }

// squareelement.addEventListener("dragover",function(e){
//     e.preventDefault();

// });

// squareelement.addEventListener("drop",function(e){
// e.preventDefault();
// if(draggedpiece){
//     const targetSource={
//         row:parseInt(squareelement.dataset.row),
//         col:parseInt(squareelement.dataset.col),
//     };

//     handleMove(sourcesquare,targetSource);
// }
// });


// });
// boardElement.appendChild(squareelement);
// });
// };
// const handleMove=()=>{};

// const getpieceunicode=()=>{};
// renderboard();

const socket = io();
// socket.emit("churan")
const chess = new Chess();  
const boardElement = document.querySelector(".chessboard");

let draggedpiece = null;
let sourcesquare = null;
let playerrole = null;

const renderboard = () => {
    const board = chess.board();
    boardElement.innerHTML = "";
    board.forEach((row, rowindex) => {
        // console.log(row);
        row.forEach((square, squareindex) => {
            const squareelement = document.createElement("div");
            squareelement.classList.add(
                "square",
                (rowindex + squareindex) % 2 === 0 ? "light" : "dark"
            );

            squareelement.dataset.row = rowindex;
            squareelement.dataset.col = squareindex;

            if (square) {
                const pieceElement = document.createElement("div");
                pieceElement.classList.add(
                    "piece",
                    square.color === "w" ? "white" : "black"
                );

                pieceElement.innerText = getPieceUnicode(square.type,square.color);
                pieceElement.draggable = playerrole === square.color;

                pieceElement.addEventListener("dragstart", (e) => {
                    if (pieceElement.draggable) {
                        draggedpiece = pieceElement;
                        sourcesquare = { row: rowindex, col: squareindex };
                        e.dataTransfer.setData("text/plain", "");
                    }
                });

                pieceElement.addEventListener("dragend", (e) => {
                    draggedpiece = null;
                    sourcesquare = null;
                });
                squareelement.appendChild(pieceElement);
            }

            squareelement.addEventListener("dragover", function (e) {
                e.preventDefault();
            });

            squareelement.addEventListener("drop", function (e) {
                e.preventDefault();
                if (draggedpiece) {
                    const targetSquare = {
                        row: parseInt(squareelement.dataset.row),
                        col: parseInt(squareelement.dataset.col),
                    };

                    handleMove(sourcesquare, targetSquare);
                }
            });

            boardElement.appendChild(squareelement);
        });
    });
};

const handleMove = () => {
    const move
 };

const getPieceUnicode = (type, color) => {
    const unicodePieces = {
        p: { w: "♙", b: "♟" },
        r: { w: "♖", b: "♜" },
        n: { w: "♘", b: "♞" },
        b: { w: "♗", b: "♝" },
        q: { w: "♕", b: "♛" },
        k: { w: "♔", b: "♚" }
    };
    return unicodePieces[type][color];
};

renderboard();
