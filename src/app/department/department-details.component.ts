import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";

@Component({
  selector: "app-dep-details",
  template: `
    <div>You selected department with id:{{ depId }}</div>
    <div>
      <button (click)="showOverView()">overview</button>
      <button (click)="showContact()">contact</button>
    </div>
    <router-outlet></router-outlet>
    <div>
      <a (click)="goPrevious()">Previous</a> <a (click)="goNext()">Next</a>
    </div>
    <div>
      <button (click)="goBackToDepartments()">Back To Departments</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetails implements OnInit {
  public depId;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    //this.depId = parseInt(this.route.snapshot.paramMap.get("id"));
    this.activatedRoute.paramMap.subscribe((p: ParamMap) => {
      this.depId = parseInt(p.get("id"));
    });
  }
  goPrevious() {
    console.log(this.depId - 1);
    let prevId = this.depId - 1;
    this.router.navigate(["/departments", prevId]);
  }
  goNext() {
    console.log(this.depId + 1);
    let nextId = this.depId + 1;
    this.router.navigate(["/departments", nextId]);
  }
  goBackToDepartments() {
    this.router.navigate(["/departments", { id: this.depId }]);
  }
  showOverView() {
    this.router.navigate(["overview"], { relativeTo: this.activatedRoute });
  }
  showContact() {
    this.router.navigate(["contact"], { relativeTo: this.activatedRoute });
  }
}
