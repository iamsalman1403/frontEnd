//menu

function openMenu(){
    document.getElementById('sideMenu').style.width = '250px';
}

function closeMenu() {
    document.getElementById('sideMenu').style.width = '0px';
}


//pie chart

$(window).scroll(function () {

    /* Check the location of each desired element */
    $('.chart').each(function (i) {

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if (bottom_of_window > bottom_of_object) {

            $('.chart').easyPieChart({
                size: 180,
                lineWidth: 10,
                lineCap: "square",
                barColor: '#2C3E50',
                trackColor: "#ffffff",
                animate: 3000,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });

        }

    });

});

//counter

jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
});


//subscribe form

document.getElementById('myForm').addEventListener('submit', subscribeForm);

var saveForm = localStorage.getItem('saveForm');

function subscribeForm(e){
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    var FormDetail = {
        fName: name,
        fEmail: email,
    }
    console.log(FormDetail);
    
    if (saveForm ===  null) {
        var FormData = []
        FormData.push(FormDetail)
        localStorage.setItem('saveForm', JSON.stringify(FormData))
    }
    else{
        var FormData = [JSON.parse(localStorage.getItem('saveForm'))]
        FormData.push(FormDetail)
        localStorage.setItem('saveForm', JSON.stringify(FormData))
    }

}
