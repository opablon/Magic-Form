let array;

let formData;

let data;
let currentFormData;

if (localStorage.getItem('formArray') === null) {   // if local storage is null declare empty array
    array = [];
} else {                                                         // if local storage has data store it in array
    array = JSON.parse(localStorage.getItem('formArray'));
}

let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let company = document.getElementById('company');
let address = document.getElementById('address');

let elDivo;

function savingForm() {

    if (fname.value && lname.value && email.value && phone.value && company.value && address.value) {

        formData = {
            fname: fname.value,
            lname: lname.value,
            email: email.value,
            phone: phone.value,
            company: company.value,
            address: address.value,
        };

        array.push(formData);

        localStorage.setItem('formArray',JSON.stringify(array));

        fname.value="";
        lname.value="";
        email.value="";
        phone.value="";
        company.value="";
        address.value="";
    }
}

window.onload = (event) => {

    if (localStorage.getItem('currentFormData') && fname) {

        currentFormData = JSON.parse(localStorage.getItem('currentFormData'));
        fname.value = currentFormData.fname;
        lname.value = currentFormData.lname;
        email.value = currentFormData.email;
        phone.value = currentFormData.phone;
        company.value = currentFormData.company;
        address.value = currentFormData.address;

    }

    if (localStorage.getItem('formArray')) {

        elDivo = document.getElementById('elDivo');

        if (elDivo) {

            array = JSON.parse(localStorage.getItem('formArray'));

            for (let i = 0; i < array.length; i++) {

                data = array[i];

                elDivo.innerHTML += `
                <div class="submit-history-card">
                <br>
                <label>First Name</label>
                <p class="card-first-name">${data.fname}</p>
                <br>
                <label>Last Name</label>
                <p class="card-last-name">${data.lname}</p>
                <br>
                <label>Email</label>
                <p class="card-email">${data.email}</p>
                <br>
                <label>Phone</label>
                <p class="card-phone">${data.phone}</p>
                <br>
                <label>Company</label>
                <p class="card-company">${data.company}</p>
                <br>
                <label>Address</label>
                <p class="card-address">${data.address}</p>
                <br>
                <button type="button" id="div${i}" class="delete-button" onclick="deleteDiv(${i})">Delete</button>
                </div>
            `
            }
        }
    }
}

function deleteDiv(i) {
    let child = document.getElementById('div' + i)  ;
    child.parentElement.remove();
    array.splice(i, 1);
    localStorage.clear();
    localStorage.setItem('formArray', JSON.stringify(array));
}

const saveCurrentFormData = e => {
    currentFormData = {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        phone: phone.value,
        company: company.value,
        address: address.value,
    }
    localStorage.setItem('currentFormData',JSON.stringify(currentFormData));
}
