import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  colorValue: any = '';

  colorArray: any[] = [];

  isColorValue(colorValue: string): boolean {
    const hexColorRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
    const rgbColorRegex = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/i;
    const namedColorRegex = /^(red|green|blue)$/i;
    return (
      hexColorRegex.test(colorValue) ||
      rgbColorRegex.test(colorValue) ||
      namedColorRegex.test(colorValue)
    );
  }

  addColor() {
    if (this.isColorValue(this.colorValue)) {
      return this.colorArray.push(this.colorValue);
    } else {
      // აქ მინდოდა sweetalert დამემატებინა მაგრამ ბევრი ვიწვალე და ვერ დავამატე
      return this.colorArray.push('არასწორი ფერია ძმა');
    }
  }

  clearArray() {
    this.colorArray = [];
    this.colorValue = '';
  }
}
