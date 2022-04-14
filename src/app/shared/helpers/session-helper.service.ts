import { Injectable } from '@angular/core';
import { Subject, Subscription, timer } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core/services/common/auth.service';


@Injectable({
    providedIn: 'root'
})
export class SessionHelperService {
    minutesDisplay = 0;
    secondsDisplay = 0;
    endTime = 30;
    unsubscribe$: Subject<void> = new Subject();
    timerSubscription: Subscription;
    isSessionStarted: boolean = false;

    constructor(private authService: AuthenticationService) {
        this.authService.userActionOccured.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
            if (this.timerSubscription) {
                this.timerSubscription.unsubscribe();
            }
            this.resetTimer();
        });
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    resetTimer(endTime: number = this.endTime) {
        if (!this.authService.isLoggedIn()) {
            return
        }
        this.isSessionStarted = true;
        const interval = 1000;
        const duration = endTime * 60;
        this.timerSubscription = timer(0, interval).pipe(
            take(duration)
        ).subscribe(value =>
            this.render((duration - +value) * interval),
            err => { },
            () => {
                this.authService.logout();
            }
        )
    }

    private render(count: number) {
        this.secondsDisplay = this.getSeconds(count);
        this.minutesDisplay = this.getMinutes(count);
    }

    private getSeconds(ticks: number) {
        const seconds = ((ticks % 60000) / 1000).toFixed(0);
        return this.pad(seconds);
    }

    private getMinutes(ticks: number) {
        const minutes = Math.floor(ticks / 60000);
        return this.pad(minutes);
    }

    private pad(digit: any) {
        return digit <= 9 ? '0' + digit : digit;
    }
}