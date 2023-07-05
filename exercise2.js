let data = [
    {
        title : "song-title-1",
        artists : [{name : "artists-1"}],
        duration: 200
    },
    {
        title : "song-title-2",
        artists : [{name : "artists-1"}],
        duration: 200
    },
    {
        title : "song-title-3",
        artists : [{name : "artists-1"}],
        duration: 200
    }
    ]

const songList =  new Promise ((resolve, reject)=>{
    let chances = Math.floor(Math.random() * 100);
    if(chances > 0 && chances <= 80){
        resolve(data);
    } else {
        reject(new Error('Error at 80%'));
    }
    if(!data){
        reject(new Error('Error at 80%'));
    }
});

songList.then((data)=>{
    let list = [];
    for (let i = 0 ; i < data.length; i++){
        let title = data[i]?.title;
        let artists = data[i].artists;
        let duration = data[i]?.duration;
        let track = `| Title: ${title}, artists: ${artists}, duration: ${duration} |`
        list += track;
    }
    console.log("list 1 = ", list);
}, (error)=>{console.log(`error while fetching data ${error.message}`)});

async function getSong(){
    // await songList.then((data)=>{
        try {
            const data1 = await songList ;
            let list = [];
            for (let i = 0 ; i < data.length; i++){
                let title = await data1[i]?.title;
                let artists = await data1[i].artists[0];
                let duration = await data1[i]?.duration;
                let track = `| Title: ${title}, artists: ${artists}, duration: ${duration} |`
                list += track;}
                console.log("list 2 = ", list);
        } catch (error) {
            console.log(`error while fetching data ${error.message}`);
        }
    
}

getSong();