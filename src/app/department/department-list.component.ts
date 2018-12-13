import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-department",
  template: `
    <div
      class="items"
      *ngFor="let d of departments"
      (click)="onSelect(d)"
      [class.selected]="isSelected(d)"
    >
      {{ d.id }}. {{ d.name }}
    </div>
  `,
  styleUrls: []
})
export class DepartmentListComponent implements OnInit {
  constructor(private route: Router, private activatedRoute: ActivatedRoute) {}
  public selectedId;
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((p: ParamMap) => {
      this.selectedId = parseInt(p.get("id"));
    });
  }

  title = "CodeSandbox";
  departments = [
    { id: 1, name: "Angular" },
    { id: 2, name: "React Js" },
    { id: 3, name: "Rx JS" }
  ];
  onSelect(d) {
    this.route.navigate(["/departments", d.id]);
  }
  isSelected(department) {
    return department.id === this.selectedId;
  }
}
