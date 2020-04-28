let playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }   
    
    
];
// document.write (playList);

// document.getElementById('list').innerHTML = playList;


// function camelize(str) {
//     return str
//         .split(' ')
//         .map(
//             (word) => word[0].toUpperCase() + word.toLowerCase().slice(1)
//         )
//         .join(' ');
// }

function showList(arr) {
    let list = document.getElementById("list");
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = `AUTHOR: ${playList[i].author} SONG: ${playList[i].song} `;
        list.appendChild(li);
    };
};
showList(playList);