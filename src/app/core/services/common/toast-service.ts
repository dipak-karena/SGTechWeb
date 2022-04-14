import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class NotificationService {
    constructor(private toastr: ToastrService) { }

    showSuccess(message, title) {
        this.toastr.success(message, title);
    }

    showError(message, title) {
        this.toastr.error(message, title);
    }

    showWarning(message, title) {
        this.toastr.warning(message, title);
    }

    showHTMLMessage(message, title) {
        this.toastr.success(message, title, {
            enableHtml: true
        });
    }

    showSuccessWithTimeout(message, title, timespan) {
        this.toastr.success(message, title, {
            timeOut: timespan
        });
    }

    showErrorWithTimeout(message, title, timespan) {
        this.toastr.error(message, title, {
            timeOut: timespan
        });
    }
}

export enum MessageSeverity
{
    default,
    info,
    success,
    error,
    warn,
    wait
}