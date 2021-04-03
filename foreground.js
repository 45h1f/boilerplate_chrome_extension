console.log('From foreground script');

/*document.querySelector('body .profile-pict-img').classList.add('spin')
document.querySelector('body').classList.add('dark')*/


const first = document.createElement('button');
first.innerText = "Set Data";
first.id = "first";

const sec = document.createElement('button');
sec.innerText = "Shutout from backend";
sec.id = "sec";


document.querySelector('body').appendChild(first);
document.querySelector('body').appendChild(sec);

first.addEventListener('click', () => {
    chrome.storage.local.set({
        "color": "red"
    });
    alert('i am set');
})