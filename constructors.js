class Car{
    constructor(make, model, year, isAvailable){
        this.make= make;
        this.model = model;
        this.year = year;
        this.isAvailable = isAvailable;
    }
    toggleAvailability(){
        this.isAvailable=!this.isAvailable;
    }
}
class Rental {
    constructor(car,renterName,rentalStartDate,rentalEndDate){
        this.car = car;
        this.renterName = renterName;
        this.rentalStartDate = rentalStartDate;
        this.rentalEndDate = rentalEndDate;
    }
    calculateRentaDuration(){
        const duration = this.rentalEndDate-this.rentalStartDate;
        return duration
    }
}
const Car = new car("Toyota", "Camry", 2021, "True");
const rental = new Rental(car, "Gladwell", new);
Date ("24-4-2024")new Date ("26-4-2024");

//
class Question{
    constructor(text,options,correctAnswer){
        this.text = text;
        this.options = options;
        this.correctAnswer = correctAnswer
    }
    checkAnswer(userAnswer){
      return userAnswer===this.correctAnswer;
    }
}
class Quiz{
constructor(){
    this.Questions= [];
    this.currentQuestionIndex = 0;
    this.score = 0;
}
addQuestion(question){
    this.question.push(question);
}
nextQuestion(){
    this.currentQuestionIndex++;
}
submitAnswer(userAnswer){
    const currentQuestion = this.question[this.currentQuestionIndex];
    if(currentQuestion.checkAnswer(userAnswer)){
        this.score++;
    }
    this.nextQuestion();
}
}
const question1 = new Question("How much will she pay?", [1000,1200,1500]);
