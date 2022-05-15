import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "src/app/Model/category";


@Injectable({
    providedIn: 'root'
  })

export class CategoryService {
    
    httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json'
        })
    }
    readonly API_URL="/api/Category";
    constructor(private httpClient:HttpClient) { }

    getAllCategorys() : Observable<Category[]>{
        //console.log(this.httpClient.get<Category[]>(`${this.API_URL}`)) 
        return this.httpClient.get<Category[]>(`${this.API_URL}/getAllCategorys`)
       //return this.httpClient.get(${this.API_URL}/getAllCategorys);

    }

    getCategoryById(id: number): Observable<Category>{
        return this.httpClient.get<Category>(`${this.API_URL}/getCategoryById/${id}`);
      }

    addCategory(category: Category): Observable<Category> {
        return this.httpClient.post<Category>(`${this.API_URL}/create`,category)
    }

    editCategory(category: any){
        return this.httpClient.put(`${this.API_URL}/update`,category)
    
    }
    deleteCategory(categoryId: any){
        return this.httpClient.delete(`${this.API_URL}/delete/${categoryId}`)
    }
}
