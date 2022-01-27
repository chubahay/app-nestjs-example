import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  
  getDog(): string {
    return 'Thanks for the get request - Dog';
  }
  
  postCow(): string {
    return 'Thanks for the post request - Cow';
  }

}
