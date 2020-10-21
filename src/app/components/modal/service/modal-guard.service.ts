import {
    ActivatedRouteSnapshot,
    CanDeactivate,
    RouterStateSnapshot,
    UrlTree
} from '@angular/router'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { ModalComponent } from '../modal.component'

export interface ModalGuard {
    modalComponent: ModalComponent
    shouldGuard?(): boolean
    applyToUrls?: string[]
    excludeUrls?: string[]
}

@Injectable()
export class ModalGuardService implements CanDeactivate<ModalGuard> {
    constructor() {}

    canDeactivate(
        guard: ModalGuard,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if ((guard.shouldGuard === undefined || guard.shouldGuard()) &&
            (guard.excludeUrls === undefined || guard.excludeUrls.indexOf(nextState?.url) === -1) &&
            (guard.applyToUrls === undefined || guard.applyToUrls.indexOf(nextState?.url) > -1)) {
            return guard.modalComponent.open()
        }
        return true
    }
}
