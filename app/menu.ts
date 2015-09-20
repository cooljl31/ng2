import {Component, View, bootstrap, bind, NgFor} from 'angular2/angular2';

@Component({
	selector: 'menu'
})

@View({
    template: `
	<ul>
		<li *ng-for="#m of menu">
			<a href="#">{{m}}</a>
		</li
	</ul>	
	`,
	
	styles: [`
    li {
      padding: 5px;
	  float:left;
	  list-style:none;
	  border:1px dashed;
    }
  `],
    directives: [NgFor]
})

export class Menu {
	menu: Array<any>;
    constructor() {
		this.menu = ["Hola", "Hello", "Adios", "Asta la Vista"];
    }
}
