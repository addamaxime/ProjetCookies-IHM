import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { FooterComponent } from './structure/footer/footer.component';
import { MenuComponent } from './structure/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field' ;
import {MatInputModule} from '@angular/material/input' ;
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './pages/login/login.component' ;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './pages/register/register.component';
import { AdminLoginComponent } from './pages/admin/admin-login/admin-login.component';
import { AdminCookiesComponent } from './pages/admin/admin-cookies/admin-cookies.component';
import { AdminCookiesEditComponent } from './pages/admin/admin-cookies-edit/admin-cookies-edit.component';
import { AdminCookiesAddComponent } from './pages/admin/admin-cookies-add/admin-cookies-add.component';
import { AdminUsersComponent } from './pages/admin/admin-users/admin-users.component';
import { UserInfosComponent } from './pages/user-infos/user-infos.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { PanierComponent } from './pages/panier/panier.component';
//import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CookiesComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    AdminLoginComponent,
    AdminCookiesComponent,
    AdminCookiesEditComponent,
    AdminCookiesAddComponent,
    AdminUsersComponent,
    UserInfosComponent,
    ForbiddenComponent,
    PanierComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
