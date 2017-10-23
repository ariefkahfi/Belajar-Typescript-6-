export interface IifScope extends ng.IScope{
    nama : string ;
}


export class IFController implements ng.IController {
    
    constructor(private $scope : IifScope){
        $scope.nama = "";
    }
}