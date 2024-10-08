let prev_results = null;
$(document).ready(function () {
    $('#search').click(function () {
        let text = $('#query').val();
        BingSearch.searchWeb(text, function (err, data) {
            if (err) {
                console.log('AHHHHH');
                return null;
            }
            console.log(data);
            let results = data.webPages.value;
            let paragraphs = [];
            // Iterate through every website and append the name to the paragraph string
            results.forEach((result) => {
                let currP = `<a href='${result.url}'>${result.name}</a><br><b>${result.siteName}</b> - ${result.snippet}`;
                paragraphs.push(currP);
            });
            $('#results').empty();
            paragraphs.forEach((p) => {
                $('#results').append('<p>' + p + '</p>');
            });
        }); 
    });

    let hidden = 0;
    $('#lucky').click(function () {
        let text = $('#query').val();
        BingSearch.searchWeb(text, function (err, data) {
            if (err) {
                console.log('AHHHHH');
                return;
            }
            let firstRes = data.webPages.value[0].url;
            window.location.href = firstRes;
        });
    });
    $('#get-time').click(function () {
        const now = new Date();
        const timeString = now.toLocaleTimeString();

        // Set the time in the dialog
        $('#localTime').text(timeString);

        $('#timeDialog').dialog({
            modal: true,
            width: 300,
            height: 200,
            buttons: {
                Close: function () {
                    $(this).dialog("close");
                }
            }
        });
    });

    $(document).ready(function () {
        // Array to store the background images
        const backgroundImages = [
            'https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // First image path
            'path/to/image2.jpg'  // Second image path
        ];

        // Variable to track which image is currently being shown
        let currentImageIndex = 0;

        // Click event on the heading
        $('h1').click(function () {
            // Toggle between the two images
            currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
            $('body').css('background-image', `url(${backgroundImages[currentImageIndex]})`);
        });
    });
});

function result(err, response) {
    if (err) {
        console.log("AHHHHHHHHHHHHHH");
        return;
    }
    console.log(response);
}
