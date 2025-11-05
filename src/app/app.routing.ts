import { RouterModule, Routes } from "@angular/router";
import { CineComponent } from "./components/cine.component/cine.component";
import { HomeComponent } from "./components/home.component/home.component";
import { MusicaComponent } from "./components/musica.component/musica.component";
import { ModuleWithProviders } from "@angular/core";

const appRoutes:Routes = [
    { path:"", component:HomeComponent},
    { path:"cine", component:CineComponent},
    { path:"musica", component:MusicaComponent},
]
export const appRoutingProvider: any[] = [];
// Las propias rutas a exportar
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)