import { Injectable } from '@angular/core';
import { IOverlay } from '../interfaces/overlay.interface';

@Injectable({
  providedIn: 'root'
})
export class OverlayHandlerService {

  constructor() { }

  setup(): IOverlay {
    document.body.classList.add('overlay-visible');
    const teardown = () => {
      document.body.classList.remove('overlay-visible');
    };
    return { teardown };
  }
}
