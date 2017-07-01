import { Injectable } from '@angular/core';

@Injectable()
export class ImageService{

  visibleImages = [];

  getImages()
  {
    // slice 0 is like taking from index 0 to the end
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number)
  {
    return IMAGES.slice(0).find(image => image.id == id);
  }


}

const IMAGES = [
  { "id": 1, "category": "boating", "caption": "View from boat", "url": "assets/img/boating_01.jpg" },
  { "id": 2, "category": "boating", "caption": "View from another boat", "url": "assets/img/boating_02.jpg" },
  { "id": 3, "category": "camping", "caption": "Camping view", "url": "assets/img/camping_01.jpg" },
  { "id": 4, "category": "camping", "caption": "More camping", "url": "assets/img/camping_02.jpg" },
  { "id": 5, "category": "hiking", "caption": "Lovely hiking", "url": "assets/img/hiking_01.jpg" },
  { "id": 6, "category": "climbing", "caption": "Show me climbing", "url": "assets/img/climbing_01.jpg" }
]
