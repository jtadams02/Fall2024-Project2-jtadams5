const BingSearch = (function () {
    const api_key = atob('Yzk5ZjQ3YjUyYjI3NGEyMWIyMWU3M2FmZWIxYWEyMGE=');
    const base_url = 'https://api.bing.microsoft.com/v7.0';

    function generateRequest(query, endpoint, callback) {
        const url = `${base_url}/${endpoint}?q=${encodeURIComponent(query)}`;

        $.ajax({
            url: url,
            method: 'GET',
            headers: {
                'Ocp-Apim-Subscription-Key': api_key
            },
            success: function (response) {
                callback(null, response);
            },
            error: function (err) {
                callback(err);
            }
        });
    }

    return {
        searchWeb: function (query, callback) {
            if (!query) {
                callback('No search query provided');
                return;
            }
            generateRequest(query, 'search', callback);
        },

        searchImages: function (query, callback) {
            if (!query) {
                callback('No search query provided');
                return;
            }
            generateRequest(query, 'images/search', callback);
        },

        searchVideos: function (query, callback) {
            if (!query) {
                callback('No search query provided');
                return;
            }
            generateRequest(query, 'videos/search', callback);
        }
    }
})();
