/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SendMessageService } from './send-message.service';

describe('SendMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendMessageService]
    });
  });

  it('should ...', inject([SendMessageService], (service: SendMessageService) => {
    expect(service).toBeTruthy();
  }));
});
