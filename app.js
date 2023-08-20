let btn = document.getElementById('btn');
let text = document.getElementById('text');

btn.addEventListener('click', () => {
    if (text.value == "") {
        Swal.fire({
            title: `Input`,
            text: `Please Filled Input First`,
            icon: 'error',
            confirmButtonText: 'OK'
          })
    } else {
        let speak = new SpeechSynthesisUtterance(text.value);
        speechSynthesis.speak(speak);
    }
});