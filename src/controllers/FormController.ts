import * as angular from 'angular';
export interface FormScope extends ng.IScope{
    counter : number;
    // ab : () => void;
}

export class FormController implements ng.IController{
    


    constructor(private $scope : FormScope){
        $scope.counter = 0;
        this.cekArray();
        this.cekJSON();
        this.manipulateDOM();
    }


    manipulateDOM(){  
       angular.element(
           (<Element>document.getElementById('angular-box')
        )).css({
           width : "100px",
           height : "100px",
           backgroundColor : "green"
       });
    }

    cekArray(){
        let arr : number[] = [2,1,4,2,5,6];
        angular.forEach(arr,(val,index)=>{
            console.log(val);
        });      
    }

    cekJSON(){
        let json : string = "{\"nama\" : \"arief\"}";
        let result = angular.fromJson(json);
        console.log(result.nama);

        let toJSON  = {
            nama : "arief" ,
            alamat : "ME",
            location : {
                lat : 25.23 ,
                lng : 89.23
            }
        };

        let JSON = angular.toJson(toJSON);
        console.log(JSON);

        // console.log(toJSON.location.lat + " " + toJSON.location.lng);
    }


    change(){
       this.$scope.counter++; 
    }

}