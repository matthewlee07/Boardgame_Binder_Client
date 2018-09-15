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
import { MatButtonModule, MatCheckboxModule, MatNativeDateModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './user.service';
import { LoginRouteGuard } from './loginRouteGuard';
import { UserBoardgamesService } from './user-boardgames.service';
import { EditGameFormComponent } from './edit-game-form/edit-game-form.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'userLogin', component: UserLoginComponent },
  { path: 'userSignUp', component: UserSignUpComponent },
  { path: 'boardgameInfo', component: BoardgameInfoComponent },
  { path: 'userSettings', component: UserSettingsComponent, canActivate: [LoginRouteGuard] },
  { path: 'userBoardgames', component: UserBoardgamesComponent, canActivate: [LoginRouteGuard] },
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
    EditGameFormComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule, MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatNativeDateModule
  ],
  providers: [BoardgameService, UserService, LoginRouteGuard, UserBoardgamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
