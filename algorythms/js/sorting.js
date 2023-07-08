const musicGroups = {
    "The Beatles": 42,
    "Led Zeppelin": 10,
    "Queen": 76,
    "Pink Floyd": 23,
    "Nirvana": 57,
    "AC/DC": 31,
    "Metallica": 85,
    "Radiohead": 19,
    "U2": 64,
    "The Rolling Stones": 39,
    "Guns N' Roses": 71,
    "Black Sabbath": 14,
    "The Doors": 53,
    "Red Hot Chili Peppers": 28,
    "Coldplay": 61,
    "Pearl Jam": 36,
    "The Who": 80,
    "Deep Purple": 7,
    "Foo Fighters": 45,
    "The Cure": 2,
    "Ramones": 68,
    "R.E.M.": 1,
    "Oasis": 74,
    "Bon Jovi": 17,
    "Green Day": 59,
    "The Clash": 34,
    "Journey": 78,
    "The Police": 12,
    "Smashing Pumpkins": 55,
    "Aerosmith": 30,
    "The Smiths": 82,
    "Blur": 5,
    "Arcade Fire": 43,
    "KISS": 8,
    "Soundgarden": 66,
    "The Beach Boys": 21,
    "Fleetwood Mac": 63,
    "The Strokes": 38,
    "Rage Against the Machine": 86,
    "System of a Down": 16,
    "The White Stripes": 51,
    "Talking Heads": 26,
    "Motörhead": 69,
    "Joy Division": 4,
    "Genesis": 47,
    "Slayer": 32,
    "Dire Straits": 81,
    "The Kinks": 11,
    "Nine Inch Nails": 57,
    "The Smithereens": 22,
  };

  /*sorting by choice*/
 const musicGroupsValues = Object.values(musicGroups);
 let musicGroupsIndexes= [];
 const musicGroupsNames = Object.keys(musicGroups);
 for(let i = 0; i < musicGroupsValues.length; i++){
    let maxIndex = findMax(musicGroupsValues, i);
    musicGroupsIndexes.push(maxIndex);
    musicGroupsValues.splice(i, 0, musicGroupsValues[maxIndex]);
    musicGroupsValues.splice(maxIndex+1, 1);
 }

 function findMax(array, startIndex){
    let index = startIndex;
    let max = array[startIndex];
    for(let i = startIndex+1; i < array.length; i++){
        if (array[i] > max){
            max = array[i];
            index = i;
        }
    }
    return index;
 }