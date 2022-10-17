const myform =document.querySelector('#my-form');
const nameinput =document.querySelector('#name');
const emailinput =document.querySelector('#email');
const msg =document.querySelector('.msg');
const userlist =document.querySelector('.users');

myform.addEventListener('submit', onSubmit);

function onSubmit(e){
    
    e.preventDefault();
    if(nameinput.value ==='' || emailinput.value ===''){
        // alert('Please enetr all field')
        // document.querySelector('.users').lastElementChild.innerHTML="Please enter the field"
        document.querySelector('body').style.background='black';
        document.querySelector('.whole').innerHTML="SO, DARE YOU CLICK WITHOUT ENTERING VALUE";
        msg.classList.add('error');
        msg.innerHTML='Please enter all fields';
        setTimeout(() => msg.remove(), 2000);
        // setTimeout(() => users.remove(), 2000);
    } else{
        const li =document.createElement('li');
        li.appendChild(document.createTextNode(`${nameinput.value}: ${emailinput.value}`));
        userlist.appendChild(li);
    
    //clear fields
    nameinput.value='';
    emailinput.value='';
    }

}