class Contact
{   
    // private instance members 
    private fullName: string;
    private contactNumber: string;
    private emailAddress: string;

    //public properties
    get FullName(): string
    {
        return this.fullName;
    }

    set FullName(name: string)
    {
        this.fullName = name;
    }

    get ContactNumber(): string
    {
        return this.contactNumber;
    }

    set ContactNumber(number: string)
    {
        this.contactNumber = number;
    }

    get EmailAddress(): string
    {
        return this.emailAddress;
    }

    set EmailAddress(email: string)
    {
        this.emailAddress = email;
    }

    // constructor
    constructor(fullName: string = "Unknown name", contactNumber: string = "no data", emailAddress: string = "no data")
    {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
        
    }

    // public methods
    public toString(): string
    {
        let outputString = "";
        outputString += `Full Name: ${this.FullName}\n`;
        outputString += `Full Name: ${this.ContactNumber}\n`;
        outputString += `Full Name: ${this.EmailAddress}\n`;

        return outputString;
    }
    //private methods
}