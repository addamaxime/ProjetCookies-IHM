import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookiesGuard } from './guard-admin/cookies.guard';
import { GuardProfilGuard } from './guard-profil/guard-profil.guard';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AdminCookiesAddComponent } from './pages/admin/admin-cookies-add/admin-cookies-add.component';
import { AdminCookiesEditComponent } from './pages/admin/admin-cookies-edit/admin-cookies-edit.component';
import { AdminCookiesComponent } from './pages/admin/admin-cookies/admin-cookies.component';
import { AdminLoginComponent } from './pages/admin/admin-login/admin-login.component';
import { AdminUsersComponent } from './pages/admin/admin-users/admin-users.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { LoginComponent } from './pages/login/login.component';
import { PanierComponent } from './pages/panier/panier.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserInfosComponent } from './pages/user-infos/user-infos.component';

const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'cookies', component:CookiesComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'admin', component:AdminLoginComponent},
  {path:'admin-cookies', component:AdminCookiesComponent, canActivate:[CookiesGuard]},
  {path :'update/:id', component:AdminCookiesEditComponent, canActivate:[CookiesGuard]},
  {path:'add-cookie', component:AdminCookiesAddComponent, canActivate:[CookiesGuard]},
  {path:'edit-users', component:AdminUsersComponent, canActivate:[CookiesGuard]},
  {path:'profil', component:UserInfosComponent, canActivate:[GuardProfilGuard]},
  {path:'panier', component:PanierComponent},
  {path:'forbidden', component:ForbiddenComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
