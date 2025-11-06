import { RouterModule, Routes } from "@angular/router";
import { CineComponent } from "./components/cine.component/cine.component";
import { HomeComponent } from "./components/home.component/home.component";
import { MusicaComponent } from "./components/musica.component/musica.component";
import { ModuleWithProviders } from "@angular/core";
import { NotfoundComponent } from "./components/notfound.component/notfound.component";
import { NumeroDobleComponent } from "./components/numero.doble.component/numero.doble.component";

const appRoutes:Routes = [
    { path:"", component:HomeComponent},
    { path:"cine", component:CineComponent},
    { path:"musica", component:MusicaComponent},
    { path:"numeroDoble", component:NumeroDobleComponent},
    { path:"numeroDoble/:numero", component:NumeroDobleComponent},
    { path:"**", component:NotfoundComponent},
]
export const appRoutingProvider: any[] = [];
// Las propias rutas a exportar
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)