class Contact {
    // private instance members 
    fullName;
    contactNumber;
    emailAddress;
    //public properties
    get FullName() {
        return this.fullName;
    }
    set FullName(name) {
        this.fullName = name;
    }
    get ContactNumber() {
        return this.contactNumber;
    }
    set ContactNumber(number) {
        this.contactNumber = number;
    }
    get EmailAddress() {
        return this.emailAddress;
    }
    set EmailAddress(email) {
        this.emailAddress = email;
    }
    // constructor
    constructor(fullName = "Unknown name", contactNumber = "no data", emailAddress = "no data") {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }
    // public methods
    toString() {
        let outputString = "";
        outputString += `Full Name: ${this.FullName}\n`;
        outputString += `Full Name: ${this.ContactNumber}\n`;
        outputString += `Full Name: ${this.EmailAddress}\n`;
        return outputString;
    }
}
//# sourceMappingURL=contact.js.map