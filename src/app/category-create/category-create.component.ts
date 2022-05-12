import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../Model/category';
import { CategoryService } from '../Service/Activity/category-service.service';


@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  category: Category = new Category();
  constructor(private categoryService: CategoryService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addCategory(){
    this.categoryService.addCategory(this.category).subscribe( data =>{
      console.log(data);
      this.goToCategoryList();
    },
    error => console.log(error));
  }

  goToCategoryList(){
    this.router.navigate(['/category']);
  }
  
  onSubmit(){
    console.log(this.category);
    //this.addCategory();
    this.categoryService.editCategory(this.category).subscribe() ;
    this.goToCategoryList();
    
  }

}