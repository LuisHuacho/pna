import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { PostulationPageComponent } from './pages/postulation-page/postulation-page.component';
import { FieldTypeComponent } from './components/field-type/field-type.component';
import { PasswordrecoverPageComponent } from './pages/passwordrecover-page/passwordrecover-page.component';
import { FormTabComponent } from './components/form-tab/form-tab.component';
import { PreloaderWidgetComponent } from './components/preloader-widget/preloader-widget.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { PostulacionDownloadComponent } from './pages/postulacion-download/postulacion-download.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    LoginPageComponent,
    RegisterPageComponent,
    FooterComponent,
    SideMenuComponent,
    PostulationPageComponent,
    FieldTypeComponent,
    PasswordrecoverPageComponent,
    FormTabComponent,
    PreloaderWidgetComponent,
    ProfilePageComponent,
    PostulacionDownloadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    NgxDropzoneModule,
    NgxMaskModule.forRoot(),
    NzTreeSelectModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
