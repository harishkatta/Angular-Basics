import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DepartmentListComponent } from "./department/department-list.component";
import { DepartmentDetails } from "./department/department-details.component";
import { EmployeeListComponent } from "./employee/employee-list.component";
import { PageNotFound } from "./page-not-found/page-not-found.component";
import { DepartmentContact } from "./department/department-contact.component";
import { DepartmentOverview } from "./department/department-overview.component";

const routes: Routes = [
  //{ path: "", component: DepartmentListComponent },
  { path: "", redirectTo: "/departments", pathMatch: "full" }, //if full url is empty redirecto depeartment component
  { path: "departments", component: DepartmentListComponent },
  {
    path: "departments/:id",
    component: DepartmentDetails,
    children: [
      { path: "overview", component: DepartmentOverview },
      { path: "contact", component: DepartmentContact }
    ]
  },
  { path: "employees", component: EmployeeListComponent },
  { path: "**", component: PageNotFound }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  DepartmentListComponent,
  DepartmentDetails,
  EmployeeListComponent,
  DepartmentContact,
  DepartmentOverview,
  PageNotFound
];
