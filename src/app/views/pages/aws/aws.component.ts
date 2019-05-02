// Angular
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Material
import { MatDialog } from '@angular/material';
// RxJS
import { Observable, BehaviorSubject, Subscription, of } from 'rxjs';
import { map, startWith, delay, first} from 'rxjs/operators';
// NGRX
import { Store, select } from '@ngrx/store';
import { Dictionary, Update } from '@ngrx/entity';
import { AppState } from '../../../core/reducers';
// Layout
import { SubheaderService, LayoutConfigService } from '../../../core/_base/layout';
// CRUD
import { LayoutUtilsService, TypesUtilsService, MessageType } from '../../../core/_base/crud';

@Component({
  selector: 'kt-aws',
  templateUrl: './aws.component.html',
  styleUrls: ['./aws.component.scss']
})
export class AwsComponent implements OnInit {
  authToken$: string;
  /**
   * Component constructor
   *
   * @param store: Store<AppState>
   * @param activatedRoute: ActivatedRoute
   * @param router: Router
   * @param dialog: MatDialog
   * @param layoutUtilsService: SubheaderService
   * @param layoutConfigService: LayoutConfigService
   */
  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private layoutUtilsService: LayoutUtilsService,
		private layoutConfigService: LayoutConfigService) {
      this.authToken$ = 'testtoken:123456789:test';
    }

    reset() {
      this.authToken$ = 'reset';
    }

  ngOnInit() {
  }

}
