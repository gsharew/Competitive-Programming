    public static List<Integer> gradingStudents(List<Integer> grades) {
     List<Integer> studentGrade = new ArrayList<Integer>();
    // Write your code here
          for ( int i = 0; i < 4; i++ ){
                    if(grades.get(i) >= 38){
                        if(grades.get(i) % 5 >= 3){
                             studentGrade.add(grades.get(i) - (grades.get(i) % 5) + 5);
                        }else{
                            studentGrade.add(grades.get(i));
                        }
                    }
                    else {
                          studentGrade.add(grades.get(i));
                    }
          }
      return studentGrade;
    }o

