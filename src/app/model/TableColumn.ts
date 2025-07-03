export interface TableColumn {
label: string;
property:any;
type: 'text' ;
css?: string[];
sortable:boolean;
render?: (value?: any)=> string | HTMLElement;
onChange?:($event: any)=> void;
}