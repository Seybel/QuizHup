<template>
  <div class="container">
    <div class="background-shapes">
      <img class ="background-shapes--ellipse" src="../assets/img/ellipse.svg" alt="">
      <img class ="background-shapes--times" src="../assets/img/times.svg" alt="">
      <img class ="background-shapes--ellipseflip" src="../assets/img/ellipseflip.svg" alt="">
      <img class ="background-shapes--ellipse3" src="../assets/img/ellipse3.svg" alt="">
      <img class ="background-shapes--ellipse1" src="../assets/img/ellipse1.svg" alt="">
      <img class ="background-shapes--rectangle" src="../assets/img/rectangle.svg" alt="">
      <img class ="background-shapes--ellipse2" src="../assets/img/ellipse2.svg" alt="">
    </div>

    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-question my-5">
          <div class="card-body">
            <p v-if="questions.length" class="card-title text-center">
                {{ currentQuestion.question }}
            </p>
            <hr class="my-4">
            <b-list-group>
              <b-list-group-item
                v-for="(shuffledAnswer, index) in shuffledAnswers"
                :key="index"
                @click.prevent="selectAnswer(index)"
                :class="answerClass(index)"
                >
                {{ shuffledAnswer }}
               </b-list-group-item>       
            </b-list-group>

            <b-button id="nextBtn" @click="nextDelay" variant="success">Next</b-button>
          </div>
          
        </div>
      </div>
    </div>
      
  </div>
</template>

<script>
import _ from 'lodash';

  export default {  
    data() {
      return {
        questions: [],
        index: 0,

        selectedIndex: null,
        correctIndex: null,
        shuffledAnswers: [],
        answered: false,

        numCorrect: 0,
        numTotal: 0
      }
    },

    watch: {      
      currentQuestion: {
        immediate: true,
        handler() {
          this.selectedIndex = null
          this.answered = false
          this.shuffleAnswers()
        },
        deep: true
      }
    },

    methods: {
      next() {
        //This is only for debugging purposes and will later be removed
        if(this.index === 14) {
          document.getElementById("nextBtn").disabled = true;
        }
        else {
          return this.index++
        }
      },
      nextDelay() {
        //Delays the next question function by 1.5 secs
        setTimeout(() => {
          this.next()
        }, 1500);
      },
      selectAnswer(index) {
        this.selectedIndex = index
        // console.log(this.selectedIndex);
        this.submitAnswer()
        this.nextDelay()
      },
      shuffleAnswers() {
        let answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer]
         this.shuffledAnswers = _.shuffle(answers)

         this.correctIndex = this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer)
      },
      submitAnswer() {
        let isCorrect = false
        if(this.selectedIndex === this.correctIndex) {
          isCorrect = true
        }
        this.answered = true

        this.increment(isCorrect)
      },
      increment(isCorrect) {
        if(isCorrect) {
          this.numCorrect++
        }
        this.numTotal++
      },
      answerClass(index) {
        let answerClass = ''

        if(!this.answered && this.selectedIndex === index) {
          answerClass = 'selected'
        }
        else if(this.answered && this.correctIndex === index) {
          answerClass = 'correct'
        }
        else if(this.answered && this.selectedIndex === index && this.correctIndex !== index) {
          answerClass = 'incorrect'
        }

        return answerClass
      }
    },

    mounted: function() {
      fetch('https://opentdb.com/api.php?amount=15&category=21', {
        method: 'get'
      })
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        this.questions = jsonData.results
      }) 
    },

    computed: {
      currentQuestion: function() {
        return this.questions[this.index]
      },
      answers: function() {
        let answers = [...this.currentQuestion.incorrect_answers]
          answers.push(this.currentQuestion.correct_answer)
          return answers
      }
    }
  }
</script>

<style lang="scss" scoped>


  .background-shapes{
    
    &--ellipse{
      position: $fixed;
      width: 120px;
      left:0%;
      bottom: 85%;
    }

    &--times {
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

    &--ellipse3{
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
    font-size: 1.25rem;
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
    margin-bottom: 12px;
    padding-top: 8px;
    vertical-align: middle;
  }

  .list-group-item:hover{
   cursor: pointer;
   transform: translateY(3%);
   transition: all .05s;
  //  background-color: $emphasis-color;
  }

  .list-group{
    height: 250px;
  }

  .selected {
    background-color: $qh-default;
    opacity: 0.9;
  }

  .correct {
    background-color: $light-green;
  }

  .incorrect {
    background-color: $light-red;
  }
</style>