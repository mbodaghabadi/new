const inputUser = [];


for (let i = 0; i < 3; i++) {
  inputUser.push([]);
  for (let j = 0; j < 3; j++) {
    const input = prompt(`Enter value for row ${i+1}, column ${j+1} (0 for empty, 1 for "X", 2 for "O"):`);
    inputUser[i][j] = parseInt(input);
  }
}

console.log(inputUser);

function isSolved(board) {
  for (let i = 0; i < 3; i++) {
    if (
      (board[i][0] === board[i][1] && board[i][1] === board[i][2]) || 
      (board[0][i] === board[1][i] && board[1][i] === board[2][i]) || 
      (i === 0 && board[0][0] === board[1][1] && board[1][1] === board[2][2]) ||
      (i === 2 && board[0][2] === board[1][1] && board[1][1] === board[2][0]) 
    ) {
      return board[i][i];
    }
  }

  let isBoardFull = true;
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === 0) {
        isBoardFull = false;
        break;
      }
    }
    if (!isBoardFull) {
      break;
    }
  }

  if (isBoardFull) {
    return 0;
  }

  return -1;
}

console.log(isSolved(inputUser));
