import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService
{

  constructor(private httpClient:HttpClient) { }

  getCategories(url)
  {
    return this.httpClient.get<Category[]>(url);
  }

  createCategory(url, category)
  {
      return this.httpClient.post(url,category);
    //return this.httpClient.put(url,httpOptions,category);
  }

  getCategoryDetails(url)
  {
    return this.httpClient.get<Category>(url);
  }

  updateCategory(url: string, category: Category)
  {
    return this.httpClient.put(url,category);
  }


  deleteCategory(url: string)
  {
    return this.httpClient.delete(url);
  }
}
