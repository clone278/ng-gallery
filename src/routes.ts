import {Routes} from '@angular/router';
import {GalleryComponent} from "./app/components/gallery/gallery.component";
import {ImageComponent} from './app/components/image/image.component';


export const appRoutes:Routes = [

  { path: "gallery", component: GalleryComponent },
  { path: "image/:id", component: ImageComponent },
  { path: "", redirectTo: "/gallery", pathMatch: 'full' }
]
