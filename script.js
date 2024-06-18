
function generateLink() {
    const countryCode = document.getElementById('countryCode').value;
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    if(phoneNumber) {
        const link = `https://wa.me/${countryCode}${phoneNumber}`;
        document.getElementById('link').innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
    } else {
        document.getElementById('link').innerHTML = 'الرجاء إدخال رقم هاتف صالح';
    }
}
