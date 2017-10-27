import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
    pics: string[] = [];

    constructor() { }

    ngOnInit() {
    }

    removePic(i: number): void {
        this.pics.splice(i, 1);
    }

    fileChange(e): void {
        var inputFile = e.target;
        var file = inputFile.files[0];
        if (!file) {
            return;
        }

        var formData = new FormData(inputFile.parentNode);

        let self = this;
        var reader = new FileReader();
        reader.onload = function () {
            self.pics.push(this.result);
            inputFile.value = null;
        }
        reader.readAsDataURL(file);
    }
}
