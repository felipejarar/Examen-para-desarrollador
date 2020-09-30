import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { StorageService } from '../services/storage.service';

@Injectable({ providedIn: 'root' })
// Route Guard
// Prevent unauthenticated users from accessing restricted routes
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private storageService: StorageService
    ) { }

    // If returns true, the route is allowed to continue
    // If returns false, the route is redirected to the login page
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.storageService.isAuthenticated()) {
            return true; // user is logged
        }
        this.router.navigate(['/login']);
        return false; // user is not logged
    }
}