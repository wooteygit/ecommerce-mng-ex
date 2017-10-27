import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AutoTextareaElement } from './elements/auto-textarea.element';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        AutoTextareaElement
    ],
    providers: [
    ],
    exports: [
        AutoTextareaElement
    ]
})
export class SharedModule { }