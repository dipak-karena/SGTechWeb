import { NgModule } from '@angular/core';
import { ErrorSummaryComponent } from './error-summary.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ErrorSummaryComponent],
    imports: [CommonModule
    ],
    exports: [
        ErrorSummaryComponent
    ]
})
export class ErrorSummaryModule { }