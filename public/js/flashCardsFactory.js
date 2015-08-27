app.factory('FlashCardsFactory', function ($http) {
    return {
        getFlashCards: function (category) {
            var query = (category) ? ('/cards?category=' + category) : '/cards';
            // category = category || {};
            return $http.get(query)
                .then(function (response) {
                    // console.log(response.data);
                    return response.data;
                }, function (err) {
                    return err;
                });
        }
    };
});
