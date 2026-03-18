import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRoleBased]',
  standalone: true
})
export class RoleBased {

  private userRole = 'admin'; // 👈 change kar sakta hai

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appRoleBased(role: string) {
    this.viewContainer.clear();

    if (this.userRole === role) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}