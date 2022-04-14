import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
    constructor() { }

    getValue(key: string): string {
        return localStorage.getItem(key);
    }

    setValue(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    removeValue(key: string): void {
        localStorage.removeItem(key);
    }
}

export class StorageKey {
    public static currentLanguage = 'currentLanguage';
    public static currentUser = 'currentUser';
    public static authToken = 'authToken';
    public static companyData = 'companyData';
    public static dateformat = 'dateformat';
    public static datetimeformat = 'datetimeformat';
    public static sessionID = 'sessionID';
    public static profileFullName = 'profileFullName';
    public static profilePicPath = 'profilePicPath';
    public static commonmessage = 'commonmessage';
    public static userMenu = 'userMenu';
    public static timeout = 'timeout';
    
}