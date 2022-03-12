import React, { useState } from "react";
import "./TickTackGame.css";
import { Box, Button } from "@mui/material";

const TickTackGame = () => {
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();

  const checkWinner = (squares) => {
    let combos = {
      leftToRight: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      upDown: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [6, 4, 2],
      ],
    };
    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[3]] === ""
        ) {
          //do nothing
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]]);
        }
      });
    }
  };

  const reStart = () => {
    setWinner(null);
    setCells(Array(9).fill(""));
  };

  const handleClick = (num) => {
    if (cells[num] !== "") {
      alert("already Clicked");
      return;
    }
    let squares = [...cells];
    if (turn === "X") {
      squares[num] = "X";
      setTurn("O");
    } else {
      squares[num] = "O";
      setTurn("X");
    }
    checkWinner(squares);
    setCells(squares);
    console.log(squares);
  };

  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
  };
  return (
    <>
      <Box className="tickTackGame">
        <Box className="tickTackGame--table">
          <h1>Tick Tock Toe🙅‍♀️</h1>

          <table className="">
            <tbody>
              <tr>
                <Cell num={0} className="nonBorder" />
                <Cell num={1} />
                <Cell num={2} />
              </tr>
              <tr>
                <Cell num={3} />
                <Cell num={4} />
                <Cell num={5} />
              </tr>
              <tr>
                <Cell num={6} />
                <Cell num={7} />
                <Cell num={8} />
              </tr>
            </tbody>
          </table>
          <Button color="inherit" variant="contained" sx={{mt:1}} onClick={() => reStart()}>
            Refresh
          </Button>
          {winner && (
            <>
              <Box sx={{display:"flex", my: 0, alignItems:"center" }}>
                {" "}
                <h2>{winner} is the Winner!🎉</h2>
                <Button
                  color="warning"
                  variant="contained"
                  onClick={() => reStart()}
                >
                  Play Again
                </Button>
               
              </Box>
             
            </>
          )}
          <div style={{marginTop:"2rem"}}><small style={{color:"silver"}}>© Copyright Reserved 2022 | Developed by <a href="https://www.youtube.com/watch?v=i-HAFccHeZ0&t=4s">CodeWithDolly</a></small></div>
        </Box>
        
      </Box>
   
    </>
  );
};

export default TickTackGame;
