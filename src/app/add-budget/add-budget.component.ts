import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Budget } from '../Models/budgets';

@Component({
  selector: 'app-add-budget',
  templateUrl: './add-budget.component.html',
  styleUrls: ['./add-budget.component.css']
})
export class AddBudgetComponent implements OnInit {

  constructor(private httpService: HttpService,  private formBuilder: FormBuilder) { }

  budget: FormGroup;
  objBudget: Budget;
  add = false;

  ngOnInit() {
    this.budget = this.formBuilder.group ({
      name: new FormControl(''),
      month: new FormControl(''),
      year: new FormControl(''),
      comment: new FormControl(''),
      ownerName: new FormControl(''),
    });
  }

  addBudget() {
  const budgetData: Budget = {
    budget_id: 0,
    name: this.budget.get('name').value,
    month: this.budget.get('month').value,
    year: this.budget.get('year').value,
    comment: this.budget.get('comment').value,
    ownerName: this.budget.get('ownerName').value
    };
  this.httpService.addBudget(budgetData).subscribe(
    budget => {
      console.log(budget);
    }
  );
  this.budget.reset();
}
}
