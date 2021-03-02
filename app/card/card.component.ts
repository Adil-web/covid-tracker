import { Component, OnInit, Input } from "@angular/core";
import { Card } from "../app.component";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    interpolation: ['{=', '=}']
})
export class CardComponent implements OnInit {

    @Input() card: Card
    @Input() index: number

    title:string = 'Card title'
    text:string = 'Text'
    number:number = 42
    list = [1, 2]
    obj = {
        name: 'Dio',
        stand: 'Zawarudo'
    }
    imgUrl:string = 'https://images.vexels.com/media/users/3/157837/isolated/lists/db181fb308b9a32197d9c3cadc58c4d3-asymmetric-cut-hair-woman-avatar.png'
    imgUrl2:string = 'https://image.flaticon.com/icons/png/128/924/924874.png'
    disabled:boolean = false
    textColor:string
    cardDate: Date = new Date()

    ngOnInit() {
        
    }
    
    getInfo():string {
        return 'info'
    }

    changeImage() {
        this.imgUrl = this.imgUrl2
    }
    changeTitle() {
        this.title = 'Changed'
    }
    inpModel(event:any) {
        console.log(event)
        this.title = event
    }
}