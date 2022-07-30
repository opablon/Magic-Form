const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const company = document.getElementById('company');
const address = document.getElementById('address');

window.onload = () => {
    let data = JSON.parse(localStorage.getItem('formData'));
    fname.value = data.fname;
    lname.value = data.lname;
    email.value = data.email;
    phone.value = data.phone;
    company.value = data.company;
    address.value = data.address;
}

const savingData = e => {
    let formData = {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        phone: phone.value,
        company: company.value,
        address: address.value,
    }
    localStorage.setItem('formData',JSON.stringify(formData));
    // console.log(formData);
}
