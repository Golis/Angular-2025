import { Pipe, PipeTransform } from "@angular/core";
import { Employee } from "../../models/employee";

@Pipe({
    name:'FilterByCategoryPipe',
    standalone: false
})
export class FilterByCategoryPipe implements PipeTransform{
    transform(employees: Employee[], rank: string) {
        return employees.filter(employee => employee.rank === rank);
    }
}