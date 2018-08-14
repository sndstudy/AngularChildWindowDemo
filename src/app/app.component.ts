import { Component, OnInit, ComponentFactoryResolver, Renderer2, ViewContainerRef } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private renderer: Renderer2,
              private factoryResolver: ComponentFactoryResolver,
              private viewRef: ViewContainerRef) {

  }

  ngOnInit(): void {

    // const componentFactory = this.factoryResolver.resolveComponentFactory(ChildComponent);
    // const componentRef = componentFactory.create(this.viewRef.injector);
    // const strHtml: string = componentRef.location.nativeElement.outerHTML;
    // componentRef.destroy();


    const windowItem =  window.open('./assets/child.html', 'hoge', 'width=800,height=500,location=no,scrollbars=yes');

    setTimeout(() => {

      windowItem.postMessage('hogehogehoge', '*');

    }, 100);
    // windowItem.document.open();
    // windowItem.document.write('<html><head><style></style></head><body>');
    // windowItem.document.write(strHtml);
    // windowItem.document.write('</body></html>');
    // windowItem.document.close();
  }
}
