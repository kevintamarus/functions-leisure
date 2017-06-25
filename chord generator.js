//input => chord(as string) ex: "A", "F#7"
//output => array of notes in chord
var chordNotes = function(chord) {
    var notesObject = {
        sharp : ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
        flat : ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"]
    }
    var indexRange = {
        A:0,Bb:1,'A#':1,B:2,C:3,Db:4,'C#':4,D:5,Eb:6,'D#':6,E:7,F:8,Gb:9,'F#':9,G:10,Ab:11,'G#':11,
        majorScale : [0,2,4,5,7,9,11],
        minorScale : [0,2,3,5,7,8,10],
        majorIndex : [4,7],
        minorIndex : [3,7],
        sus: [5,7]
    }
    var notes = [];
    var scale = [];
    var object = {};
    var array = [];
    for(var i=0; i<chord.length; i++) {
        object[chord[i]] = chord[i];
    }
    //set root note at array[0]
    (chord[1] === '#' || chord[1] === 'b') ? array.push(chord.slice(0,2)) : array.push(chord[0]);
    //set notes array to # or b
    (chord[1] === 'b' || chord[0] === 'F') ? notes = notesObject.flat : notes = notesObject.sharp;
    //adjust notes starting at root note
    notes = notes.slice(indexRange[array[0]],notes.length).concat(notes.slice(0,indexRange[array[0]]));
    //check major/minor and add to scale array
    (chord[1] !== 'm') ? indexRange.majorScale.forEach(function(x) {
        scale.push(notes[x]);
    }) : indexRange.minorScale.forEach(function(x) {
        scale.push(notes[x]);
    }) ;
    //major7
    if (object.m && !object.a) {
        var x = 0;
    }
    //sus
    else if (object.d) {
        var x = 0;
    }
    //regular
    else {
        var x = 0;
    }
    console.log(notes);
    console.log(scale);
    return array;
}

console.log( chordNotes("Am"));