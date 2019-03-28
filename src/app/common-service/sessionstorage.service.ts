import { Injectable } from '@angular/core';

@Injectable()

export class SessionStorageService {
    getStore(name: string) {
        if (!name) {
            return;
        }
        return window.sessionStorage.getItem(name);
      }
      setStore(name: string, content: any) {
        if (!name) {
          return;
        }
        if (typeof content !== 'string') {
          content = JSON.stringify(content);
        }
        window.sessionStorage.setItem(name, content);
      }
    
      removeStore(name: string) {
        if (!name) {
          return;
        }
        window.sessionStorage.removeItem(name);
      }
}
