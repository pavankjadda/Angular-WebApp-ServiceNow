import { enableProdMode, importProvidersFrom } from "@angular/core";
import { environment } from "./environments/environment";
import { AppComponent } from "./app/app.component";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { provideAnimations } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { httpInterceptorProviders } from "./app/core/intercepters/httpInterceptorProviders";
import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withPreloading,
  withRouterConfig,
} from "@angular/router";
import { routes } from "./app/app-routes";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
    ),
    provideRouter(
      routes,
      withRouterConfig({
        onSameUrlNavigation: "reload",
      }),
      withInMemoryScrolling(),
      withPreloading(PreloadAllModules),
      withComponentInputBinding(),
      withRouterConfig({
        paramsInheritanceStrategy: "always",
      }),
    ),
    httpInterceptorProviders,
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
  ],
}).catch((err) => console.error(err));
