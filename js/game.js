const choices = ['Πέτρα', 'Ψαλίδι', 'Χαρτί']
let choice, computer_choice;
let player_score = 0;
let computer_score = 0;
const info = document.querySelector('#info');

function play(choice){
    computer_choice = Math.floor(Math.random() * 3)
    info.innerText = `Επιλέξατε ${choices[choice]}, ο υπολογιστής επέλεξε ${choices[computer_choice]}`;
    if (choice === computer_choice) return;
    if (choice - computer_choice == -1 || choice - computer_choice == 2) {
        player_score++;
        document.querySelector('#player-score').innerText = player_score;
    } else {
        computer_score++;
        document.querySelector('#computer-score').innerText = computer_score;
    }

}

document.querySelector('#rock').addEventListener('click',()=>{
    choice = 0
    play(choice)
});

document.querySelector('#scissors').addEventListener('click',()=>{
    choice = 1
    play(choice)
});
document.querySelector('#paper').addEventListener('click',()=>{
    choice = 2
    play(choice)
});