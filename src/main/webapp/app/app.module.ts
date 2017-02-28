import './vendor.ts';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { JhipsterRegistrySharedModule, UserRouteAccessService } from './shared';
import { JHipsterRegistryHomeModule } from './home/home.module';
import { JHipsterRegistryApplicationsModule } from './applications/applications.module';
import { JHipsterRegistryAdminModule } from './admin/admin.module';

import { LayoutRoutingModule } from './layouts';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';


@NgModule({
    imports: [
        RouterModule,
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterRegistrySharedModule,
        JHipsterRegistryHomeModule,
        JHipsterRegistryApplicationsModule,
        JHipsterRegistryAdminModule
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        { provide: Window, useValue: window },
        { provide: Document, useValue: document },
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JHipsterRegistryAppModule {}
