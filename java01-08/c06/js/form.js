var elForm, elSelectpackage, elPackageHint, elTerms, elTermsHint;
elForm           = document.getElementById('formSignup');
elSelectpackage  = document.getElementById('package');
elPackageHint    = document.getElementById('packageHint');
elTerms          = document.getElementById('terms');
elTermsHint      = document.getElementById('termsHint');

function PackageHint() {
    var pack = this.options[this.selectedIndex].value;
    if (pack == 'monthly'){
        elTermsHint.innerHTML = 'Save $10 ì you pay fỏ 1 year!';
        } else {
        elPackageHint.innerHTML = 'Wise choice!';
    }
}
function  checkTerms(event) {
    if (!elTerms.checked) {
        elTermsHint.innerHTML = 'You must agree to the terms.';

    }
}

elForm.addEventListener('submit', checkTerms, false);
elSelectpackage.addEventListener('changer', packageHint, false);