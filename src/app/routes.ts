import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { AddMovieFormComponent } from './movie/addmovie-form.component';
import { EditMovieFormComponent } from './movie/editmovie-form.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent,canActivate:[AuthGuard] },
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    { path : '', redirectTo:'/home', pathMatch : 'full'},
    { path: 'movie/:id', component: MovieComponent, canActivate:[AuthGuard]},
    { path: 'addMovie', component: AddMovieFormComponent, canActivate:[AuthGuard]},
    { path: 'editMovie/:id', component: EditMovieFormComponent, canActivate:[AuthGuard]},
];