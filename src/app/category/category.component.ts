import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from '../Model/category';
import { CategoryService } from '../Service/Activity/category-service.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  console = console;
  listCategorys: any;
  categorys: Category[];
  closeResult!: string;
  form: boolean = false;

  constructor(private categoryService: CategoryService,
    private router: Router , private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllCategorys();   
  }

  private getAllCategorys(){
    this.categoryService.getAllCategorys().subscribe(data => {
      this.categorys = data;
    });
  }

  getCategoryById(categoryId: number){
    this.router.navigate(['category-details', categoryId]);
  }

  editCategory(id: number){
    this.router.navigate(['category/update']);
    //this.router.navigate(['category/update', Category]);
  }

  deleteCategory(id: number){
    this.categoryService.deleteCategory(id).subscribe( data => {
      console.log(data);
      this.getAllCategorys();
    })
  }
  /**
  addCategory(a : any){
    this.categoryService.addCategory(a).subscribe(()=>{
      this.getAllCategorys();                                                                                                                                 
      this.form = false ; 
    });
  }

  editArticle(a: any){

    this.categoryService.editCategory(a).subscribe();
  }

  deleteCategory(categoryId: any){

    this.categoryService.deleteCategory(categoryId).subscribe(()=> this.getAllCategorys());
  }
   */

}
