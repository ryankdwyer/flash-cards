app.controller('MainController', function ($scope, FlashCardsFactory) {

    FlashCardsFactory.getFlashCards()
        .then(function (data) {
            console.log(data);
            $scope.flashCards = data;
        });

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
    };

    $scope.answerQuestion = function (answer, flashCard) {
        if (!flashCard.answered) {
            flashCard.answered = true;
            flashCard.answeredCorrectly = answer.correct;
        }
    };
});
