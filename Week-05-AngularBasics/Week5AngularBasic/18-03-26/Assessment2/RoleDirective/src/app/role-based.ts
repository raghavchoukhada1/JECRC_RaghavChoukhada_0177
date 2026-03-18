import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRoleBased]',
  standalone: true
})
export class RoleBasedDirective {

  private userRole = 'admin';

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