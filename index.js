// scroll up functionality
var _this = this;
$(function () {
    $(window).on("scroll", function () {
        if ($(_this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        }
        else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').on("click", function () {
        $('body,html').animate({
            scrollTop: 0
        }, 100);
        return false;
    });
});


// download resume
$("#resume").on("click", () => {
    console.log("clicked");
    const $downloadLink = $('<a>');
        
    // Set the link's attributes
    $downloadLink.attr('href', './Yuma_Takahashi.pdf'); // Replace with the actual file URL
    $downloadLink.attr('download', 'Yuma_Takahashi_Resume.pdf'); // Rename the downloaded file
    
    // Trigger a click event on the link
    $downloadLink[0].click();
    // $('<a>').attr('href', "./Yuma_Takahashi_Resume.pdf");
    // $('<a>').attr('download', "downloaded_resume.pdf");
    // $('<a>')[0].click();
})

