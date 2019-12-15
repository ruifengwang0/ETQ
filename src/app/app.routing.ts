import { Routes } from '@angular/router';

import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; 
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';

export const routes: Routes = 
	[
	// { path:'', component:LoginComponent},
	{ path:'', component:HomeComponent},

	{ path:'home', component:HomeComponent},

	{ path:'signup', component: SignupComponent},

	{ path:'men', component: MenComponent},

	{ path:'women', component: WomenComponent},

	{ path:'demo', component: DemoComponent},

	{ path: '**', redirectTo:'/', pathMatch:'full'}
	]	
	
