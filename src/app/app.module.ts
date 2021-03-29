// Angular/cli et core
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';

// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

// Service
import { AuthService } from './services/auth-service';
import { BlogServiceService } from './services/blog-service.service';
import { TroncText } from './services/pipe/tronc-text';

//Component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { BlockListComponent } from './block-list/block-list.component';
import { BlockCreerComponent } from './block-creer/block-creer.component';
import { DialogComponent } from './mat-dialog/dialog/dialog.component';
import { NavComponent } from './nav/nav.component';
import { OutilsComponent } from './outils/outils.component';
import { CompteurCalComponent } from './compteur-cal/compteur-cal.component';
import { MediaComponent } from './media/media.component';
import { AdminComponent } from './admin/admin.component';
import { MediaCreerComponent } from './media-creer/media-creer.component';
import { CubeComponent } from './animation/cube/cube.component';
import { ConstructionComponent } from './construction/construction.component';
import { ArticleComponent } from './article/article.component';
import { EspaceAdminComponent } from './espace-admin/espace-admin.component';
import { DialSuppComponent } from './mat-dialog/dial-supp/dial-supp.component';
import { DialModifComponent } from './mat-dialog/dial-modif/dial-modif.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FooterComponent,
    ConnexionComponent,
    BlockListComponent,
    BlockCreerComponent,
    NavComponent,
    DialogComponent,
    OutilsComponent,
    CompteurCalComponent,
    MediaComponent,
    AdminComponent,
    MediaCreerComponent,
    CubeComponent,
    ConstructionComponent,
    TroncText,
    ArticleComponent,
    EspaceAdminComponent,
    DialSuppComponent,
    DialModifComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    EditorModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
