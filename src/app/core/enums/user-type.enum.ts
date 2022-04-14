export enum UserTypeEnum {
    SuperAdmin = 'SuperAdmin',
    Admin = 'Admin',
    User = 'User'
}

export enum ValidationEnum {
    phonemask = "[- +()0-9]+",
    Faxmask = "[0-9]",
    emailpatten = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$",
    numericFieldMask = "0000000000000",
    decimalFieldMask = "0000000000000.00"

}

export enum CommanGridEnum {
    mobileScreenWidth = 768,
    pagesize = 10
}

export enum DateFormateEnum {
    dateFormate = "MM/DD/YYYY",
    datetimeFormate = "MM/DD/YYYY h:m a"
}
export enum PayTypeEnum {
    monthly = "Monthly",
    hourly = "Hourly"
}
export enum ShiftSelectEnum {
    single = "Single",
    multiple = "Multiple"

}
export enum PageModeEnum {
    add = "Add",
    edit = "Edit",
    view = "View",

}