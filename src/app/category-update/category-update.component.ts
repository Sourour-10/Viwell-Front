import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../Model/category';
import { CategoryService } from '../Service/Activity/category-service.service';


@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {

  id: number;
  category: Category = new Category();
  constructor(private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.categoryService.getCategoryById(this.id).subscribe(data => {
      this.category = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.categoryService.editCategory(this.category).subscribe( data =>{
      this.goToCategoryList();
    }
    , error => console.log(error));
  }

  goToCategoryList(){
    this.router.navigate(['/categorys']);
  }

}
