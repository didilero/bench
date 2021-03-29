import { Component, Inject, OnInit } from '@angular/core';
import { BlogServiceService } from '../services/blog-service.service';
import { Post } from '../interfaces/post';
import { Observable } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { DialSuppComponent } from '../mat-dialog/dial-supp/dial-supp.component';
import { DialModifComponent } from '../mat-dialog/dial-modif/dial-modif.component';

@Component({
  selector: 'app-espace-admin',
  templateUrl: './espace-admin.component.html',
  styleUrls: ['./espace-admin.component.scss'],
})
export class EspaceAdminComponent implements OnInit {
  lesPosts: any = [];
  displayedColumns: string[] = ['select', 'titre', 'desc', 'corps', 'img'];
  selection: SelectionModel<Post>;

  constructor(private db: BlogServiceService, private dialogue: MatDialog) {
    this.db.getPostInfo().subscribe((value) => {
      //console.log(value);
      this.lesPosts = value;
    });

    const initialSelection: Post[] | undefined = [];
    this.selection = new SelectionModel<Post>(false, initialSelection);
  }

  ngOnInit(): void {}

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.lesPosts.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection.*/
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.lesPosts.forEach((row: Post) => this.selection.select(row));
  }

  supprimer() {
    const estSur = this.dialogue.open(DialSuppComponent);
    estSur.afterClosed().subscribe((result) => {
      if (result) {
        this.selection.selected.forEach((tab) => {
          console.log(tab);
          if (tab.key !== undefined) {
            this.db.supprimerPost(tab.key);
          }
        });
      }
    });
  }

  modifier() {
    this.selection.selected.forEach((ligne) => {
      this.dialogue.open(DialModifComponent, {
        data: ligne,
      });
      console.log(ligne);
    });
  }
}
