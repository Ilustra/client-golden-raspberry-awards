export interface Sort {
	sorted: boolean;
	unsorted: boolean;
}

export interface Pageable {
	sort: Sort;
	pageSize: number;
	pageNumber: number;
	offset: number;
	paged: boolean;
	unpaged: boolean;
}

export interface Base {
	// Defina as propriedades específicas do seu objeto base aqui
	id?: number;
	[key: string]: any;
}

export interface PageInfo {
	pageable: Pageable;
	totalElements: number;
	last: boolean;
	totalPages: number;
	first: boolean;
	sort: Sort;
	number: number;
	numberOfElements: number;
	size: number;
}

export interface PageData {
	content: Base[] ;
	pageable: Pageable;
    numberOfElements: number;
    number: number;
    last: false;
    first: true;
    empty: boolean;
    size: number;
    sort: Sort;
    totalElements: number;
    totalPages: number;
    
}