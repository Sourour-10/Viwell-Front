import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../Model/category';
import { CategoryService } from '../Service/Activity/category-service.service';


@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  id: number
  category: Category
  constructor(private route: ActivatedRoute, private employeService: CategoryService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.category = new Category();
    this.employeService.getCategoryById(this.id).subscribe( data => {
      this.category = data;
    });
  }

}
