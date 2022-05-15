import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from '../Model/category';
import { CategoryService } from '../Service/Activity/category-service.service';
import { TokenStorageService } from '../Service/User/token-storage.service';


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
  isEmployee = false ;
  currentUserVar : any ;

  constructor(private tokenStorage:TokenStorageService, private categoryService: CategoryService,
    private router: Router , private modalService: NgbModal) { }

  ngOnInit(): void {
    this.currentUserVar = this.tokenStorage.getUser();
        console.log("User :" + JSON.stringify(this.currentUserVar.authorities))
        var authorityString = JSON.stringify(this.currentUserVar.authorities);
        if (authorityString.indexOf("ROLE_ADMIN") === -1) {
            this.isEmployee = true;
        } else
            this.isEmployee = false;


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
