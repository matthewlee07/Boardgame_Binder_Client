import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { BoardgameInfoComponent } from './boardgame-info/boardgame-info.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserBoardgamesComponent } from './user-boardgames/user-boardgames.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BoardgameSearchFormComponent } from './boardgame-search-form/boardgame-search-form.component';
import { BoardgameService } from './boardgame.service';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmPasswordDirective } from './confirm-password.directive';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'userLogin', component: UserLoginComponent },
  { path: 'userSignUp', component: UserSignUpComponent },
  { path: 'boardgameInfo', component: BoardgameInfoComponent },
  { path: 'userSettings', component: UserSettingsComponent },
  { path: 'userBoardgames', component: UserBoardgamesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UserLoginComponent,
    UserSignUpComponent,
    BoardgameInfoComponent,
    UserSettingsComponent,
    UserBoardgamesComponent,
    NavbarComponent,
    BoardgameSearchFormComponent,
    ConfirmPasswordDirective,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule, MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule
  ],
  providers: [BoardgameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
