import {HttpHeaders} from "@angular/common/http";
import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BASIC_AUTH, SERVER_API_URL} from "../../../app.constants";
import {Category} from "../model/category";
import {CategoryService} from "../service/category.service";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit
{

  categoryForm = new FormGroup({
    id: new FormControl({value:'',disabled: true}, Validators.minLength(2)),
    name: new FormControl(''),
  });

  constructor(private categoryService:CategoryService,
              private router:Router,
              private route: ActivatedRoute) {}

  ngOnInit()
  {
    const id = this.route.parent.snapshot.params.id;
    this.categoryForm.controls['id'].patchValue(id,{emitEvent: false});
    //this.route.params.pipe( switchMap((params: ParamMap) => id=params.get('id')));
    //this.route.paramMap.pipe( switchMap((params: ParamMap) => id=params.get('id')));
    //this.categoryForm.controls['id'].patchValue(id,{emitEvent: false});

  }

  updateCategory()
  {
    const category=new Category();
    category.id=this.categoryForm.get('id').value;
    category.name=this.categoryForm.get('name').value;
    const url=SERVER_API_URL+'api/v2/category/update';
    const httpOptions={
      headers: new HttpHeaders( {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + BASIC_AUTH} )
    };
    this.categoryService.updateCategory(url,category).subscribe(
      value => {},error1 => {},()=>{
        this.router.navigate(['/category/list']);
      });
  }

}
