function knightMoves(start,end){

    const moves = [
        [-2, -1], [-2, 1], [2, -1], [2, 1],
        [-1, -2], [-1, 2], [1, -2], [1, 2]
    ];

    function isValid(x,y){
        return (x >= 0 && x < 8 && y >= 0 && y <8 );
    }

    function printPath(path){
        return path.map(position=>`[${position}]`).join('->');
    }

    const queue = [];
    const visited = new Set();

    queue.push({ position:start,path:[start]});

    while(queue.length>0){
        
        const current = queue.shift();
        const [x,y] = current.position;

        if(x===end[0]&&y===end[1])

            return `you made it in ${current.path.length-1} moves! here's your path:
        ${printPath(current.path)}`;

        visited.add(`${x},${y}`);
        
        for(const [dx,dy] of moves){

            const newX = x + dx;
            const newY = y + dy;

            if(isValid(newX,newY) && !visited.has(`${newX},${newY}`)){
                queue.push({position:[newX,newY],path:[...current.path,[newX,newY]]});
            }
        }
    }
    return null;

}

const start = [1,0];
const end = [1,1];

console.log(knightMoves(start,end));