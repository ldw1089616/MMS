import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
    export class PermissionGuard   implements CanActivate {

        constructor(
            private router: Router
            ) { }

    　　canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // 返回值 true: 跳转到当前路由 false: 不跳转到当前路由
        // 当前路由名称
        const path = route.routeConfig.path;
        // 当前路由是login时
        const token = sessionStorage.getItem('token');
        if (path === 'login') {
            if (!token) {
                // 未登录，跳转到当前路由
                return true;
            } else {
                // 已登录，跳转到home
                this.router.navigate(['home']);
                return false;
            }
        // nextRoute: 设置需要路由守卫的路由集合
        // const nextRoute = ['home', 'good-list', 'good-detail', 'cart', 'profile'];
        // let isLogin = userModel.isLogin;  // 是否登录
    　　} else {
        if (!token) {
            // 未登录，跳转到当前路由
            this.router.navigate(['login']);
            return false;
        } else {
            return true;
        }
    }
    }
}
