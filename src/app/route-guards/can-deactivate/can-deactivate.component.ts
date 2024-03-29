import { Observable } from "rxjs";

import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";

import { DialogService } from "../../dialog.service";

@Component({
  selector: "app-can-deactivate",
  standalone: true,
  imports: [],
  templateUrl: "./can-deactivate.component.html",
})
export class CanDeactivateComponent {
  dataHasChanged = false;
  private dialogService = inject(DialogService);
  private router = inject(Router);

  changeData() {
    this.dataHasChanged = true;
  }
  back() {
    this.router.navigate(["route-guards"]);
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.dataHasChanged) {
      return true;
    }
    return this.dialogService.confirm("Discard changes?");
  }
}
