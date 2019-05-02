import {Component, OnInit} from "@angular/core";
import {NgxSpinnerService} from "ngx-spinner";
import {Observable} from "rxjs";
import {SERVER_API_URL} from "../../../app.constants";
import {Category} from "../model/category";
import {CategoryService} from "../service/category.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit
{
  categoryObservable: Observable<Category[]>;

  constructor(private categoryService: CategoryService, private spinner: NgxSpinnerService)
  {
  }

  ngOnInit()
  {
    this.getCategories();
  }

  getCategories()
  {

    let url=SERVER_API_URL+'api/v2/category/list';
    this.spinner.show();
    this.categoryService.getCategories(url).subscribe(
      data =>
      {
        // @ts-ignore
        this.categoryObservable=data;
        this.spinner.hide();
      },
      err =>
      {
        this.spinner.hide();
        console.error( err );
      },
      () =>
      {
        this.spinner.hide();
      } );

    return this.categoryObservable;
  }

  categoriesDataAvailable():boolean
  {
    return this.categoryObservable!==undefined;
  }
}
