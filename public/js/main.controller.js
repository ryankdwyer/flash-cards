app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
    $scope.score = ScoreFactory;
    FlashCardsFactory.getFlashCards()
        .then(function (data) {
            console.log(data);
            $scope.flashCards = data;
        });
    $scope.selectedIndex = -1;
    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.getCategoryCards = function (category) {
        FlashCardsFactory.getFlashCards(category)
            .then(function (data) {
                console.log(data);
                $scope.flashCards = data;
            });
        // console.log("current Target: ", $event.currentTarget);
        //$event.currentTarget.addClass("active");
    };

    $scope.answerQuestion = function (answer, flashCard) {
        if (!flashCard.answered) {
            flashCard.answered = true;
            flashCard.answeredCorrectly = answer.correct;
        }
    };

    $scope.setActive = function ($index) {
        $scope.selectedIndex = $index;
    };

    $scope.updateScore = function (correctness) {
        if (correctness) {
            $scope.score.correct++;
        } else {
            $scope.score.incorrect++;
        }

    };
});

app.filter('cheat', function(){
    return function(answers) {
        return answers.filter(function(element){
            return element.correct;
        });
    };
});
