import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-loading-error-indicator",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./loading-error-indicator.component.html",
})
export class LoadingErrorIndicatorComponent {
  @Input() isLoading: boolean = false;
  @Input() isError: boolean = false;
}
