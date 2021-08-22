(function () {
    //add class value to the page 
    let localValue = localStorage.getItem('color-option');
    console.log(localValue);

    if (localValue == null) {
        $(':root').css('--logoBlue', '#0085CC');
    } else {
        $(':root').css('--logoBlue', localValue);
    }

    $('.carousel').flipster({
        style:'carousel',
        spacing:-0.4,
        loop: true,
        autoplay: 3000
    });

    $('.docCard').flipster({
        style:'flat',
        spacing:-0.4,
        loop: true,
        autoplay: 3000
    });

    $('.testCard').flipster({
        style:'flat',
        spacing:-0.4,
        loop: true,
        autoplay: 3000
    });

    $('.partner').flipster({
        style:'flat',
        spacing:-0.4,
        loop: true,
        autoplay: 3000
    });

    $('.clientTest').flipster({
        style:'flat',
        spacing:-0.4,
        loop: true,
        autoplay: 3000
    });

    //toogel palatte
    $('.switch .icon').on('click', function () {
        $('.switch .colors').toggleClass('d-none');
    });
    // change color
    $('.switch .colors .list-inline-item').on('click', function () {
        // console.log($(this).data('color'));
        // let colorValue = $(this).data('color');
        $(':root').css('--logoBlue', $(this).data('color'));
        console.log($(this).data('color'));
        localStorage.setItem('color-option', $(this).data('color'));
    });
}())