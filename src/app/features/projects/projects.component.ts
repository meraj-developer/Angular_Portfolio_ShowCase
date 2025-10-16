import { Component } from '@angular/core';
import { ProjectService } from '../../cors/project.service';
import { ILaptopData, IMobileData } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  protected storeProduct: ILaptopData[] = []
  protected mobileProduct: IMobileData[] = []

  constructor(private productData: ProjectService) { }

  ngOnInit() {
    this.storeProduct = this.productData.getLaptopData()
    this.mobileProduct = this.productData.getMobileData()
  }

  protected count: number = 1

  protected showCart: boolean = false

  protected IncrementItem() {
    this.count++;
  }

  protected decrementItem() {
    this.count--;
  }

  protected addToCartProduct() {
    this.showCart = true
  }

}
