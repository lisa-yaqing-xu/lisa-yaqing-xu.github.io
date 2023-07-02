import { CanActivateFn, createUrlTreeFromSnapshot} from '@angular/router';
import { LXGalleryMap } from '../config/art.config';

export const artGuard: CanActivateFn = (route, state) => {
  const id = route.paramMap.get('id');
  if(LXGalleryMap[id]){
    return true;
  }
  return createUrlTreeFromSnapshot(route, ['/art']);
};
