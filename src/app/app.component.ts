import { Component } from '@angular/core';
import { Test0Service } from './services/test-0.service';
import { Test1Service } from './services/test-1.service';
import { Test2Service } from './services/test-2.service';
import { Test3Service } from './services/test-3.service';
import { Test4Service } from './services/test-4.service';
import { Test5Service } from './services/test-5.service';
import { Test6Service } from './services/test-6.service';
import { Test7Service } from './services/test-7.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // The following will fail due to too many constructor arguments
  constructor(
    test0Service: Test0Service,
    test1Service: Test1Service,
    test2Service: Test2Service,
    test3Service: Test3Service,
    test4Service: Test4Service,
    test5Service: Test5Service,
    test6Service: Test6Service,
    test7Service: Test7Service
  ) {}
}
