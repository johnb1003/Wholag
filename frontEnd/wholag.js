//let squad = ["Member 1", "Member 2", "Member 3", "Member 4"];
let MAX_SQUAD = 4;
memberStringNames = ['squad1', 'squad2', 'squad3', 'squad4']
let squadNames = [];
let picMem1 = 'https://vignette.wikia.nocookie.net/callofduty/images/0/06/Grinch_MW.PNG/revision/latest/scale-to-width-down/350?cb=20191101033554';
let picMem2 = 'https://vignette.wikia.nocookie.net/callofduty/images/5/58/SimonRiley_Ghost_Season3_Intro_MW.png/revision/latest?cb=20200409114341'
let picMem3 = 'https://vignette.wikia.nocookie.net/callofduty/images/f/f3/Alex_CampaignReveal_MW.jpg/revision/latest/scale-to-width-down/350?cb=20190925093902'
let picMem4 = 'https://vignette.wikia.nocookie.net/callofduty/images/a/a4/KyleGarrick_MW.jpg/revision/latest/scale-to-width-down/350?cb=20190925112741'

function getMember() {
    if(squadNames.length < MAX_SQUAD) {
        let input = document.getElementById('members');
        squadNames.push(input.value);
        updateMembersView();
        //document.getElementById(memberStringNames[squadNames.length-1]).style.display = block;
    }
    else {
        alert("Couldn't add member. Already at maximum squad capacity!");
    }
}

function deleteMember(index) {
    if(index >= 0 && index < squadNames.length) {
        squadNames.splice(index, 1);
        updateMembersView();
        document.getElementById(memberStringNames[squadNames.length-1]).style.display = none;
    }
}

function updateMembersView() {
    for(i=0; i<squadNames.length; i++) {
        document.getElementById(memberStringNames[i]).innerHTML = squadNames[i];
    }
    document.getElementById('squad1').innerHTML = squadNames[0];
}