
document.addEventListener("DOMContentLoaded", function() {
    var input = document.querySelector("#phoneNumber");
    var iti = window.intlTelInput(input, {
        initialCountry: "sa",
        preferredCountries: ["sa", "ae", "kw", "qa", "om"],
        separateDialCode: true,
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
    });

    window.generateLink = function() {
        var countryCode = document.getElementById("countryCode").value;
        var phoneNumber = document.getElementById("phoneNumber").value;
        var fullNumber = countryCode + phoneNumber;
        var linkOutput = document.getElementById("linkOutput");

        if (phoneNumber) {
            var link = "https://wa.me/" + fullNumber;
            linkOutput.innerHTML = "الرابط: <a href='" + link + "' target='_blank'>" + link + "</a>";
        } else {
            linkOutput.textContent = "يرجى إدخال رقم الهاتف.";
        }
    };
});
    