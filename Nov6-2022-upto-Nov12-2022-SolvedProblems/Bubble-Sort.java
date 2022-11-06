    public static void countSwaps(List<Integer> a) {
    // Write your code here
     int swapcounter = 0;
            for( int i = 0; i < a.size(); i++) {
                 for ( int j = 0; j < a.size() - 1; j++ ){
                      if( a.get( j  ) > a.get(j + 1 )){
                          int temp = a.get(j);
                          a.set(j, a.get(j + 1));
                          a.set(j+1, temp);
                          swapcounter++;
                      }
                 }
            }
            System.out.println("Array is sorted in " + swapcounter + " swaps.");  
            System.out.println("First Element: " + a.get(0));  
            System.out.println("Last Element: " + a.get(a.size() - 1));  
    return;
    }
