
var PhoneNumber = function(phone) {
    this.extractedPhone = '';
    this.filterNumber(phone);
};

PhoneNumber.prototype.filterNumber = function(phone) {
    if (/[a-zA-Z]/.test(phone)) {
        this.extractedPhone = null;
    } else {
        this.extractedPhone = phone.replace(/[^0-9]/g, '');
        if (this.extractedPhone.length < 10) {
            this.extractedPhone = null;
        } else if (this.extractedPhone.length > 11) {
            this.extractedPhone = null;
        } else if (this.extractedPhone.length === 11) {
            const countryCode = this.extractedPhone.charAt(0);
            if (countryCode !== '1') {
                this.extractedPhone = null;
            } else {
                this.extractedPhone = this.extractedPhone.slice(1, this.extractedPhone.length);
            }
        }

        if (this.extractedPhone && this.extractedPhone.length === 10) {
            const areaCode = this.extractedPhone.charAt(0);
            const exchangeCode = this.extractedPhone.charAt(3);

            if (areaCode < '2' || exchangeCode < '2') {
                this.extractedPhone = null;
            }
        }
    }
};

PhoneNumber.prototype.number = function() {
    return this.extractedPhone;
};

module.exports = PhoneNumber;