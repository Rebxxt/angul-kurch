import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Tab} from './infrastructure/types/tab';

@Component({
  selector: 'app-tabs-controller',
  templateUrl: './tabs-controller.component.html',
  styleUrls: ['./tabs-controller.component.scss']
})
export class TabsControllerComponent implements AfterViewInit {

  public activeTab: Tab;

  @Input('tabs') tabs: Tab[];
  @Input('defaultOpen') defaultOpen = 0;
  @Input('backgroundColor') backgroundColor = 'white';
  @Input('tabColor') tabColor = '#999';
  @Input('tabTextColor') tabTextColor = 'black';
  @Input('tabActiveColor') tabActiveColor = '#333';
  @Input('tabActiveTextColor') tabActiveTextColor = 'black';


  @ViewChild('dialogView', { read: ViewContainerRef }) dialogView: ViewContainerRef;

  constructor(
    private readonly componentFactory: ComponentFactoryResolver,
    private readonly cdr: ChangeDetectorRef,
  ) { }

  public ngAfterViewInit(): void {
    this.setComponent(this.tabs[this.defaultOpen]);
    this.cdr.detectChanges();
  }


  public setComponent(tab: Tab): void {
    this.activeTab = tab;
    this.dialogView.clear();
    const factory = this.componentFactory.resolveComponentFactory(tab.component);
    this.dialogView.createComponent(factory);
  }
}
