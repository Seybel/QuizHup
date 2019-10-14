<template>
  <div class="container">
    <div class="background__shapes">
      <img class ="background__shapes--ellipse" src="../assets/img/Ellipse.png" alt="">
      <img class ="background__shapes--vector3" src="../assets/img/Vector 3.png" alt="">
      <img class ="background__shapes--ellipseflip" src="../assets/img/Ellipseflip.png" alt="">
      <img class ="background__shapes--ellipse4" src="../assets/img/Ellipse 4.png" alt="">
      <img class ="background__shapes--ellipse1" src="../assets/img/Ellipse 1.png" alt="">
      <img class ="background__shapes--ellipse3" src="../assets/img/Ellipse 3.png" alt="">
      <img class ="background__shapes--rectangle" src="../assets/img/Group 1.png" alt="">
      <img class ="background__shapes--ellipse2" src="../assets/img/Ellipse 2.png" alt="">
    </div>

    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-question my-5">
          <div class="card-body">
            <p class="card-title text-center">
              {{ questions[index].question}} 
            </p>
            <hr class="my-4">
            <b-list-group>
              <!-- this -->
              <!-- <b-list-group-item v-for="(answer, index) in answers" :key="index">
                {{ answers }}
              </b-list-group-item> -->
             
            </b-list-group>
            <b-button class="card-body--btn"   variant="primary" >Submit</b-button>
            <b-button class="card-body--btn"  variant="success" > Next</b-button>
          </div>
          
        </div>
      </div>
    </div>
      
  </div>
</template>

<script>
  export default { 
    
    data() {
      return {
        questions : [],
        index: 3,
        
      }

      
    },
    mounted: function(){
      fetch('https://opentdb.com/api.php?amount=10&type=multiple', {
        method:'get'
      })
      .then((response) => {
        return response.json();
      }) 
      .then((jsonData) => {
        this.questions = jsonData.results;
      });
    },
    // i'm trying to get the correct and incorrect answers from the questions in one array 
    // computed:{
    //   answers: function(){
    //     let answers = [...this.questions[index].incorrect_answers];
    //     answers.push(this.questions[index].correct_answer);
    //     return answers
    //   },
    // }
  }
</script>

<style lang="scss" scoped>


  .background__shapes{
    
    &--ellipse{
      position: $fixed;
      width: 120px;
      left:0%;
      bottom: 85%;
  
    }

    &--vector3 {
      position: $relative;
      width: 20px;
      left: 70%;
    }

    &--ellipseflip {
      position: $fixed;
      width: 150px;
      left: 92%;
      transform: rotate(300deg);
    }

    &--ellipse4{
      position: $fixed;
      width: 150px;
      right: 11%;
      top: 90%;
    }

    &--ellipse1{
      width: 50px;
      position: $fixed;
      top: 90%;
    }

    &--ellipse3{
      width: 50px;
      position: $fixed;
      top: 50%;
    }

    &--rectangle{
      width: 70px;
      position: $fixed;
      top: 80%;
      left: 50%;
    }

    &--ellipse2{
      position: $fixed;
      width: 50px;
      top: 50%;
      left: 80%;
    }
      
  }

  .card-question{
    border: 0;
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
  } 

  .card-question .card-title {
    margin-bottom: 2rem;
    font-weight: $light;
    font-size: 1.5rem;
  }

  .card-question .card-body {
    padding: 2rem;

    &--btn{
      transform: translate(90%);
      margin: 0 18px;
    }
  }

  .list-group-item{
    border-radius: 50px;
    text-align: center;
    height: 40px;
    margin-bottom: 10px;
  }

  // .list-group-item:hover{
  //   cursor: pointer;
  //  transform: translateY(3%);
  //  transition: all .05s;
  //  background-color: aqua;
  // }

  .list-group{
    height: 250px;
  }
</style>