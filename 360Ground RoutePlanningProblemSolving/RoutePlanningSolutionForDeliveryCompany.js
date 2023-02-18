/*
    by gsharew 2023-02-18
*/

class TravelingSalesPersonProblem{

     totalCost = 0;
     visitedBuildingContainer = [];

    findTheShortestPath( startingBuilding, ListOfBuildings ){
        
        //make sure the starting building is not negative and the staring building value is out of length building
        if(startingBuilding > ListOfBuildings[ 0 ].length - 1 || startingBuilding < 0 ){
            return [];
        }

        let totalBuildings = ListOfBuildings[ 0 ].length;

        //push the current Building as visited
        this.visitedBuildingContainer.push( startingBuilding );
        let currentBuilding = startingBuilding;

            for( var j = 0; j < totalBuildings - 1; j++ ){
                    
                    //get the current Building
                    currentBuilding = this.visitedBuildingContainer[ this.visitedBuildingContainer.length - 1 ];

                    // call the function to get the minimum weight and the shortest path route to the current Building
                    let weightAndNearestBuilding = this.minimumCostAndNearestRoute( ListOfBuildings, this.visitedBuildingContainer, currentBuilding ); 
                    
                    //add the cost of the current Building to the nearest Building
                    this.totalCost += weightAndNearestBuilding[ 0 ];

                    //add the current Building to visited Buildings list
                    this.visitedBuildingContainer.push( weightAndNearestBuilding[ 1 ] );
            }

            //get the last visited Building 
            let lastVisitedBuilding  = this.visitedBuildingContainer[ this.visitedBuildingContainer.length - 1 ];

            //then add the cost from the last Building to the starting Building 
            this.totalCost += ListOfBuildings[ lastVisitedBuilding ][ startingBuilding ];

            //add a route from the last Building to the starting Building (return the cyclist to his home)
            this.visitedBuildingContainer.push( startingBuilding );
        
        // then return the path and the weight in array mode
        return [ this.visitedBuildingContainer, this.totalCost ];
    }

    minimumCostAndNearestRoute( array, visitedBuildings, currentBuilding ){
        
        let weight = 0;
        let nearestBuilding;
       
        //assume the longest route weight is Infinity
        let theLongestRouteWeight = Infinity;

        for(let i = 0; i < array.length; i++){
            if( !visitedBuildings.includes( i ) && currentBuilding != i ){
                if(array[ currentBuilding ][ i ] < theLongestRouteWeight ){
                     weight = array[ currentBuilding ][ i ];
                     theLongestRouteWeight = weight;
                     nearestBuilding = i;
                }
            }
        }
        return [ weight, nearestBuilding ];
    }
  
}


/* 
  test cases 
*/

// var solution = new TravelingSalesPersonProblem().findTheShortestPath(-2, [[0,6,4,4,4], [6,0,3,2,1],[4,3,0,5,9],[4,2,5,0,8],[1,1,9,8,0]]);
// var solution = new TravelingSalesPersonProblem().findTheShortestPath(-1, [[0,3,6,2], [3,0,7,4],[6,7,0,8],[2,4,8,0]]);
//var solution = new TravelingSalesPersonProblem().findTheShortestPath(3, [[0,3,6,2], [3,0,7,4],[6,7,0,8],[2,4,8,0]]);
// var solution = new TravelingSalesPersonProblem().findTheShortestPath(-1, [[0,3], [3,0]]);
//var solution = new TravelingSalesPersonProblem().findTheShortestPath(1, [[0,6,4,4,4], [6,0,3,2,1],[4,3,0,5,9],[4,2,5,0,8],[1,1,9,8,0]]);
// var solution = new TravelingSalesPersonProblem().findTheShortestPath(2, [[0,3], [3,0]]);
var solution = new TravelingSalesPersonProblem().findTheShortestPath(3, [[0,10,15,20], [10,0,35,25], [15,35,0,30],[20,25,30,0]]);
// var solution = new TravelingSalesPersonProblem().findTheShortestPath(1, [[0,6,4,4,4], [6,0,3,2,1],[4,3,0,5,9],[4,2,5,0,8],[1,1,9,8,0]]);


let stringSolution = solution.length > 0 ? solution[ 0 ].join("---> ") : "";
let weight = solution.length > 0 ? solution[ 1 ] : 0;
console.log( "The optimal path is : " + stringSolution );
console.log( "The Total Weight is : " + weight );
console.log( "Time Complexity ( worest case ) is O( N * N ). b/c as it uses nested for loop." );
console.log( "Space complexity ( worest case ) is O(N) b/c as it stores every visited nodes to the array." );


