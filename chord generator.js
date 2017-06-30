/*
-There are 73 different chord versions, not all can be checked yet
-some notation(like C7, 7th note should give Bb but it's A# instead) needs to be adjusted
*/

//input => chord(as string) ex: "A", "F#7"
//output => array of notes of the input chord
var chordGenerator = function(chord) {
    var notesObject = {
        sharp : ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
        flat : ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"]
    }
    var index = {
        A:0,Bb:1,'A#':1,B:2,C:3,Db:4,'C#':4,D:5,Eb:6,'D#':6,E:7,F:8,Gb:9,'F#':9,G:10,Ab:11,'G#':11,
        "9":2,"11":5,"7":10,//last number index reference
        majorScale : [0,2,4,5,7,9,11],
        minorScale : [0,2,3,5,7,8,10],
    }
    var stringCheck = {};
    var notes = [];
    var chordNotes = [];
    //puts all letters and symbols into an object for checking/referencing
    for(var i=0; i<chord.length; i++) {
        stringCheck[chord[i]] = chord[i];
    }
    //check if chord is minor or major
    var isMinor = '';
    (stringCheck.m && !stringCheck.j) ? isMinor = 'yes' : isMinor = 'no';
    //set root note at chordNotes[0]
    (chord[1] === '#' || chord[1] === 'b') ? chordNotes.push(chord.slice(0,2)) : chordNotes.push(chord[0]);
    //set notes array to # or b
    //if it's minor
    if(isMinor === 'yes') {
        (chord[1]==='#' || chordNotes[0]==='E' || chordNotes[0]==='B') ? notes = notesObject.sharp : notes = notesObject.flat;
    }
    //if it's major
    else {
        (chord[1] === 'b' || chordNotes[0] === 'F') ? notes = notesObject.flat : notes = notesObject.sharp;
    }
    //adjust notes starting at root note
    notes = notes.slice(index[chordNotes[0]],notes.length).concat(notes.slice(0,index[chordNotes[0]]));
    //pushing the 3rd and 5th notes into chordNotes
    (isMinor === 'yes') ? chordNotes.push(notes[3], notes[7]) : chordNotes.push(notes[4], notes[7]) ;
    //major7 - passed
    if (stringCheck.j) {
        chordNotes.push(notes[11]);
    }
    //sus - passed
    else if (stringCheck.s) {
        chordNotes[1] = notes[5];
    }
    //augmented - passed
    else if(stringCheck.u) {
        chordNotes[2] = notes[8];
    }
    //diminished - passed
    else if(stringCheck.i) {
        chordNotes[1] = notes[3];
        chordNotes[2] = notes[6];
    }
    //if last chord index is in stringCheck, if it's not a number it will check Nan which is not in stringCheck
    else if(index[Number(chord[chord.length-1])]) {
        chordNotes.push(notes[index[chord[chord.length-1]]]);
    }
    return chordNotes;
}

//example console.log
console.log( chordGenerator("Bbm7") );