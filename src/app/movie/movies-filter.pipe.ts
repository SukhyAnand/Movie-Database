import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'movieFilter'})
export class MovieFilterPipe implements PipeTransform {
    transform(value: any[], args: string, selectedFilterCategory: string): any[] {
        let filter: string = args ? args.toLocaleLowerCase() : null;
        let filterCategory: any;
        if (filter) {
            if (selectedFilterCategory == "Title") {
                return value.filter((movie) => movie.Title.toLocaleLowerCase().startsWith(filter) != false);
            } else if (selectedFilterCategory == "Description") {
                return value.filter((movie) => movie.Description.toLocaleLowerCase().startsWith(filter) != false);
            } else if (selectedFilterCategory == "Rating") {
                return value.filter((movie) => movie.Rating.toLocaleLowerCase().startsWith(filter) != false);
            } else if (selectedFilterCategory == "Votes") {
                return value.filter((movie) => movie.Votes.toLocaleLowerCase().startsWith(filter) != false);
            }
        }
        return value;
    }
}