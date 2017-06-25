//input => chord(as string) ex: "A", "F#7"
//output => array of notes of the input chord
var chordGenerator = function(chord) {
    var notesObject = {
        sharp : ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
        flat : ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"]
    }
    var indexRange = {
        A:0,Bb:1,'A#':1,B:2,C:3,Db:4,'C#':4,D:5,Eb:6,'D#':6,E:7,F:8,Gb:9,'F#':9,G:10,Ab:11,'G#':11,
        majorScale : [0,2,4,5,7,9,11],
        minorScale : [0,2,3,5,7,8,10],
    }
    var chordCheck = {};
    var notes = [];
    var scale = [];
    var chordNotes = [];
    //puts all letters and symbols into an object for checking/referencing
    for(var i=0; i<chord.length; i++) {
        chordCheck[chord[i]] = chord[i];
    }
    //set root note at array[0]
    (chord[1] === '#' || chord[1] === 'b') ? chordNotes.push(chord.slice(0,2)) : chordNotes.push(chord[0]);
    //set notes array to # or b
    (chord[1] === 'b' || chord[0] === 'F') ? notes = notesObject.flat : notes = notesObject.sharp;
    //adjust notes starting at root note
    notes = notes.slice(indexRange[chordNotes[0]],notes.length).concat(notes.slice(0,indexRange[chordNotes[0]]));
    //check major/minor and add to scale array, j checks for maj, i checks for diminished
    (chordCheck.m && !chordCheck.j && !chordCheck.i) ? indexRange.minorScale.forEach(function(x) {
        scale.push(notes[x]);
    }) : indexRange.majorScale.forEach(function(x) {
        scale.push(notes[x]);
    }) ;
    chordNotes.push(scale[2], scale[4]);
    //major7 - passed
    if (chordCheck.j) {
        chordNotes.push(scale[6]);
    }
    //sus - passed
    else if (chordCheck.s) {
        chordNotes[1] = scale[3];
    }
    //augmented
    else if(chordCheck.u) {
        console.log('augmented');
    }
    //diminished
    else if(chordCheck.i) {
        console.log('diminished');
    }
    //flat/sharp extras
    else if(chord[chord.length-2] === "#" || chord[chord.length-2] === "b") {
        console.log('flat/sharp extra')
    }
    //regular
    //need to figure a way to convert 7th to minor 7th
    //DO NOT put 'else' into this else statement
    else {
        console.log('regular');
    }
    return chordNotes;
}

console.log( chordGenerator("C#") );