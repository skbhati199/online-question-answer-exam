import { Injectable } from '@angular/core';

@Injectable()
export class WindowService {

  constructor() { }

  get windowRef() {
    return window
  }

}
